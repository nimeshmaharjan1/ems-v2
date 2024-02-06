"use client";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import { Button } from "@/components/ui/button";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { type SearchParams } from "@/lib/types";
import { storesProductsSearchParamsSchema } from "@/lib/validitions/params";
import { api } from "@/trpc/react";
import { type Product } from "@prisma/client";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { DashboardShell } from "../_components/dashboard-shell";
import { ProductsTableShell } from "./_data-table";
type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
];
interface ProductsPageProps {
  searchParams: SearchParams;
}

const CMSProductsPage: React.FC<ProductsPageProps> = ({ searchParams }) => {
  const { page, per_page, sort, title } =
    storesProductsSearchParamsSchema.parse(searchParams);

  // Fallback page for invalid page numbers
  // const fallbackPage = isNaN(page) || page < 1 ? 1 : page;
  // // Number of items per page
  // const limit = isNaN(per_page) ? 10 : per_page;
  // Number of items to skip
  // const offset = fallbackPage > 0 ? (fallbackPage - 1) * limit : 0;
  // Column and order to sort by
  const [column, order] = (sort?.split(".") as [
    keyof Product | undefined,
    "asc" | "desc" | undefined,
  ]) ?? ["createdAt", "desc"];

  const productsPromise = api.product.productFindAllRoute.useQuery(
    {
      per_page,
      page,
      title,
      column,
      order,
    },
    {
      keepPreviousData: true,
    },
  );

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <PageHeader>
          <PageHeaderHeading>Products</PageHeaderHeading>
          <PageHeaderDescription>
            Create and manage products
          </PageHeaderDescription>
        </PageHeader>
        <Link passHref href="/products/create">
          <Button>
            <Plus className="mr-2 size-4"></Plus> New Product
          </Button>
        </Link>
      </div>
      <Suspense
        fallback={
          <DataTableSkeleton
            columnCount={6}
            isNewRowCreatable={true}
            isRowsDeletable={true}
          />
        }
      >
        {productsPromise.isLoading || !productsPromise.data ? (
          <DataTableSkeleton
            columnCount={6}
            isNewRowCreatable={true}
            isRowsDeletable={true}
          />
        ) : (
          <ProductsTableShell
            data={productsPromise.data?.data.products}
            pageCount={productsPromise.data?.pagination.totalPages}
          />
        )}
      </Suspense>
    </DashboardShell>
  );
};

export default CMSProductsPage;
