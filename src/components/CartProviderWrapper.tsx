"use client";

import { CartProvider } from "@/context/CartContext";
import { ReactNode } from "react";

export default function CartProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <CartProvider>{children}</CartProvider>;
}
