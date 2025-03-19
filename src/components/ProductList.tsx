import { Product } from "@/interfaces/Product";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
}
export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
