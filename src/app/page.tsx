import Image from "next/image";
import styles from "./page.module.css";
import { CartProvider } from "../context/CartContext";
import type { AppProps } from "next/app";

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.page}>
      <h1>Welcome to FEJA-Shop!</h1>
      <p>A web-shop built with Next.js.</p>
    </div>
  );
}
