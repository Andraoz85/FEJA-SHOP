"use client";

import { useSearch } from "@/context/searchContext";
import { useCart } from "@/context/CartContext";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const { setQuery, setResults } = useSearch();
  const { cart } = useCart();
  const [input, setInput] = useState<string>("");
  const router = useRouter();
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
      router.push("/search");
    } catch (err) {
      console.error("Search error:", err);
      setResults([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setInput("");
    setQuery("");
    setResults([]);
    router.push("/");
  };

  return (
    <header className="w-full bg-white border-b">
      <div className="flex justify-center w-full">
        <div className="max-w-[900px] w-full px-4 py-4 flex items-center justify-between">
          {/* Logotyp till vänster */}
          <Link href="/" className="flex items-center">
            <div className="relative w-[70px] h-[70px]">
              <Image
                src="/logo.png"
                alt="FEJA SHOP"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </Link>

          {/* Sökfält i mitten */}
          <div className="w-[400px] mx-12">
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Search product..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={handleSearch}
                className="px-4 py-2 border border-gray-300 border-l-0 bg-white hover:bg-gray-50"
              >
                🔍
              </button>
              {input && (
                <button
                  onClick={clearSearch}
                  className="px-4 py-2 border border-gray-300 border-l-0 rounded-r bg-white hover:bg-gray-50"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Shoppingbag till höger */}
          <Link href="/pages/cart" className="flex items-center">
            <div className="relative w-[20px] h-[20px]">
              <Image
                src="/bag.png"
                alt="Shopping Bag"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            {itemCount > 0 && (
              <div className="ml-2 bg-purple-500 text-white rounded-full px-2 py-1 text-sm min-w-[24px] text-center">
                {itemCount}
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
