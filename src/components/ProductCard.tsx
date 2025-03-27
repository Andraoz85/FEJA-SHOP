"use client";

import React from "react";
import { Product } from "@/interfaces/Product";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
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
    <div className="border shadow hover:shadow-lg transition-shadow h-full">
      <Link href={`/${product.id}`} className="block h-full">
        <Card className={styles.productCard}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={300}
            height={200}
            unoptimized
          />
          <div className={styles.productCardWrapper}>
            <CardHeader>
              <CardTitle><h2>{product.title}</h2></CardTitle>
            </CardHeader>
            <CardFooter className={styles.productCardFooter}>
              <p>{product.price} kr</p>
              <Button onClick={handleAddToCart} className={buttonStyles.globalButton}>Add to cart</Button>
            </CardFooter>
          </div>
        </Card>
      </Link>
    </div>
  );
}
