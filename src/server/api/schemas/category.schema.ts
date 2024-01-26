import { z, type TypeOf } from "zod";

export const categoryCreateSchema = z.object({
  name: z.string().min(1, "Category name is required"),
});

export type T_CategoryCreateSchema = TypeOf<typeof categoryCreateSchema>;
