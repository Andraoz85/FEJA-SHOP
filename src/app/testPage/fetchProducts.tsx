export async function fetchProducts(limit = 10, skip = 0) {
    const baseUrl = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    try {
      const res = await fetch(baseUrl, { next: { revalidate: 3600 } });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return { products: [] }; // Ensure it always returns an object with "products"
    }
  }
  