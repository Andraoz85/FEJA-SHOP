"use client";
import { useSearch } from '@/context/searchContext';
import React, { useState } from 'react';

export default function Header() {
  const { setQuery, setResults } = useSearch();
  const [input, setInput] = useState<string>("");

  const handleSearch = async () => {
    if (!input.trim()) return;
    setQuery(input);

    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${input}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} | ${response.statusText}`);
      }
      const data = await response.json();
      setResults(data.products);
    } catch (err) {
      console.error("Search error:", err);
      setResults([]);
    }
  };

  return (
    <header className="bg-gray-200 p-4 flex items-center">
      <div className="flex-1 flex justify-evenly">
        <div className="flex">
          <input
            type="text"
            placeholder="Search product..."
            className="px-3 py-2 border border-gray-400 rounded-l"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSearch} className="px-3 py-2 border border-gray-400 border-l-0 rounded-r bg-white">
            🔍
          </button>
        </div>
        <div className="ml-4 text-2xl">🛒</div>
      </div>
    </header>
  );
}
