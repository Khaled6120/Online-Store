import styles from './styles/SingleProduct.module.css';
import { GiShoppingCart } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import {useNavigate} from 'react-router'
function SingleProduct({ data , navigation }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAddToCart = product =>{
    dispatch(addToCart(product))
    navigate('/cart')
  }
  
  const handleShowItem = (item)=>{
    navigate(`/item/${item.id}`, {
      state: item
    })
  ;
  }

  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <img src={data.image} width="100%" height="200" alt="" />
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.textCategory}>{data.category}</p>
        <p onClick={()=>handleShowItem(data)} className={styles.textTitle}>{data.title.slice(0, 40)} </p>
        <p className={styles.textBody}>{data.description.slice(0, 120)}...</p>
      </div>
      <div className={styles.cardFooter}>
        <button onClick={()=>handleAddToCart(data)} className={styles.button}>
          <div className={styles.defaultBtn}>
            <span style={{ margin: "auto" }}>$ {data.price?.toFixed(2)}</span>
          </div>
          <div className={styles.hoverBtn}>
            <GiShoppingCart className={styles.icon} />
            <span>Shop Now</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
