import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { TRPCError } from "@trpc/server";
import { type T_CategoryCreateSchema } from "../schemas/category.schema";
import {
  categoryCreateService,
  categoryFindAllService,
} from "../services/category.service";

export const categoryCreateController = async (
  input: T_CategoryCreateSchema,
) => {
  try {
    const category = await categoryCreateService(input);
    return {
      data: category,
      message: "Category has been created",
      statusCode: 201,
    };
  } catch (err: unknown) {
    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Category with that title already exists",
        });
      }
    }
    throw err;
  }
};

export const categoryFindAllController = async () => {
  try {
    const categories = await categoryFindAllService();
    return {
      data: categories,
      message: "Categories have been fetched",
      statusCode: 200,
    };
  } catch (error) {
    throw error;
  }
};
