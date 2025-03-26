"use client";

import { useState, useEffect } from "react";
import { fetchProducts } from "./fetchProducts";
import ProductList from "@/components/ProductList";
import { PaginationWithLinks } from "@/components/paginationLink";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10); 
  const productsPerPage = 9; 

  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  // Fetch products when currentPage or pageSize changes
  useEffect(() => {
    const loadProducts = async () => {
      const skip = (currentPage - 1) * productsPerPage;
      const data = await fetchProducts(productsPerPage, skip);
      setProducts(data.products);
      setTotalCount(data.total); // Assuming your API returns the total product count
    };

    loadProducts();
  }, [currentPage]);

  return (
    <div className="flex flex-col min-h-screen bg-white p-4">
      <div className="mx-auto w-full md:w-4xl xl:w-6xl md:max-w-4xl xl:max-w-6xl">
        <h1 className="text-2xl font-bold tracking-tight sm:text-4xl mb-4">Products</h1>
        <h2 className="leading-loose mb-8">
          Browse through our selection of products using the pagination controls below.
        </h2>

        <ProductList products={products} />

        <PaginationWithLinks
          page={currentPage}
          pageSize={productsPerPage}
          totalCount={totalCount}
          pageSearchParam="page"

        />
      </div>
    </div>
  );
}
