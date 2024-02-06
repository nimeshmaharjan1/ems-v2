import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { DashboardShell } from "../_components/dashboard-shell";

const DashboardPage = () => {
  return (
    <DashboardShell>
      <PageHeader>
        <PageHeaderHeading>Dashboard</PageHeaderHeading>
        <PageHeaderDescription>Monitor orders and sales.</PageHeaderDescription>
      </PageHeader>
    </DashboardShell>
  );
};

export default DashboardPage;
