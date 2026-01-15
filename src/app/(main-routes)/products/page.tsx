import LeftFilter from "@/components/products/left-filter";
import ProductAndServicesGrid from "@/components/products/product-&-services-grid";
import TopFilter from "@/components/products/top-filter";
import PageLayout from "@/tools/PageLayout";

const ProductsPage = () => {
  return (
    <PageLayout paddingSize="small">
      <div className="pt-6">
        <TopFilter />
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="hidden md:block w-full md:w-70 lg:w-[320px] shrink-0">
            <LeftFilter />
          </aside>
          <main className="flex-1 min-w-0">
            <ProductAndServicesGrid />
          </main>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductsPage;
