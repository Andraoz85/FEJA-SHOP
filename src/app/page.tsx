"use client";

import { fetchProducts, fetchProductsByCategory } from "@/actions/fetchData";
import ProductList from "@/components/ProductList";
import SearchResults from "@/components/SearchResults";
import { useSearch } from "@/context/searchContext";
import { useEffect, useState } from "react";
import { Product } from "@/interfaces/Product";
import Filter from "@/components/Filter";
import { usePathname, useSearchParams } from "next/navigation";
import { PaginationWithLinks } from "@/components/paginationLink";

export default function Home() {
  const { results } = useSearch();
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const productsPerPage = 12;

  useEffect(() => {
    const loadProducts = async () => {
      if (selectedCategory) {
        const data = await fetchProductsByCategory(selectedCategory);
        setProducts(data.products);
        setTotalCount(data.products.length);
      } else {
        const skip = (currentPage - 1) * productsPerPage;
        const data = await fetchProducts(productsPerPage, skip);
        setProducts(data.products);
        setTotalCount(data.total);
      }
    };
    loadProducts();
  }, [selectedCategory, currentPage]);

  return (
    <div className="my-12">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Filter onCategoryChange={setSelectedCategory} />
      {pathname === "/" && results.length > 0 ? (
        <SearchResults />
      ) : (
        <>
          <ProductList products={products} />
          {!selectedCategory && (
            <PaginationWithLinks
              page={currentPage}
              pageSize={productsPerPage}
              totalCount={totalCount}
              pageSearchParam="page"
            />
          )}
        </>
      )}
    </div>
  );
}
