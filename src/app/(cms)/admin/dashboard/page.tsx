import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { DashboardShell } from "../../_components/dashboard-shell";

const DashboardPage = () => {
  return (
    <DashboardShell>
      <section className="flex items-center justify-between">
        <PageHeader>
          <PageHeaderHeading>Dashboard</PageHeaderHeading>
          <PageHeaderDescription>
            Monitor orders and sales.
          </PageHeaderDescription>
        </PageHeader>
      </section>
    </DashboardShell>
  );
};

export default DashboardPage;
