import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { TRPCError } from "@trpc/server";
import {
  type T_ProductCreateSchema,
  type T_ProductFilterQuery,
  type T_ProductReqParams,
  type T_ProductUpdateSchema,
} from "../schemas/product.schema";
import {
  productCreateService,
  productFindAllService,
  productFindUniqueService,
  productUpdateService,
} from "../services/product.services";

export const productCreateController = async (input: T_ProductCreateSchema) => {
  console.log("hereeeeeeeeeeeeeee");
  try {
    const product = await productCreateService(input);
    return {
      statusCode: 201,
      data: product,
      message: "Product has been created",
    };
  } catch (err: unknown) {
    console.log("product create controller error: ", err);
    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Product with that title already exists",
        });
      }
    }
    throw err;
  }
};

export const productUpdateController = async ({
  paramsInput,
  input,
}: {
  paramsInput: T_ProductReqParams;
  input: T_ProductUpdateSchema["body"];
}) => {
  try {
    const check = await productFindUniqueService(paramsInput.productId);
    if (!check) {
      return {
        status: 404,
        message: "Product does not exist",
      };
    }
    const product = await productUpdateService({
      body: input,
      productRequestParams: paramsInput,
    });
    return {
      statusCode: 200,
      data: product,
      message: "Product has been updated",
    };
  } catch (error) {
    throw error;
  }
};

export const productFindUniqueController = async (
  paramsInput: T_ProductReqParams,
) => {
  try {
    const product = await productFindUniqueService(paramsInput.productId);
    if (!product) {
      return {
        statusCode: 404,
        message: "Product not found",
      };
    }
    return {
      statusCode: 200,
      data: {
        product,
      },
      message: "Product has been fetched",
    };
  } catch (error) {
    console.log("Product find one controller error: ", error);
    throw error;
  }
};

export const productFindAllController = async (
  filterQuery: T_ProductFilterQuery,
) => {
  try {
    const { limit, page, products, totalPages, totalRecords } =
      await productFindAllService({
        limit: filterQuery.limit,
        page: filterQuery.page,
      });
    return {
      message: "Products have been fetched",
      statusCode: 200,
      data: {
        products,
      },
      pagination: {
        totalPages,
        totalRecords,
        limit,
        page,
      },
    };
  } catch (error) {
    throw error;
  }
};
