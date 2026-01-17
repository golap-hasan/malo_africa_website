import LeftFilter from "@/components/products & services/left-filter";
import ProductAndServicesGrid from "@/components/products & services/product-&-services-grid";
import TopFilter from "@/components/products & services/top-filter";
import CustomBreadcrumb from "@/tools/CustomBreadcrumb";
import PageLayout from "@/tools/PageLayout";
import { SearchParams } from "@/types/global.type";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const currentPage = Number((await searchParams).page) || 1;

  return (
    <>
      <CustomBreadcrumb
        links={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Products",
            href: "/products",
            isCurrent: true,
          },
        ]}
      />
      <PageLayout paddingSize="small">
        <TopFilter />
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="hidden md:block w-full md:w-70 lg:w-[320px] shrink-0">
            <LeftFilter />
          </aside>
          <main className="flex-1 min-w-0">
            <ProductAndServicesGrid currentPage={currentPage} />
          </main>
        </div>
      </PageLayout>
    </>
  );
};

export default ProductsPage;
