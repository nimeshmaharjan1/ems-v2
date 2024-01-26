import { db } from "@/server/db";
import {
  type T_ProductCreateSchema,
  type T_ProductFilterQuery,
  type T_ProductUpdateSchema,
} from "../schemas/product.schema";

export const productCreateService = async (data: T_ProductCreateSchema) => {
  console.log("product create service");
  const images = data?.images?.map((image) => JSON.stringify(image));
  const product = await db.product.create({
    data: {
      ...data,
      images: images, // Store images as a JSON string
    },
  });
  return product;
};

export const productUpdateService = async (data: T_ProductUpdateSchema) => {
  const images = data.body?.images?.map((image) => JSON.stringify(image));
  const product = await db.product.update({
    where: {
      id: data.productRequestParams.productId,
    },
    data: {
      ...data.body,
      images: images,
    },
  });
  return product;
};

type ImageObject = {
  id: string;
  name: string;
  url: string;
};

// Function to parse images from string to array of objects
const parseImages = (imagesStringArray: string[]): ImageObject[] => {
  return imagesStringArray.map(
    (imagesString) => JSON.parse(imagesString) as ImageObject,
  );
};

export const productFindUniqueService = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (product) {
    // Parse images if product exists
    product.images = parseImages(product.images) as unknown as string[];
  }

  return product;
};
export const productFindAllService = async (
  filterQuery: T_ProductFilterQuery,
) => {
  const take = filterQuery.limit || 10;
  const skip = (filterQuery.page - 1) * filterQuery.limit;
  const totalRecords = (await db.product.count()) ?? 0;
  const totalPages = Math.ceil(totalRecords / filterQuery.limit);
  const products = await db.product.findMany({
    skip,
    take,
    include: {
      category: true,
    },
  });
  products.forEach((product) => {
    product.images = parseImages(product.images) as unknown as string[];
  });

  return {
    products,
    totalPages,
    totalRecords,
    limit: filterQuery.limit,
    page: filterQuery.page,
  };
};
