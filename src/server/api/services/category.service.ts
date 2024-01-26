import { db } from "@/server/db";
import { type T_CategoryCreateSchema } from "../schemas/category.schema";

export const categoryCreateService = async (input: T_CategoryCreateSchema) => {
  const category = await db.category.create({
    data: input,
  });
  return category;
};

export const categoryFindAllService = async () => {
  const categories = await db.category.findMany();
  return categories;
};
