"use client";

import { fetchProducts } from "@/actions/fetchData";
import ProductList from "@/components/ProductList";
import SearchResults from "@/components/SearchResults";
import { useSearch } from "@/context/searchContext";
import { useEffect, useState } from "react";
import { Product } from "@/interfaces/Product";

export default function Home() {
  const { results } = useSearch();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.products);
    };
    loadProducts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      {results.length > 0 ? (
        <SearchResults />
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}
