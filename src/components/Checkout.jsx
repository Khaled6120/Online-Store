import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles/Checkout.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { removeAll } from "../features/cartSlice";
function Checkout() {
  const { cartTotalAmount } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // form Validations
  const nameInput = useRef();
  const cardNumberInput = useRef();
  const dateInput = useRef();
  const pinInput = useRef();

  const handleSubmit = () => {
    if (nameInput.current.value === "") {
      toast.error("Please enter a valid name");
      return;
    }
    if (nameInput.current.value.length < 3) {
      toast.error("Name must be at least 3 characters");
      return;
    }
    if (pinInput.current.value.length < 3) {
      toast.error("CVC number must be 3 numbers");
      return;
    }
    if (
      cardNumberInput.current.value.length < 16 ||
      cardNumberInput.current.value.length > 16
    ) {
      toast.error("Card number must be 16 numbers");
      return;
    }
    if (dateInput.current.value.length < 1) {
      toast.error("please provide a valid date");
      return;
    }

    if (cartTotalAmount > 0) {
      toast("Thanks for purchasing!", {
        position: "top-center",
        autoClose: 5000,
      });
      dispatch(removeAll());

      navigate("/");
    } else {
      navigate("/");
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Checkout form</div>
      <div className={styles.checkout_form}>
        <div className={styles.input_item}>
          <input ref={nameInput} type="text" placeholder="Card Holder Name" />
        </div>
        <div className={styles.input_item}>
          <input
            ref={cardNumberInput}
            type="number"
            placeholder="0000 0000  0000 0000"
            data-mask="0000 0000 0000 0000"
          />
        </div>
        <div className={styles.input_grp}>
          <div className={styles.input_item}>
            <input
              ref={dateInput}
              type="text"
              placeholder="MM / YY"
              data-mask="00 / 00"
            />
          </div>
          <div className={styles.input_item}>
            <input
              ref={pinInput}
              type="number"
              placeholder="* * *"
              data-mask="0 0 0"
            />
          </div>
        </div>
        <div className={styles.btn}>
          <button onClick={handleSubmit}>
            {cartTotalAmount === 0 ? "Home Page" : `$ ${cartTotalAmount?.toFixed(2)}`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
