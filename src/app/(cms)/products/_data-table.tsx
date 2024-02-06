"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import * as React from "react";

import { DataTable } from "@/components/data-table/data-table";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate, formatPrice } from "@/lib/utils";
import { type Prisma } from "@prisma/client";

type AwaitedProduct = Pick<
  Prisma.ProductGetPayload<{
    include: {
      category: true;
    };
  }>,
  "id" | "title" | "status" | "price" | "quantity" | "createdAt" | "category"
>;

interface ProductsTableShellProps {
  data: AwaitedProduct[];
  pageCount: number;
}

export function ProductsTableShell({
  data,
  pageCount,
}: ProductsTableShellProps) {
  const [isPending, startTransition] = React.useTransition();
  const [selectedRowIds, setSelectedRowIds] = React.useState<number[]>([]);

  // Memoize the columns so they don't re-render on every render
  const columns = React.useMemo<ColumnDef<AwaitedProduct, unknown>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) => {
              table.toggleAllPageRowsSelected(!!value);
              setSelectedRowIds((prev) =>
                prev.length === data.length
                  ? []
                  : data.map((row) => Number(row)),
              );
            }}
            aria-label="Select all"
            className="translate-y-[2px]"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => {
              row.toggleSelected(!!value);
              setSelectedRowIds((prev) =>
                value
                  ? [...prev, Number(setSelectedRowIds)]
                  : prev.filter((id) => id !== Number(setSelectedRowIds)),
              );
            }}
            aria-label="Select row"
            className="translate-y-[2px]"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "title",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Title" />
        ),
      },
      //   {
      //     accessorKey: "category",
      //     header: ({ column }) => (
      //       <DataTableColumnHeader column={column} title="Category" />
      //     ),
      //     cell: ({ cell }) => {
      //       const categories = Object.values(products.category.enumValues);
      //       const category = cell.getValue() as Product["category"];

      //       if (!categories.includes(category)) return null;

      //       return (
      //         <Badge variant="outline" className="capitalize">
      //           {category}
      //         </Badge>
      //       );
      //     },
      //   },
      {
        accessorKey: "price",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Price" />
        ),
        cell: ({ cell }) => formatPrice(cell.getValue() as number),
      },
      {
        accessorKey: "quantity",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Quantity" />
        ),
      },
      // {
      //   accessorKey: "rating",
      //   header: ({ column }) => (
      //     <DataTableColumnHeader column={column} title="Rating" />
      //   ),
      // },
      {
        accessorKey: "createdAt",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Created At" />
        ),
        cell: ({ cell }) => formatDate(cell.getValue() as Date),
        enableColumnFilter: false,
      },
      {
        id: "actions",
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label="Open menu"
                variant="ghost"
                className="flex size-8 p-0 data-[state=open]:bg-muted"
              >
                <DotsHorizontalIcon className="size-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
              <DropdownMenuItem asChild>
                <Link href={`/products/${row.original.id}`}>Edit</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/product/${row.original.id}`}>View</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                // onClick={() => {
                //   startTransition(() => {
                //     row.toggleSelected(false);

                //     toast.promise(
                //       deleteProduct({
                //         id: row.original.id,
                //         storeId,
                //       }),
                //       {
                //         loading: "Deleting...",
                //         success: () => "Product deleted successfully.",
                //         error: (err: unknown) => catchError(err),
                //       },
                //     );
                //   });
                // }}
                disabled={isPending}
              >
                Delete
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ],
    [data, isPending],
  );

  //   function deleteSelectedRows() {
  //     toast.promise(
  //       Promise.all(
  //         selectedRowIds.map((id) =>
  //           deleteProduct({
  //             id,
  //             storeId,
  //           }),
  //         ),
  //       ),
  //       {
  //         loading: "Deleting...",
  //         success: () => {
  //           setSelectedRowIds([]);
  //           return "Products deleted successfully.";
  //         },
  //         error: (err: unknown) => {
  //           setSelectedRowIds([]);
  //           return catchError(err);
  //         },
  //       },
  //     );
  //   }

  return (
    <DataTable
      columns={columns}
      data={data}
      pageCount={pageCount}
      //   filterableColumns={[
      //     {
      //       id: "category",
      //       title: "Category",
      //       options: products.category.enumValues.map((category) => ({
      //         label: `${category.charAt(0).toUpperCase()}${category.slice(1)}`,
      //         value: category,
      //       })),
      //     },
      //   ]}
      searchableColumns={[
        {
          id: "title",
          title: "Title",
        },
      ]}
      // newRowLink={`/products/create`}
      //   deleteRowsAction={() => void deleteSelectedRows()}
    />
  );
}
