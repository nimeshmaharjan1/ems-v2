import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { DashboardShell } from "../../_components/dashboard-shell";
import CreateProductForm from "./create-product-form";

const ProductCreatePage = () => {
  return (
    <DashboardShell>
      <PageHeader>
        <PageHeaderHeading>Add product</PageHeaderHeading>
        <PageHeaderDescription>
          Add a new product to your store
        </PageHeaderDescription>
      </PageHeader>
      <CreateProductForm></CreateProductForm>
    </DashboardShell>
  );
};

export default ProductCreatePage;
