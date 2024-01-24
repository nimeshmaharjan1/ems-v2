"use client";

import * as React from "react";

// import { updateProductRating } from "@/lib/actions/product"
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart, Loader2 } from "lucide-react";

// interface UpdateProductRatingButtonProps extends ButtonProps {
//   productId: number;
//   rating: number;
// }

type UpdateProductRatingButtonProps = ButtonProps

export function UpdateProductRatingButton({
  // productId,
  // rating,
  className,
  ...props
}: UpdateProductRatingButtonProps) {
  const [isFavoriting, startFavoriting] = React.useTransition();

  return (
    <Button
      title="Favorite"
      variant="secondary"
      size="icon"
      className={cn("size-8 shrink-0", className)}
      //   onClick={() => {
      //     startFavoriting(async () => {
      //       try {
      //         await updateProductRating({
      //           id: productId,
      //           rating: rating + 1,
      //         })
      //         toast.success("Favorited product.")
      //       } catch (err) {
      //         catchError(err)
      //       }
      //     })
      //   }}
      disabled={isFavoriting}
      {...props}
    >
      {isFavoriting ? (
        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
      ) : (
        <Heart className="size-4" aria-hidden="true" />
      )}
      <span className="sr-only">Favorite</span>
    </Button>
  );
}
