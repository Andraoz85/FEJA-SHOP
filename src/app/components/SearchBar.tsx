"use client"
import { SearchResultData } from "@/interfaces/searchResultData";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResultData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setError(null);

    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} | ${response.statusText}`);
      }
      const data = await response.json();
      setResults(data.products);
    } catch (err) {
      setError("Error: Could not load data. Try again later.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search product..."
        className="border p-2 w-full rounded"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded mt-2 w-full"
      >
        Search
      </button>

      {error && <p className="text-red-500">{error}</p>}

      <ul className="mt-4">
        {results.map((product) => (
          <li key={product.id} className="border-b p-2">
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
