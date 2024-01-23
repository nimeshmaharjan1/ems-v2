import Logo from "@/components/logo";
import { ModeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { type ReactNode } from "react";

const ShopLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <header className="border-b">
        <section className="container flex max-w-screen-2xl items-center py-2">
          <section className="mr-4 hidden md:flex">
            <Logo></Logo>
          </section>
          <section className="flex flex-1 items-center  justify-end gap-x-1">
            <ModeToggle></ModeToggle>
            <Button variant={"ghost"} size={"icon"}>
              <ShoppingCart className="h-5 w-5"></ShoppingCart>
            </Button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </section>
        </section>
      </header>
      {children}
    </>
  );
};

export default ShopLayout;
