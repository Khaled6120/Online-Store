import style from "./styles/Footer.module.css";
import favicon from './styles/favicon.png'
function Footer() {
  return (
    <div className={style.container}>

      <img className={style.img} src={favicon} alt="" />
    </div>
  );
}

export default Footer;
