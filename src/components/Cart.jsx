import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./styles/Cart.module.css"
import {FiDelete} from "react-icons/fi"
import { AiOutlineArrowLeft } from "react-icons/ai";
import SingleCartItem from './SingleCartItem'
import CartLoader from "./CartLoader"
function Cart() {
  const cart = useSelector((state) => state.cart);
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
