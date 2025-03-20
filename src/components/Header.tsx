"use client";
import { useSearch } from '@/context/searchContext';
import React, { useState } from 'react';

export default function Header() {
  const { setQuery } = useSearch();
  const [input, setInput] = useState<string>("");

  const handleSearch = () => {
    if (!input.trim()) return;
    setQuery(input);
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
