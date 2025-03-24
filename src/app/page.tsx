"use client";

import { fetchProducts, fetchProductsByCategory } from "@/actions/fetchData";
import ProductList from "@/components/ProductList";
import SearchResults from "@/components/SearchResults";
import { useSearch } from "@/context/searchContext";
import { useEffect, useState } from "react";
import { Product } from "@/interfaces/Product";
import Filter from "@/components/Filter";

export default function Home() {
  const { results } = useSearch();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      // const data = await fetchProducts();
      const data = await fetchProductsByCategory("tablets"); //TODO: connect with Filter component
      setProducts(data.products);
    };
    loadProducts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Filter />
      {results.length > 0 ? (
        <SearchResults />
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}
