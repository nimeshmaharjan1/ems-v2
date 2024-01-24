"use client";

import Link from "next/link";
import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatPrice } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Check, Image, Loader2, Plus } from "lucide-react";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "switchable";
  isAddedToCart?: boolean;
  onSwitch?: () => Promise<void>;
}

export function ProductCard({
  variant = "default",
  isAddedToCart = false,
  onSwitch,
  className,
  ...props
}: ProductCardProps) {
  const [isPending, startTransition] = React.useTransition();

  return (
    <Card
      className={cn("h-full overflow-hidden rounded-sm", className)}
      {...props}
    >
      <Link aria-label={`View Product details`} href={`/products/1`}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={4 / 3}>
            {/* {product?.images?.length ? (
              <Image
                src={product.images[0]?.url ?? '/images/product-placeholder.webp'}
                alt={product.images[0]?.name ?? product.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                className="object-cover"
                loading="lazy"
              /> */}
            {/* // ) : ( */}
            <div
              aria-label="Placeholder"
              role="img"
              aria-roledescription="placeholder"
              className="flex h-full w-full items-center justify-center bg-secondary"
            >
              <Image
                className="h-9 w-9 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
            {/* // )} */}
          </AspectRatio>
        </CardHeader>
      </Link>
      <Link aria-label={`View Product details`} href={`/products`}>
        <CardContent className="grid gap-2.5 p-4">
          <CardTitle className="line-clamp-1">Product name</CardTitle>
          <CardDescription className="line-clamp-2">
            {formatPrice(1200, "NPR", "standard")}
          </CardDescription>
        </CardContent>
      </Link>
      <CardFooter className="p-4">
        {variant === "default" ? (
          <div className="flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between">
            <Link
              aria-label="Preview product"
              href={`/product-preview`}
              className={buttonVariants({
                variant: "outline",
                size: "sm",
                className: "h-8 w-full rounded-sm",
              })}
            >
              Preview
            </Link>
            <Button
              aria-label="Add to cart"
              size="sm"
              className="h-8 w-full rounded-sm"
              //   onClick={() => {
              //     startTransition(async () => {
              //       try {
              //         await addToCartAction({
              //           productId: product.id,
              //           quantity: 1,
              //         });
              //         toast.success('Added to cart.');
              //       } catch (error) {
              //         error instanceof Error ? toast.error(error.message) : toast.error('Something went wrong, please try again.');
              //       }
              //     });
              //   }}
              disabled={isPending}
            >
              {isPending && (
                <Loader2
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              Add to cart
            </Button>
          </div>
        ) : (
          <Button
            aria-label={isAddedToCart ? "Remove from cart" : "Add to cart"}
            size="sm"
            className="h-8 w-full rounded-sm"
            onClick={() => {
              startTransition(async () => {
                await onSwitch?.();
              });
            }}
            disabled={isPending}
          >
            {isPending ? (
              <Loader2
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            ) : isAddedToCart ? (
              <Check className="mr-2 h-4 w-4" aria-hidden="true" />
            ) : (
              <Plus className="mr-2 h-4 w-4" aria-hidden="true" />
            )}
            {isAddedToCart ? "Added" : "Add to cart"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
