"use client";
import { useEffect } from "react";
import { useSearch } from "@/context/searchContext";
import ProductCard from "./ProductCard";

export default function SearchResults() {
    const { results } = useSearch();

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {results.length > 0 ? (
                results.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <p className="text-gray-500">No results found</p>
            )}
        </div>
    )
}
