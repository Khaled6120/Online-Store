import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import styles from "./styles/Navbar.module.css";
import { useSelector } from "react-redux";
function Navbar() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <h2>
          Online <span>store</span>
        </h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navBag}>
          <GiShoppingCart className={styles.icon} />
          {cartTotalQuantity === 0 ? (
           ''
          ) : (
            <span className={styles.bagQuantity}>
              <span>{cartTotalQuantity}</span>
            </span>
          )}
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
