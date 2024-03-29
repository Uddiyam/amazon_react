import styles from "../styles/Pantry.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "../components/data";
import Card from "./Card";
import { useState } from "react";

export default function Pantry() {
  let [products, 수정] = useState(data);
  return (
    <div className={styles.allpro}>
      <Header />
      <div className={styles.list}>
        {products.map(function (s, i) {
          return i > 23 && i < 28 && <Card products={s} />;
        })}
      </div>
      <div className={styles.list}>
        {products.map(function (s, i) {
          return i > 27 && i < 32 && <Card products={s} />;
        })}
      </div>

      <Footer />
    </div>
  );
}
