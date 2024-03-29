"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { UpdateCart } from "./update-cart";

export default function CartSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label="Open cart"
          variant="outline"
          size="icon"
          className="relative"
        >
          <Badge
            variant="secondary"
            className="absolute -right-2 -top-2 h-6 w-6 rounded-full p-2"
          >
            2
          </Badge>
          {/* {itemCount > 0 && (
            <Badge variant="secondary" className="absolute -right-2 -top-2 h-6 w-6 rounded-full p-2">
              {itemCount}
            </Badge>
          )} */}
          <ShoppingCart className="h-4 w-4" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-1">
          <SheetTitle>Cart 2</SheetTitle>
          {/* <SheetTitle>Cart {itemCount > 0 && `(${itemCount})`}</SheetTitle> */}
        </SheetHeader>
        <Separator />
        <>
          <div className="flex flex-1 flex-col gap-5 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="flex flex-col gap-5 pr-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded">
                      <Image
                        src={"/images/product-placeholder.webp"}
                        alt={"Product"}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                        className="absolute object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1 self-start text-sm">
                      <span className="line-clamp-1">Item Name</span>
                      <span className="line-clamp-1 text-muted-foreground">
                        12000 x 2 24000
                      </span>
                      <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
                        Category
                      </span>
                    </div>
                    <UpdateCart />
                  </div>
                  <Separator />
                </div>
              </div>
            </ScrollArea>
          </div>
          <div className="grid gap-1.5 pr-6 text-sm">
            <Separator className="mb-2" />
            <div className="flex">
              <span className="flex-1">Subtotal</span>
              <span>24000</span>
            </div>
            <div className="flex">
              <span className="flex-1">Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex">
              <span className="flex-1">Taxes</span>
              <span>Calculated at checkout</span>
            </div>
            <Separator className="mt-2" />
            <div className="flex">
              <span className="flex-1">Total</span>
              <span>35000</span>
            </div>
            <SheetFooter className="mt-1.5">
              <Button
                aria-label="Proceed to checkout"
                size="sm"
                className="w-full"
              >
                Proceed to Checkout
              </Button>
            </SheetFooter>
          </div>
        </>
      </SheetContent>
    </Sheet>
  );
}

//  {
//    itemCount > 0 ? (
//      <>
//        <div className="flex flex-1 flex-col gap-5 overflow-hidden">
//          <ScrollArea className="h-full">
//            <div className="flex flex-col gap-5 pr-6">
//              {cartLineItems.map((item) => (
//                <div key={item.id} className="space-y-3">
//                  <div className="flex items-center space-x-4">
//                    <div className="relative h-16 w-16 overflow-hidden rounded">
//                      {item?.images?.length ? (
//                        <Image
//                          src={item.images[0]?.url ?? '/images/product-placeholder.webp'}
//                          alt={item.images[0]?.name ?? item.name}
//                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                          fill
//                          className="absolute object-cover"
//                          loading="lazy"
//                        />
//                      ) : (
//                        <div className="flex h-full items-center justify-center bg-secondary">
//                          <Icons.placeholder className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
//                        </div>
//                      )}
//                    </div>
//                    <div className="flex flex-1 flex-col gap-1 self-start text-sm">
//                      <span className="line-clamp-1">{item.name}</span>
//                      <span className="line-clamp-1 text-muted-foreground">
//                        {formatPrice(item.price)} x {item.quantity} = {formatPrice((Number(item.price) * Number(item.quantity)).toFixed(2))}
//                      </span>
//                      <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
//                        {`${item.category} ${item.subcategory ? `/ ${item.subcategory}` : ''}`}
//                      </span>
//                    </div>
//                    <UpdateCart cartLineItem={item} />
//                  </div>
//                  <Separator />
//                </div>
//              ))}
//            </div>
//          </ScrollArea>
//        </div>
//        <div className="grid gap-1.5 pr-6 text-sm">
//          <Separator className="mb-2" />
//          <div className="flex">
//            <span className="flex-1">Subtotal</span>
//            <span>{formatPrice(cartTotal.toFixed(2))}</span>
//          </div>
//          <div className="flex">
//            <span className="flex-1">Shipping</span>
//            <span>Free</span>
//          </div>
//          <div className="flex">
//            <span className="flex-1">Taxes</span>
//            <span>Calculated at checkout</span>
//          </div>
//          <Separator className="mt-2" />
//          <div className="flex">
//            <span className="flex-1">Total</span>
//            <span>{formatPrice(cartTotal.toFixed(2))}</span>
//          </div>
//          <SheetFooter className="mt-1.5">
//            <Button aria-label="Proceed to checkout" size="sm" className="w-full">
//              Proceed to Checkout
//            </Button>
//          </SheetFooter>
//        </div>
//      </>
//    ) : (
//      <div className="flex h-full flex-col items-center justify-center space-y-2">
//        <Icons.cart className="h-12 w-12 text-muted-foreground" aria-hidden="true" />
//        <span className="text-lg font-medium text-muted-foreground">Your cart is empty</span>
//      </div>
//    );
//  }
