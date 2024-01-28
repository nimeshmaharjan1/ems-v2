import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "@/components/user-avatar";
import { Flower } from "lucide-react";
import Link from "next/link";
import { dashboardConfig } from "../dashboard/dashboard-config";
import CMSLayoutSidebarSm from "./cms-sm-nav";

const CMSHeader = () => {
  // const initials = `${user?.firstName?.charAt(0) ?? ""} ${
  //     user?.lastName?.charAt(0) ?? ""
  //   }`
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        {/* <MainNav items={dashboardConfig.mainNav} /> */}
        <div className="hidden lg:block">
          <p className="flex items-center text-lg font-bold">
            <Flower className="mr-2 size-6"></Flower>
            Eeshan Mahadev Enterprises
          </p>
        </div>
        <div className="block lg:hidden">
          <CMSLayoutSidebarSm
            items={dashboardConfig.CMSSidebar}
          ></CMSLayoutSidebarSm>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {/* <UserAvatar
          user={{ name: user.name || null, image: user.image || null }}
          className="h-8 w-8"
        /> */}
            <UserAvatar
              // user={{ name: user.name || null, image: user.image || null }}
              className="size-8 cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col space-y-1 leading-none">
                {/* {user.name && <p className="font-medium">{user.name}</p>} */}
                {/* {user.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )} */}
                <p className="font-medium">Nimesh Maharjan</p>
                <p className="w-[200px] truncate text-sm text-muted-foreground">
                  maharjannimesh11@gmail.com
                </p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/admin/dashboard">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/billing">Billing</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              // onSelect={(event) => {
              //   event.preventDefault();
              //   signOut({
              //     callbackUrl: `${window.location.origin}/login`,
              //   });
              // }}
            >
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default CMSHeader;
