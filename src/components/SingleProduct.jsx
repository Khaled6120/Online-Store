import styles from './styles/SingleProduct.module.css';
import { GiShoppingCart } from "react-icons/gi";
function SingleProduct({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <img src={data.image} width="100%" height="200" alt="" />
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.textCategory}>{data.category}</p>
        <p className={styles.textTitle}>{data.title.slice(0, 40)} </p>
        <p className={styles.textBody}>{data.description.slice(0, 120)}...</p>
      </div>
      <div class={styles.cardFooter}>
        <button className={styles.button}>
          <div className={styles.defaultBtn}>
            <span style={{ margin: "auto" }}>$ {data.price}</span>
          </div>
          <div className={styles.hoverBtn}>
            <GiShoppingCart  />
            <span>Shop Now</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
