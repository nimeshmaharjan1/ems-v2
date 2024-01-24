import { Button } from "@/components/ui/button";
import { Shell } from "@/components/ui/shell";
import { CategoryCard } from "./_components/category-card";
import { ProductCard } from "./_components/product-card";

const ShopHomePage = () => {
  return (
    <Shell>
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 py-14 text-center md:py-12 xl:py-28">
        <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          Eeshan Mahadev Pvt Ltd. Elevate Your Lifestyle with Top-Notch
          Appliances
        </h1>
        <p className="max-w-[42rem] text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8">
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
      <section className="space-y-6 pt-8 md:pt-10 lg:pt-12">
        <div className="flex items-center justify-between gap-4">
          <div className="max-w-[58rem] flex-1 space-y-1">
            <h2 className="font-heading text-3xl font-bold leading-[1.1] md:text-4xl">
              Featured products
            </h2>
            <p className="max-w-[46rem] text-balance leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Explore products from around the world
            </p>
          </div>
          <Button>View all products</Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* {allProducts.map((product) => ( */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

          {/* ))} */}
        </div>
      </section>
    </Shell>
  );
};

export default ShopHomePage;
