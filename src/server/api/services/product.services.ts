import { db } from "@/server/db";
import {
  type T_ProductCreateSchema,
  type T_ProductFilterQuery,
  type T_ProductUpdateSchema,
} from "../schemas/product.schema";

export const productCreateService = async (data: T_ProductCreateSchema) => {
  const product = await db.product.create({
    data,
  });
  return product;
};

export const productUpdateService = async (data: T_ProductUpdateSchema) => {
  const product = await db.product.update({
    where: {
      id: data.productRequestParams.productId,
    },
    data: data.body,
  });
  return product;
};

export const productFindUniqueService = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
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
  return {
    products,
    totalPages,
    totalRecords,
    limit: filterQuery.limit,
    page: filterQuery.page,
  };
};
