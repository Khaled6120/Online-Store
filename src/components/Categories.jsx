import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./styles/Categories.module.css";
import {
  FcBusinessman,
  FcMultipleDevices,
  FcBusinesswoman,
} from "react-icons/fc";
import { HiSparkles } from "react-icons/hi";
import {productsFetch} from "../features/productSlice"
import {FcShop} from "react-icons/fc"

function Categories() {
  const icons = [
    <FcShop />,
    <FcMultipleDevices />,
    <HiSparkles />,
    <FcBusinessman />,
    <FcBusinesswoman />,
  ];
  const [categories, setcategories] = useState(["All"])
  const fetchCategory = async () =>  {
    let data = await fetch('https://fakestoreapi.com/products/categories')
    let categories = await data.json()
    setcategories(["All",...categories])
   
 }
  useEffect(() => {
    fetchCategory()
  
  }, [])
  


  const dispatch = useDispatch()
  const handleCategory = (category) => {
    dispatch(productsFetch(category));
  };



  return (
    <div className={styles.container}>
      {categories.map((category, index) => (
        <div className={styles.container_s} key={index}>
          <div>{icons[index]}</div>
          <div
            onClick={() => handleCategory(category)}
            className={styles.category}
          >
            {category}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
