"use client";
import { useEffect } from "react";
import { useSearch } from "@/context/searchContext";
import ProductCard from "./ProductCard";

export default function SearchResults() {
    const { query, results, setResults } = useSearch();

    useEffect(() => {
        if (!query.trim()) return;
        
        const fetchSearchData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status} | ${response.statusText}`);
                }
                const data = await response.json();
                setResults(data.products);
            } catch (err) {
                console.error("Search error:", err);
            }
        };

        fetchSearchData();
    }, [query]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {results.length > 0 ? (
                results.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <p className="text-gray-500">No result found</p>
            )}
        </div>
    )
}
