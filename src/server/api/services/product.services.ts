import { db } from "@/server/db";
import {
  type T_ProductCreateSchema,
  type T_ProductFilterQuery,
  type T_ProductUpdateSchema,
} from "../schemas/product.schema";

export const productCreateService = async (data: T_ProductCreateSchema) => {
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
    include: {
      category: true,
      company: true,
      orderItems: true,
      reviews: true,
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
  let whereCondition = {};
  if (filterQuery.title) {
    whereCondition = {
      OR: [
        { title: { contains: filterQuery.title, mode: "insensitive" } },
        // Add more search criteria if needed
      ],
    };
  }
  const take = filterQuery.per_page || 10;
  const skip = (filterQuery.page - 1) * filterQuery.per_page;
  const totalRecords =
    (await db.product.count({
      where: whereCondition,
    })) ?? 0;
  const totalPages = Math.ceil(totalRecords / filterQuery.per_page);

  const orderBy: { [key: string]: "asc" | "desc" } = {}; // Define the type of orderBy object

  // Check if filterQuery.column and filterQuery.order are provided
  if (filterQuery.column && filterQuery.order) {
    orderBy[filterQuery.column] = filterQuery.order; // Set orderBy dynamically
  }
  const products = await db.product.findMany({
    skip,
    take,
    include: {
      category: true,
      company: true,
      orderItems: true,
      reviews: true,
    },
    where: whereCondition,
    orderBy,
  });
  products.forEach((product) => {
    product.images = parseImages(product.images) as unknown as string[];
  });

  return {
    products,
    totalPages,
    totalRecords,
    per_page: filterQuery.per_page,
    page: filterQuery.page,
  };
};
