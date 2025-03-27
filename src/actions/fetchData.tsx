export async function fetchProducts(limit = 12, skip = 0) {
  const baseUrl = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
  try {
    const res = await fetch(baseUrl, { next: { revalidate: 3600 } }); // Cache for 1 hour
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [], total: 0 };
  }
}

// Fetch list of all products
export async function fetchCategories() {
  const baseUrl = `https://dummyjson.com/products/category-list`;
  try {
    const res = await fetch(baseUrl, { next: { revalidate: 3600 } }); // Cache for 1 hour
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

// Fetch products by category
export async function fetchProductsByCategory(category: string) {
  const baseUrl = `https://dummyjson.com/products/category/${category}`;
  try {
    const res = await fetch(baseUrl, { next: { revalidate: 3600 } }); // Cache for 1 hour
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

// Fetch a single product by ID
export async function fetchProductById(id: string) {
  const baseUrl = `https://dummyjson.com/products/${id}`;
  try {
    const res = await fetch(baseUrl, { next: { revalidate: 3600 } }); // Cache for 1 hour
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
