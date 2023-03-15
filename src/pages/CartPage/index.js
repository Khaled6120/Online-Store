import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css"
import { AiOutlineArrowLeft } from "react-icons/ai";
import SingleCartItem from '../../components/SingleCartItem'
import { CartLoader } from "../../components/CartLoader"
import { useEffect } from "react";
import { TotalPriceAndQuantity } from "../../redux/features/cart";

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log("here", cart)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(TotalPriceAndQuantity())
  },[dispatch, cart])
  return (
    <div className={styles.cart_container}>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className={styles.cart_empty}>
          <CartLoader />
          <p>Your cart is currently empty</p>
          <div className={styles.start_shopping}>
            <Link to="/">
              <AiOutlineArrowLeft />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <SingleCartItem cart={cart} />
      )}
    </div>
  );
}

export default Cart;
