"use client";

import Image from "next/image";
import { fetchProducts } from "@/actions/fetchData";
import { Product } from "@/interfaces/Product";
import { useCart } from "@/context/CartContext";
import { useEffect, useState, use } from "react";
import Link from "next/link";

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
    <main className="p-4">
      <div className="max-w-2xl mx-auto">
        <Image
          src={product.thumbnail}
          width={300}
          height={300}
          alt={product.title}
          className="rounded-lg shadow-md mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-bold text-blue-600">{product.price} kr</p>
        <div className="mt-4">
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}
