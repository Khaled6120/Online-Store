import { useDispatch } from 'react-redux';
import { removeAll } from '../redux/features/cart';
import { closeModal } from '../redux/features/modal';
import styles from "./styles/Modal.module.css"
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className={styles.modal_container}>
      <div className={styles.modal}>
        <h4>Remove all items from your shopping cart?</h4>
        <div className={styles.btn_container}>
          <button
            type='button'
            className={`${styles.btn} ${styles.confirm_btn} `} 
            onClick={() => {
              dispatch(removeAll());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type='button'
            className={`${styles.btn} ${styles.clear_btn}`}  
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
