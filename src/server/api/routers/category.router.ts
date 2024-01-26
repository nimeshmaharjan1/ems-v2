import {
  categoryCreateController,
  categoryFindAllController,
} from "../controllers/category.controller";
import { categoryCreateSchema } from "../schemas/category.schema";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const categoryRouter = createTRPCRouter({
  categoryFindAllRoute: publicProcedure.query(
    async () => await categoryFindAllController(),
  ),

  categoryCreateRoute: publicProcedure
    .input(categoryCreateSchema)
    .mutation(async ({ input }) => {
      return await categoryCreateController(input);
    }),
});
