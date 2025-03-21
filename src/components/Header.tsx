"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function Header() {
  const { cart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-gray-200 p-4 flex items-center">
      <div className="flex-1 flex justify-evenly">
        <div className="flex">
          <input
            type="text"
            placeholder="Search Product"
            className="px-3 py-2 border border-gray-400 rounded-l"
          />
          <button className="px-3 py-2 border border-gray-400 border-l-0 rounded-r bg-white">
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
