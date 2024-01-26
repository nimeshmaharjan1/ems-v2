import Link from "next/link";

import { Rating } from "@/components/rating";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Shell } from "@/components/ui/shell";
import { AddToCartForm } from "../../_components/add-to-cart-form";
import { ProductImageCarousel } from "../_components/product-image-carousel";
import { UpdateProductRatingButton } from "../_components/update-product-rating-button";

interface ProductPageProps {
  params: {
    id: string;
  };
}

//
export default async function ProductPage({ params }: ProductPageProps) {
  const productId = Number(params.id);

  //   if (!product) {
  //     notFound();
  //   }

  return (
    <Shell className="pb-12 md:pb-14">
      {/* <Breadcrumbs
        segments={[
          {
            title: "Products",
            href: "/products",
          },
          {
            title: toTitleCase(product.category),
            href: `/products?category=${product.category}`,
          },
          {
            title: product.name,
            href: `/product/${product.id}`,
          },
        ]}
      /> */}
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        <ProductImageCarousel
          className="w-full md:w-1/2"
          //   images={product.images ?? []}
          images={[]}
          options={{
            loop: true,
          }}
        />
        <Separator className="mt-4 md:hidden" />
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <div className="space-y-2">
            <h2 className="line-clamp-1 text-2xl font-bold">Product Name</h2>
            <p className="text-base text-muted-foreground">
              {/* {formatPrice(1200)} */}
              12000
            </p>
            <Link
              href={`/products?store_ids`}
              // href={`/products?store_ids=${store.id}`}
              className="line-clamp-1 inline-block text-base text-muted-foreground hover:underline"
            >
              {/* {store.name} */}
              Baltra
            </Link>
          </div>
          <Separator className="my-1.5" />
          <p className="text-base text-muted-foreground">
            {/* {product.inventory} in stock */}
            in stock
          </p>
          <div className="flex items-center justify-between">
            <Rating rating={Math.round(5)} />
            {/* <Rating rating={Math.round(product.rating / 5)} /> */}
            <UpdateProductRatingButton />
          </div>
          <AddToCartForm productId={productId} showBuyNow={true} />
          <Separator className="mt-5" />
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="description"
          >
            <AccordionItem value="description" className="border-none">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>
                {/* {product.description ?? */}
                No description is available for this product
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Separator className="md:hidden" />
        </div>
      </div>
      {/* {store && otherProducts.length > 0 ? (
        <div className="space-y-6 overflow-hidden">
          <h2 className="line-clamp-1 flex-1 text-2xl font-bold">
            More products from {store.name}
          </h2>
          <ScrollArea orientation="horizontal" className="pb-3.5">
            <div className="flex gap-4">
              {otherProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="min-w-[260px]"
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      ) : null} */}
    </Shell>
  );
}

// export async function generateMetadata({
//   params,
// }: ProductPageProps): Promise<Metadata> {
//   const productId = Number(params.productId)

//   const product = await db.query.products.findFirst({
//     columns: {
//       name: true,
//       description: true,
//     },
//     where: eq(products.id, productId),
//   })

//   if (!product) {
//     return {}
//   }

//   return {
//     metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
//     title: toTitleCase(product.name),
//     description: product.description,
//   }
// }
