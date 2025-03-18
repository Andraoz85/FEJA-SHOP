export async function fetchProducts() {
    const baseUrl = "https://dummyjson.com/products?limit=200";
  try {
    const res = await fetch(baseUrl);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
