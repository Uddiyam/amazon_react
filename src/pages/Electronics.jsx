import styles from "../styles/Electronics.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "../components/data";
import Card from "./Card";
import { useState } from "react";

export default function Electronics() {
  let [products, 수정] = useState(data);
  return (
    <div className={styles.allpro}>
      <Header />
      <div className={styles.list}>
        {products.map(function (s, i) {
          return i > 31 && i < 36 && <Card products={s} />;
        })}
      </div>
      <div className={styles.list}>
        {products.map(function (s, i) {
          return i > 35 && i < 40 && <Card products={s} />;
        })}
      </div>

      <Footer />
    </div>
  );
}
