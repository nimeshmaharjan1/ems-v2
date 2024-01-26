import { Button } from "@/components/ui/button";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { Plus } from "lucide-react";
import Link from "next/link";
import { DashboardShell } from "../_components/dashboard-shell";

const CMSProductsPage = () => {
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
    </DashboardShell>
  );
};

export default CMSProductsPage;
