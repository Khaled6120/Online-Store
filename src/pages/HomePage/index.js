import { useEffect } from "react";
import { useSelector } from "react-redux";
import style from './Home.module.css'
import SingleProduct from "../../components/SingleProduct";
import Categories from "../../components/Categories";
import MainCarousels from "../../components/MainCarousels";
import { useDispatch } from "react-redux";
import { productsFetch } from "../../redux/features/product"
import { TotalPriceAndQuantity } from "../../redux/features/cart";

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
      {items && <div className={style.continer}>{renderedItems}</div>}
    </>
  );
}

export default Home;
