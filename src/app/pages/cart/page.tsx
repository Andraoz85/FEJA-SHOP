"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

import stylesBtn from "@/components/ui/button.module.css";

import { Trash2 } from "lucide-react";

export default function Cart() {
  const { cart, subtotal, shipping, total, updateQuantity, removeFromCart } =
    useCart();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Back to Products
        </Link>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 mb-6 shadow"
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{item.title}</h2>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className=" text-red-500 hover:text-gray-500 cursor-pointer"
                    >
                      <Trash2 />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-12">{item.price} kr</p>
                  <div className="flex justify-between items-baseline">
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        className={stylesBtn.globalButton}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </Button>

                      <span className="text-center font-bold border-2 px-6 py-1">
                        {item.quantity}
                      </span>

                      <Button
                        className={stylesBtn.globalButton}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                    <p className="mt-2 font-semibold">
                      Total: {(item.price * item.quantity).toFixed(2)} kr
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex flex-col justify-self-end gap-3 mt-3">
            <div className="flex gap-6">
              <span>Subtotal:</span>
              <span>{subtotal.toFixed(2)} kr</span>
            </div>
            <div className="flex  gap-6">
              <span>Shipping:</span>
              <span>{shipping.toFixed(2)} kr</span>
            </div>
            <div className="flex  text-xl font-bold gap-6">
              <span>Total:</span>
              <span>{total.toFixed(2)} kr</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
