import { fetchProducts } from "@/actions/fetchData";

export default async function TestApiPage() {
  const products = await fetchProducts();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Test av API</h1>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(products, null, 2)}
      </pre>
    </div>
  );
}
