import { fetchProducts } from "@/actions/fetchData";
import ProductList from "@/components/ProductList";

export default async function Home() {
  const data = await fetchProducts();
  const products = data.products;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductList products={products} />
    </div>
  );
}

