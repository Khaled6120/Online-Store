import React from "react";
import { useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";
import Categories from "./Categories";
import styles from "./styles/SingleProduct.module.css";
import MainCarousels from "./MainCarousels";
import style from "./styles/skeleton.module.css";
function Home() {
  const { items, status } = useSelector((state) => state.products);

  const renderedItems = items.map((item) => <SingleProduct data={item} />);
  return (
    <>
      <MainCarousels />
      <Categories />
      {status === "loading" && (
        <div className={style.body}>
          <div class={style.loader}>
          <div class={style.box}></div>
          <div class={style.box}></div>
          <div class={style.box}></div>
          <div class={style.box}></div>
        </div>
        </div>
      )}
      {items && <div className={styles.continer}>{renderedItems}</div>}
    </>
  );
}

export default Home;
