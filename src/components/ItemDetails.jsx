import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import style from "./styles/ItemDetails.module.css";
function ItemDetails() {
  const { state } = useLocation();
  const navigate = useNavigate()
   const dispatch = useDispatch()
  const handleOnAdd = (item)=>{
    dispatch(addToCart(item))
    navigate("/cart");
  }
  return (
    <div className={style.container}>
      <div className={style.detail}>
        <img className={style.Itemimg} src={state.image} alt="" />
      </div>

      <div className={style.detail}>
        <h3 className={style.category}>{state.category}</h3>
        <h1 className={style.title}>{state.title}</h1>
        <div className={style.subContainer}>
          <p className={style.rate}>{state.rating.rate}</p>
          <p className={style.price}>{state.price}</p>
        </div>
        <p className={style.description}>{state.description}</p>
        <div className={style.buttons}>
          <button onClick={()=>handleOnAdd(state)}>Add To Cart</button>
          <button onClick={()=>navigate('/')}>Back to Store</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
