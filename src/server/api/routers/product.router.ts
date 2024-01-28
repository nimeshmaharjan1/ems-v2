import {
  productCreateController,
  productFindAllController,
  productFindUniqueController,
} from "../controllers/product.controller";
import {
  productFilterQuery,
  productRequestParams,
  productSchema,
} from "../schemas/product.schema";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const productRouter = createTRPCRouter({
  productCreateRoute: publicProcedure
    .input(productSchema)
    .mutation(({ input }) => productCreateController(input)),
  productFindAllRoute: publicProcedure
    .input(productFilterQuery)
    .query(({ input }) => productFindAllController(input)),
  productFindUniqueRoute: publicProcedure
    .input(productRequestParams)
    .query(({ input }) => productFindUniqueController(input)),
});
