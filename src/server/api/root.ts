import { postRouter } from "@/server/api/routers/post";
import { createTRPCRouter } from "@/server/api/trpc";
import { categoryRouter } from "./routers/category.router";
import { productRouter } from "./routers/product.router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  product: productRouter,
  category: categoryRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
