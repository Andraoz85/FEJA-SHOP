"use client";

import Image from "next/image";
import { fetchProductById } from "@/actions/fetchData";
import { Product } from "@/interfaces/Product";
import { useCart } from "@/context/CartContext";
import { useEffect, useState, use } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import styles from "../../components/ui/card.module.css";
import { Button } from "@/components/ui/button";
import buttonStyles from "../../components/ui/button.module.css";

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
      const data = await fetchProductById(id);
      setProduct(data);
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
          <CardTitle>
            <h1>{product.title}</h1>
          </CardTitle>
        </CardHeader>
        <CardContent className={styles.productPageContent}>
          <p>{product.description}</p>
        </CardContent>
        <CardFooter className={styles.productPageFooter}>
          <p>{product.price} kr</p>
          <Button
            onClick={handleAddToCart}
            className={buttonStyles.globalButton}
          >
            Add to cart
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
