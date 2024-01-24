"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Loader2, MinusIcon, PlusIcon } from "lucide-react";

interface AddToCartFormProps {
  productId: number;
  showBuyNow?: boolean;
}

export function AddToCartForm({ productId, showBuyNow }: AddToCartFormProps) {
  const id = React.useId();
  const router = useRouter();
  const [isAddingToCart, startAddingToCart] = React.useTransition();
  const [isBuyingNow, startBuyingNow] = React.useTransition();

  // react-hook-form
  //   const form = useForm<Inputs>({
  //     resolver: zodResolver(updateCartItemSchema),
  //     defaultValues: {
  //       quantity: 1,
  //     },
  //   })

  function onSubmit(data: { data: string }) {
    // startAddingToCart(async () => {
    //   try {
    //     await addToCart({
    //       productId,
    //       quantity: data.quantity,
    //     })
    //     toast.success("Added to cart.")
    //   } catch (err) {
    //     catchError(err)
    //   }
    // })
  }

  return (
    // <Form {...form}>
    <form
      className={cn(
        "flex max-w-[260px] gap-4",
        showBuyNow ? "flex-col" : "flex-row",
      )}
      // onSubmit={form.handleSubmit(onSubmit)}
    >
      <div className="flex items-center">
        <Button
          id={`${id}-decrement`}
          type="button"
          variant="outline"
          size="icon"
          className="size-8 shrink-0 rounded-r-none"
          // onClick={() =>
          //   form.setValue(
          //     "quantity",
          //     Math.max(0, form.getValues("quantity") - 1)
          //   )
          // }
          disabled={isAddingToCart}
        >
          <MinusIcon className="size-3" aria-hidden="true" />
          <span className="sr-only">Remove one item</span>
        </Button>
        {/* <FormField
          // control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem className="space-y-0">
              <FormLabel className="sr-only">Quantity</FormLabel> */}
        {/* <FormControl> */}
        <Input
          type="number"
          inputMode="numeric"
          min={0}
          className="h-8 w-16 rounded-none border-x-0"
          // {...field}
          // onChange={(e) => {
          //   const value = e.target.value;
          //   const parsedValue = parseInt(value, 10);
          //   if (isNaN(parsedValue)) return;
          //   field.onChange(parsedValue);
          // }}
        />
        {/* </FormControl> */}
        {/* <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button
          id={`${id}-increment`}
          type="button"
          variant="outline"
          size="icon"
          className="size-8 shrink-0 rounded-l-none"
          // onClick={() =>
          //   form.setValue("quantity", form.getValues("quantity") + 1)
          // }
          disabled={isAddingToCart}
        >
          <PlusIcon className="size-3" aria-hidden="true" />
          <span className="sr-only">Add one item</span>
        </Button>
      </div>
      <div className="flex items-center space-x-2.5">
        {showBuyNow ? (
          <Button
            type="button"
            aria-label="Buy now"
            size="sm"
            className="w-full"
            //   onClick={() => {
            //     startBuyingNow(async () => {
            //       try {
            //         await addToCart({
            //           productId,
            //           quantity: form.getValues("quantity"),
            //         })
            //         router.push("/cart")
            //       } catch (err) {
            //         catchError(err)
            //       }
            //     })
            //   }}
            disabled={isBuyingNow}
          >
            {isBuyingNow && (
              <Loader2
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Buy now
          </Button>
        ) : null}
        <Button
          aria-label="Add to cart"
          type="submit"
          variant={showBuyNow ? "outline" : "default"}
          size="sm"
          className="w-full"
          disabled={isAddingToCart}
        >
          {isAddingToCart && (
            <Loader2 className="mr-2 size-4 animate-spin" aria-hidden="true" />
          )}
          Add to cart
        </Button>
      </div>
    </form>
    // </Form>
  );
}
