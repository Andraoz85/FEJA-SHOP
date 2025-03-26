"use client";

import Image from "next/image";
import { fetchProducts } from "@/actions/fetchData";
import { Product } from "@/interfaces/Product";
import { useCart } from "@/context/CartContext";
import { useEffect, useState, use } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import styles from "../../components/ui/card.module.css";

export default function DynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      const data = await fetchProducts();
      const foundProduct = data.products.find(
        (p: Product) => p.id === Number(id)
      );
      setProduct(foundProduct || null);
    };
    loadProduct();
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card className={styles.productPage}>
      <Image
        src={product.thumbnail}
        width={300}
        height={300}
        alt={product.title}
        className="rounded-lg shadow-md mb-4"
      />
      <div className={styles.productPageWrapper}>
        <CardHeader>
          <CardTitle>{product.title}</CardTitle>
        </CardHeader>
        <CardContent className={styles.productPageContent}>
          <p>{product.description}</p>
        </CardContent>
        <CardFooter className={styles.productPageFooter}>
          <p>{product.price} kr</p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Add to cart
          </button>
        </CardFooter>
      </div>
    </Card>
  );
}
