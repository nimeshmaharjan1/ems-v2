import { PRODUCT_STATUS } from "@prisma/client";
import { z, type TypeOf } from "zod";

export const productSchema = z.object({
  model: z.string().optional(),
  images: z.array(z.string()).optional(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  price: z
    .number({
      required_error: "Price is required",
    })
    .positive("Price must be greater than 0"),
  crossingPrice: z
    .number()
    .positive("Crossing price must be greater than 0")
    .optional(),
  sellingPrice: z
    .number()
    .positive("Selling price must be greater than 0")
    .optional(),
  hasOffer: z.boolean().optional(),
  wholesaleCreditPrice: z
    .number()
    .positive("Wholesale credit price must be greater than 0"),
  wholesaleCashPrice: z
    .number()
    .positive("Wholesale cash price must be greater than 0"),
  status: z.nativeEnum(PRODUCT_STATUS, {
    required_error: "Product status is required",
  }),
  categoryId: z.string().min(1, "Category is required"),
  companyId: z.string().min(1, "Company is required"),
  quantity: z.number({
    required_error: "Quantity is required",
  }),
});

export const productRequestParams = z.object({
  productId: z.string(),
});

export const updateProductSchema = z.object({
  productRequestParams,
  body: productSchema.partial(),
});

export const productFilterQuery = z.object({
  limit: z.number().default(10),
  page: z.number().default(1),
});

export type T_ProductCreateSchema = TypeOf<typeof productSchema>;
export type T_ProductReqParams = TypeOf<typeof productRequestParams>;
export type T_ProductUpdateSchema = TypeOf<typeof updateProductSchema>;
export type T_ProductFilterQuery = TypeOf<typeof productFilterQuery>;
