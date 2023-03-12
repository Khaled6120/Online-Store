import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles/Checkout.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { removeAll } from "../features/cartSlice";
function Checkout({Navigate}) {
   const {cartTotalAmount} = useSelector((state)=> state.cart)
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const handleSubmit = ()=>{
    if(cartTotalAmount > 0){
        toast("Thanks for purchasing!",{
            position: "top-center",
            autoClose: 5000,
        });
        dispatch(removeAll())

        navigate('/')
    }else{
        navigate('/')
    }
   
   }
   return (
    <div class={styles.wrapper}>
    <div class={styles.title}>Checkout form</div>
    <div class={styles.checkout_form}>
       <div class={styles.input_item}>
        <input type="text" placeholder="Card Holder Name"/>
     </div>
     <div class={styles.input_item}>
       <input type="text" placeholder="0000 0000 0000 0000" data-mask="0000 0000 0000 0000"/>
    </div>
    <div class={styles.input_grp}>
      <div class={styles.input_item}>
        <input type="text" placeholder="MM / YY" data-mask="00 / 00"/>
      </div>
      <div class={styles.input_item}>
        <input type="text" placeholder="* * *" data-mask="0 0 0"/>
      </div>
    </div>
      <div class={styles.btn}>

         <button onClick={handleSubmit}>${cartTotalAmount}</button>
      </div>
  </div>
</div>
  );
}

export default Checkout;
