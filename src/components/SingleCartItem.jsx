import React from "react";
import styles from "./styles/Cart.module.css";
import { FiDelete } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart, removeAll } from "../features/cartSlice";
import DeleteBtn from "./DeleteBtn";
function SingleCartItem({ cart }) {
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };
  const deleteAll = () => {
    dispatch(removeAll());
  };
  return (
    <div>
      <div className={styles.titles}>
        <h3 className={styles.produc_title}>Product</h3>
        <h3 className={styles.price}>Price</h3>
        <h3 className={styles.quantity}>Quantitiy</h3>
        <h3 className={styles.total}>Total</h3>
      </div>
      <div className={styles.cart_items}>
        {cart.cartItems?.map((cartItem) => (
          <div className={styles.cart_item} key={cartItem.id}>
            <div className={styles.cart_product}>
              <img src={cartItem.image} alt="img" />
              <div>
                <h3>{cartItem.title.slice(0, 30)}</h3>
                <p>{cartItem.category.slice(0, 20)}</p>
                <DeleteBtn click={handleDelete} item={cartItem} />
              </div>
            </div>
            <div className={styles.cart_product_price}>${cartItem.price}</div>
            <div className={styles.cart_product_quantity}>
              <button>-</button>
              <div className={styles.count}>{cartItem.cardQuantity}</div>
              <button>+</button>
            </div>
            <div className={styles.cart_product_total_price}>
              ${cartItem.price * cartItem.cardQuantity}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cart_summary}>
        <button onClick={deleteAll} className={styles.clear_cart}>
          Empty Cart
        </button>
        <div className={styles.cart_checkout}>
          <div className={styles.subtotal}>
            <span>Subtotal</span>
            <span className={styles.amount}>${cart.cartTotalAmount}</span>
          </div>
          <p>Taxes and shipping calculated at checkout</p>
          <button>Ckeck out</button>
          <div className={styles.continue_shopping}>
            <Link to="/">
              <AiOutlineArrowLeft />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCartItem;
