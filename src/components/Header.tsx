"use client";

import { useSearch } from "@/context/searchContext";
import { useCart } from "@/context/CartContext";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const { setQuery, setResults } = useSearch();
  const { cart } = useCart();
  const [input, setInput] = useState<string>("");
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearch = async () => {
    if (!input.trim()) return;
    setQuery(input);

    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${input}`
      );
      if (!response.ok) {
        throw new Error(
          `HTTP error! Status: ${response.status} | ${response.statusText}`
        );
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
          <button
            onClick={handleSearch}
            className="px-3 py-2 border border-gray-400 border-l-0 rounded-r bg-white"
          >
            🔍
          </button>
        </div>
        <Link
          href="/pages/cart"
          className="ml-4 flex items-center hover:opacity-80 transition-opacity"
        >
          <span className="text-2xl">🛒</span>
          {itemCount > 0 && (
            <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-sm">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
