"use client"
import { DynamicProductData } from '@/interfaces/dynamicProductData';
import React, { useState } from 'react'

export default function Header() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<DynamicProductData[]>([]);
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
    <header className="bg-gray-200 p-4 flex items-center">
      <div className="flex-1 flex justify-evenly">
        <div className="flex">
          <input
            type="text"
            placeholder="Search Product"
            className="px-3 py-2 border border-gray-400 rounded-l"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch} className="px-3 py-2 border border-gray-400 border-l-0 rounded-r bg-white">
            🔍
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
        <div className="ml-4 text-2xl">🛒</div>
      </div>
    </header>
  );
}
