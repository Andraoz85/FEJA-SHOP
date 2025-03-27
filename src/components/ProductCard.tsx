"use client";

import React from "react";
import { Product } from "@/interfaces/Product";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import styles from "./ui/card.module.css";
import { Button } from "./ui/button";
import buttonStyles from "./ui/button.module.css";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="border p-4 shadow hover:shadow-lg transition-shadow">
      <Card className={styles.productCard}>
        <Link href={`/${product.id}`} className="block">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={300}
            height={200}
            unoptimized
            className="w-full h-auto mb-2"
          />
          <CardHeader>
            <CardTitle><h2>{product.title}</h2></CardTitle>
          </CardHeader>
          <CardFooter>
            <p>{product.price} kr</p>
            <Button onClick={handleAddToCart} className={buttonStyles.globalButton}>Add to cart</Button>
          </CardFooter>
        </Link>
      </Card>

      {/* <div className="block">
        <Link href={`/${product.id}`} className="block">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={300}
            height={200}
            unoptimized
            className="w-full h-auto mb-2"
          />
          <h2 className="text-lg font-black">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex items-center justify-between mt-2">
            <p className="text-gray-800 font-bold mt-2">
              Pris: {product.price} kr
            </p>
          </div>
        </Link>
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition-colors"
        >
          Add to cart
        </button>
      </div> */}
    </div>
  );
}
