import React from "react";
import { Product } from "@/interfaces/Product";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
      <Link href={`/${product.id}`} className="block">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={200}
          unoptimized
          className="w-full h-auto mb-2"
        />
      </Link>
      <p className="text-lg font-black">{product.title}</p>
      <p className="text-gray-600">{product.description}</p>
      <div className="flex items-center justify-between mt-2">
        <p className="text-gray-800 font-bold mt-2">Pris: {product.price} kr</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
          Add to cart
        </button>
      </div>
    </div>
  );
}
