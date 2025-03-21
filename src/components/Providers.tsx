"use client";

import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/searchContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SearchProvider>
      <CartProvider>{children}</CartProvider>
    </SearchProvider>
  );
}
