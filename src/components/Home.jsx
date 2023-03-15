import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";
import Categories from "./Categories";
import styles from "./styles/SingleProduct.module.css";
import MainCarousels from "./MainCarousels";
import style from "./styles/skeleton.module.css";
import { useDispatch } from "react-redux";
import { productsFetch } from "../redux/features/product"
import { TotalPriceAndQuantity } from "../redux/features/cart";
function Home() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(productsFetch());
    dispatch(TotalPriceAndQuantity())
  },[])

  const { items, status } = useSelector((state) => state.products);

  const renderedItems = items.map((item,index) => <SingleProduct data={item} key={item.id} />);
  return (
    <>
      <MainCarousels />
      <Categories />
      {status === "loading" && (
        <div className={style.body}>
          <div className={style.loader}>
          <div className={style.box}></div>
          <div className={style.box}></div>
          <div className={style.box}></div>
          <div className={style.box}></div>
        </div>
        </div>
      )}
      {items && <div className={styles.continer}>{renderedItems}</div>}
    </>
  );
}

export default Home;
