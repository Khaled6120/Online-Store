import styles from "./styles/Cart.module.css";
import { AiOutlineArrowLeft,AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  removeAll,
  decreaseCart,
  addToCart,
  discount
} from "../features/cartSlice";
import DeleteBtn from "./DeleteBtn";
import { BsCartPlus, BsCartDash } from "react-icons/bs";
import { useRef,useEffect } from "react";

function SingleCartItem({ cart }) {
  const dispatch = useDispatch();

  const discountInput = useRef()

  useEffect(() => {
    code()
  }, [])
  
  const code = ()=>{
    let discCount =discountInput.current.value
    if(discCount ==="YOUTHINK"){
      dispatch(discount())
      return
      }
  }

  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };
  const deleteAll = () => {
    dispatch(removeAll());
  };
  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };
  const handleIncreaseCart = (item) => {
    dispatch(addToCart(item));
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
        {cart?.cartItems?.map((cartItem) => (
          <div className={styles.cart_item} key={cartItem.id}>
            <div className={styles.cart_product}>
              <img src={cartItem.image} alt="img" />
              <div>
                <h3>{cartItem.title?.slice(0, 30)}</h3>
                <p>{cartItem.category?.slice(0, 20)}</p>
                <DeleteBtn click={handleDelete} item={cartItem} />
              </div>
            </div>
            <div className={styles.cart_product_price}>${cartItem.price?.toFixed(2)}</div>
            <div className={styles.cart_product_quantity}>
              <button onClick={() => handleDecreaseCart(cartItem)}>
                <BsCartDash />
              </button>
              <div className={styles.count}>{cartItem.cardQuantity}</div>
              <button onClick={() => handleIncreaseCart(cartItem)}>
                <BsCartPlus />
              </button>
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
            <span className={styles.amount}>${cart.cartTotalAmount?.toFixed(2)}</span>
          </div>
          <p>Use <b style={{color:"#6a4ec0", fontWeight:"bold"}}>YOUTHINK</b> code to get $5 OFF!</p>
          <input ref={discountInput} onChange={()=>code()} type="text" placeholder="- - - - -" />
          <button>
            <Link to="/checkout">
            <AiOutlineRight />

              <span>Proceed to Checkout</span>
            </Link>
          </button>
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
