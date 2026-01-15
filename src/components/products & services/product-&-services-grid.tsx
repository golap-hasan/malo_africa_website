"use client";

import Link from "next/link";
import {
  ProductCard,
  products,
  ServiceCard,
  services,
} from "../home/product-service-sections";
import CustomPagination from "@/tools/CustomPagination";
import { usePathname } from "next/navigation";

const ProductAndServicesGrid = ({ currentPage }: { currentPage: number }) => {
  // const searchParams = useSearchParams();
  // const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = 7;
  const pathname = usePathname();
  const isServicesPage = pathname?.startsWith("/services");
  const totalItems = isServicesPage ? services.length : products.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xs uppercase tracking-widest">
          Showing <span className="text-primary">{totalItems}</span>{" "}
          {isServicesPage ? "Services" : "Products"}
        </h2>
        <p className="text-xs text-muted-foreground font-medium">
          Page {currentPage} of {totalPages}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isServicesPage
          ? services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="block"
              >
                <ServiceCard service={service} />
              </Link>
            ))
          : products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="block"
              >
                <ProductCard product={product} />
              </Link>
            ))}
      </div>

      {/* Pagination using CustomPagination tool */}
      <CustomPagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default ProductAndServicesGrid;
