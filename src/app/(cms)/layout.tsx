import CMSHeader from "./_components/cms-header";
import { CMSSidebar } from "./_components/cms-sidebar";
import { dashboardConfig } from "./dashboard/dashboard-config";

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <CMSHeader />
      <div className="container grid flex-1 gap-12 pb-8 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <CMSSidebar items={dashboardConfig.CMSSidebar} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
