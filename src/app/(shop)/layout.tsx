import Logo from "@/components/logo";
import { ModeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type ReactNode } from "react";
import CartSheet from "./_components/cart";
import { Combobox } from "./_components/combobox";
import { ShopLayoutFooter } from "./_components/footer";

const ShopLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <header className="border-b">
        <section className="container flex items-center py-2">
          <section className="mr-4 hidden md:flex">
            <Logo></Logo>
          </section>
          <section className="flex flex-1 items-center justify-end gap-x-2">
            <ModeToggle></ModeToggle>
            <Combobox></Combobox>
            <CartSheet></CartSheet>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </section>
        </section>
      </header>
      {children}
      <ShopLayoutFooter></ShopLayoutFooter>
    </>
  );
};

export default ShopLayout;
