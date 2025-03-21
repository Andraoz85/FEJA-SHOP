"use client";

import { CartProvider } from "@/context/CartContext";
import Header from "./Header";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Header />
      <div className="min-h-screen flex flex-col items-center">
        <div className="max-w-4xl w-full px-4">
          <main>{children}</main>
        </div>
      </div>
    </CartProvider>
  );
}
