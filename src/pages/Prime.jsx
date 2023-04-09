import styles from "../styles/Prime.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "../components/data";
import Card from "./Card";
import { useState } from "react";

export default function AllProduct() {
  let [products, 수정] = useState(data);
  return (
    <div className={styles.allpro}>
      <Header />
      <div className={styles.list}>
        {products.map(function (s, i) {
          return i > 7 && i < 12 && <Card products={s} />;
        })}
      </div>
      <div className={styles.list}>
        {products.map(function (s, i) {
          return i > 11 && i < 16 && <Card products={s} />;
        })}
      </div>

      <Footer />
    </div>
  );
}
