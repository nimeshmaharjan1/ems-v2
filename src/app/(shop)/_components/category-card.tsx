import Link from "next/link";
import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingBag } from "lucide-react";

// interface CategoryCardProps {
//   category: Category
// }

export function CategoryCard() {
  return (
    <Link href={`/categories`}>
      <span className="sr-only">Kitchen Appliances</span>
      <Card className="hover:bg-muted/50 relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent transition-colors">
        <CardHeader>
          <div className="grid size-11 place-items-center rounded-full border-2">
            <ShoppingBag className="size-5" aria-hidden="true" />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-1.5">
          <CardTitle className="capitalize">Kitchen Appliances</CardTitle>
          <React.Suspense fallback={<Skeleton className="h-4 w-20" />}>
            <CardDescription>21 products</CardDescription>
            {/* <ProductCount productCountPromise={productCountPromise} /> */}
          </React.Suspense>
        </CardContent>
      </Card>
    </Link>
  );
}

// interface ProductCountProps {
//   productCountPromise: ProductCountPromise
// }

// async function ProductCount({ productCountPromise }: ProductCountProps) {
//   const productCount = await productCountPromise

//   return <CardDescription>{productCount} products</CardDescription>
// }
