import React from "react";
import { useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";
import styles from "./styles/SingleProduct.module.css";
import MainCarousels from "./MainCarousels";
import style from './styles/skeleton.module.css'
function Home() {
  const { items, status } = useSelector((state) => state.products);

  const renderedItems = items.map((item) => <SingleProduct data={item} />);
  return (
    <>
      <MainCarousels />
      {status === "loading" && (
        <div class={`${style.card} ${style.is_loading}`}>
          <div class={style.image}></div>
          <div class={style.content}>
            <h2></h2>
            <p></p>
          </div>
        </div>
      )}
      {items && <div className={styles.continer}>{renderedItems}</div>}
    </>
  );
}

export default Home;
