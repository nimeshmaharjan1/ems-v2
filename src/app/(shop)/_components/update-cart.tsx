"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash } from "lucide-react";
import * as React from "react";

export function UpdateCart() {
  const [isPending, startTransition] = React.useTransition();

  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center space-x-1">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          //   onClick={() => {
          //     startTransition(async () => {
          //       try {
          //         await updateCartItemAction({
          //           productId: cartLineItem.id,
          //           quantity: Number(cartLineItem.quantity) - 1,
          //         });
          //       } catch (error) {
          //         error instanceof Error ? toast.error(error.message) : toast.error('Something went wrong, please try again.');
          //       }
          //     });
          //   }}
          disabled={isPending}
        >
          <Minus className="h-3 w-3" aria-hidden="true" />
          <span className="sr-only">Remove one item</span>
        </Button>
        <Input
          type="number"
          min="0"
          className="h-8 w-14"
          value={10}
          //   onChange={(e) => {
          //     startTransition(async () => {
          //       try {
          //         await updateCartItemAction({
          //           productId: cartLineItem.id,
          //           quantity: Number(e.target.value),
          //         });
          //       } catch (error) {
          //         error instanceof Error ? toast.error(error.message) : toast.error('Something went wrong.');
          //       }
          //     });
          //   }}
          disabled={isPending}
        />
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          //   onClick={() => {
          //     startTransition(async () => {
          //       try {
          //         await updateCartItemAction({
          //           productId: cartLineItem.id,
          //           quantity: Number(cartLineItem.quantity) + 1,
          //         });
          //       } catch (error) {
          //         error instanceof Error ? toast.error(error.message) : toast.error('Something went wrong.');
          //       }
          //     });
          //   }}
          disabled={isPending}
        >
          <Plus className="h-3 w-3" aria-hidden="true" />
          <span className="sr-only">Add one item</span>
        </Button>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        // onClick={() => {
        //   startTransition(async () => {
        //     try {
        //       await deleteCartItemAction({
        //         productId: cartLineItem.id,
        //       });
        //     } catch (error) {
        //       error instanceof Error ? toast.error(error.message) : toast.error('Something went wrong.');
        //     }
        //   });
        // }}
        disabled={isPending}
      >
        <Trash className="h-3 w-3" aria-hidden="true" />
        <span className="sr-only">Delete item</span>
      </Button>
    </div>
  );
}
