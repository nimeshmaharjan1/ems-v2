import { Button } from "@/components/ui/button";
import { Shell } from "@/components/ui/shell";
import { CategoryCard } from "./_components/category-card";

const ShopHomePage = () => {
  return (
    <Shell className="flex flex-col items-center justify-center text-center">
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 space-y-3 pt-8 md:space-y-4 md:pt-12 lg:pt-20">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          An e-commerce website built with everything new in Next.js
        </h1>
        <p className="text-muted-foreground text-xl">
          Buy and sell kitchen and home appliances from independent brands and
          stores from around the country with ease
        </p>
        <div className="flex items-center gap-x-3">
          <Button>Buy Now</Button>
          <Button variant={"outline"}>Issue Assistance</Button>
        </div>
      </section>
      <section className="xs:grid-cols-2 mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </section>
    </Shell>
  );
};

export default ShopHomePage;
