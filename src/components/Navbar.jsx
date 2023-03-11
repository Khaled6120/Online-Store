import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import styles from './styles/Navbar.module.css'; 

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <h2>Online shop</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navBag}>
          <BsFillBagFill />
          <span className={styles.bagQuantity}>
            <span>3</span>
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
