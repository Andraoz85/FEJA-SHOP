"use client";

import { useSearch } from "@/context/searchContext";
import { useCart } from "@/context/CartContext";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
    <NavigationMenu className="w-full max-w-none">
      <NavigationMenuList className="w-full px-4 py-2">
        {/* Logotyp till vänster */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/" className="flex items-center">
              <div className="relative w-[40px] h-[40px]">
                <Image
                  src="/logo.png" // Uppdatera detta till din faktiska logotyps sökväg
                  alt="FEJA SHOP"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Sökfält i mitten */}
        <NavigationMenuItem className="flex-grow bg-red-100 px-8">
          <div className="flex w-full max-w-2xl mx-auto px-6">
            <input
              type="text"
              placeholder="Search product..."
              className="w-full px-3 py-2 border border-gray-400 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSearch}
              className="px-3 py-2 border border-gray-400 border-l-0 bg-white hover:bg-gray-50"
            >
              🔍
            </button>
            {input && (
              <button
                onClick={clearSearch}
                className="px-3 py-2 border border-gray-400 border-l-0 rounded-r bg-white hover:bg-gray-50"
              >
                ✕
              </button>
            )}
          </div>
        </NavigationMenuItem>

        {/* Shoppingbag till höger */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <div className="flex items-center">
              <Link href="/pages/cart" className="flex items-center">
                <span className="relative w-[40px] h-[40px]">
                  <Image
                    src="/bag.png" // Uppdatera detta till din faktiska logotyps sökväg
                    alt="FEJA SHOP"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </span>
                {itemCount > 0 && (
                  <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-sm">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>

            {/* <Link
              href="/pages/cart"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <span className="text-2xl">🛒</span>
              {itemCount > 0 && (
                <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-sm">
                  {itemCount}
                </span>
              )}
            </Link> */}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
