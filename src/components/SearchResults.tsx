"use client";
import { useEffect } from "react";
import { useSearch } from "@/context/searchContext";

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
        <div>
            <ul className="mt-4">
            {results.length > 0 ? (
                results.map((product) => (
                    <li key={product.id} className="border-b p-2">
                        {product.title}
                    </li>
                ))
            ) : (
                <p className="text-gray-500">No result found</p>
            )}
          </ul>
        </div>
    )
}
