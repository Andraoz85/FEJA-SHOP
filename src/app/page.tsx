import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<>([]); // insert name of interface
  const [error, setError] = useState<string | null>(null);
  
  useEffect (() => {
    const loadData = async () => {
      try {
        const data = await fetchProducts(); // change name of fetch
        setProducts(data);
      } catch (err) {
        setError("Error: Could not load data. Try again later.");
      }
    };
    loadData();
  }, []);

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className={styles.page}>
      <main className= {styles.main}>
        <h1>Welcome to FEJA-Shop!</h1>
        <p>A web-shop built with Next.js.</p>

        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/${product.id}`}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
