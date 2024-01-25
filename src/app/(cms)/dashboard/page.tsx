import { Button } from "@/components/ui/button";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { Plus } from "lucide-react";
import { DashboardShell } from "../_components/dashboard-shell";

const DashboardPage = () => {
  return (
    <DashboardShell>
      <section className="flex items-center justify-between">
        <PageHeader>
          <PageHeaderHeading>Products</PageHeaderHeading>
          <PageHeaderDescription>
            Create and manage products.
          </PageHeaderDescription>
        </PageHeader>
        <Button>
          <Plus className="mr-2 h-4 w-4"></Plus> New Product
        </Button>
      </section>
    </DashboardShell>
  );
};

export default DashboardPage;
