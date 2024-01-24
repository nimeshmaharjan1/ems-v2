"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Shell } from "@/components/ui/shell";
import React, { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { ChevronDown } from "lucide-react";
import { Header } from "../_components/page-header";
import { ProductCard } from "../_components/product-card";
import ProductsSkeleton from "../_components/products-skeleton";

const ProductsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, startTransition] = React.useTransition();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {isLoading ? (
        <ProductsSkeleton />
      ) : (
        <Shell>
          <Header
            title="Products"
            description="Buy products from our stores"
            size="sm"
          />
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    aria-label="Filter products"
                    variant={"secondary"}
                    size="sm"
                    disabled={isPending}
                  >
                    Filter
                  </Button>
                </SheetTrigger>
                <SheetContent className="flex flex-col">
                  <SheetHeader className="px-1">
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <Separator />
                  <div className="flex flex-1 flex-col gap-5 overflow-hidden px-1">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium tracking-wide text-foreground">
                        Price range ($)
                      </h3>
                      <Slider
                        variant="range"
                        thickness="thin"
                        defaultValue={[0, 500]}
                        max={500}
                        step={1}
                        //   value={priceRange}
                        //   onValueChange={(value: typeof priceRange) => {
                        //     setPriceRange(value);
                        //   }}
                      />
                      <div className="flex items-center space-x-4">
                        <Input
                          type="number"
                          inputMode="numeric"
                          min={0}
                          // max={priceRange[1]}
                          className="h-9"
                          // value={priceRange[0]}
                          // onChange={(e) => {
                          //   const value = Number(e.target.value);
                          //   setPriceRange([value, priceRange[1]]);
                          // }}
                        />
                        <span className="text-muted-foreground">-</span>
                        <Input
                          type="number"
                          inputMode="numeric"
                          // min={priceRange[0]}
                          max={500}
                          className="h-9"
                          // value={priceRange[1]}
                          // onChange={(e) => {
                          //   const value = Number(e.target.value);
                          //   setPriceRange([priceRange[0], value]);
                          // }}
                        />
                      </div>
                    </div>
                    {/* {categories?.length ? (
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium tracking-wide text-foreground">Categories</h3>
                      <MultiSelect
                        placeholder="Select categories"
                        selected={selectedCategories}
                        setSelected={setSelectedCategories}
                        options={categories.map((c) => ({
                          label: toTitleCase(c),
                          value: c,
                        }))}
                      />
                    </div>
                  ) : null} */}
                    {/* {category ? (
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium tracking-wide text-foreground">Subcategories</h3>
                      <MultiSelect
                        placeholder="Select subcategories"
                        selected={selectedSubcategories}
                        setSelected={setSelectedSubcategories}
                        options={subcategories}
                      />
                    </div>
                  ) : null} */}
                    {/* {stores?.length ? (
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <h3 className="flex-1 text-sm font-medium tracking-wide text-foreground">Stores</h3>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            // onClick={() => {
                            //   startTransition(() => {
                            //     router.push(
                            //       `${pathname}?${createQueryString({
                            //         store_page: Number(store_page) - 1,
                            //       })}`
                            //     );
                            //   });
                            // }}
                            // disabled={Number(store_page) === 1 || isPending}
                            >
                            <Icons.chevronLeft className="h-4 w-4" aria-hidden="true" />
                            <span className="sr-only">Previous store page</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            // onClick={() => {
                            //   startTransition(() => {
                            //     router.push(
                            //       `${pathname}?${createQueryString({
                            //         store_page: Number(store_page) + 1,
                            //       })}`
                            //     );
                            //   });
                            // }}
                            // disabled={Number(store_page) === storePageCount || isPending}
                            >
                            <Icons.chevronRight className="h-4 w-4" aria-hidden="true" />
                            <span className="sr-only">Next store page</span>
                          </Button>
                        </div>
                      </div>
                      <ScrollArea className="h-96">
                        <div className="space-y-4">
                          {stores.map((store) => (
                            <div key={store.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={`store-${store.id}`}
                                checked={storeIds?.includes(store.id) ?? false}
                                onCheckedChange={(value) => {
                                  if (value) {
                                    setStoreIds([...(storeIds ?? []), store.id]);
                                  } else {
                                    setStoreIds(storeIds?.filter((id) => id !== store.id) ?? null);
                                  }
                                }}
                              />
                              <Label
                                htmlFor={`store-${store.id}`}
                                className="line-clamp-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                {store.name}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  ) : null} */}
                  </div>
                  <div>
                    <Separator className="my-4" />
                    <SheetFooter>
                      <Button
                        aria-label="Clear filters"
                        size="sm"
                        className="w-full"
                        //   onClick={() => {
                        //     startTransition(() => {
                        //       router.push(
                        //         `${pathname}?${createQueryString({
                        //           price_range: 0 - 100,
                        //           store_ids: null,
                        //           categories: null,
                        //           subcategories: null,
                        //         })}`
                        //       );

                        //       setPriceRange([0, 100]);
                        //       setSelectedCategories(null);
                        //       setSelectedSubcategories(null);
                        //       setStoreIds(null);
                        //     });
                        //   }}
                        disabled={isPending}
                      >
                        Clear Filters
                      </Button>
                    </SheetFooter>
                  </div>
                </SheetContent>
              </Sheet>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    aria-label="Sort products"
                    size="sm"
                    variant={"secondary"}
                    disabled={isPending}
                  >
                    Sort
                    <ChevronDown className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                  //   key={option.label}
                  //   className={cn(option.value === sort && 'font-bold')}
                  //   onClick={() => {
                  //     startTransition(() => {
                  //       router.push(
                  //         `${pathname}?${createQueryString({
                  //           sort: option.value,
                  //         })}`
                  //       );
                  //     });
                  //   }}
                  >
                    Option
                  </DropdownMenuItem>
                  {/* {sortOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.label}
                    className={cn(option.value === sort && 'font-bold')}
                    onClick={() => {
                      startTransition(() => {
                        router.push(
                          `${pathname}?${createQueryString({
                            sort: option.value,
                          })}`
                        );
                      });
                    }}>
                    {option.label}
                  </DropdownMenuItem>
                ))} */}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <ProductCard key={i}></ProductCard>
              ))}
            </div>
          </div>
        </Shell>
      )}
    </>
  );
};

export default ProductsPage;
