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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      if (selectedCategory) {
        const data = await fetchProductsByCategory(selectedCategory);
        setProducts(data.products);
      } else {
        const data = await fetchProducts();
        setProducts(data.products);
      }
    };
    loadProducts();
  }, [selectedCategory]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Filter onCategoryChange={setSelectedCategory} />
      {results.length > 0 ? (
        <SearchResults />
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}
