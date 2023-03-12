import React from 'react'
import { useSelector } from 'react-redux'
import styles from './styles/Categories.module.css'
function Categories() {

  //getting categories directly from the API
    const {items} = useSelector(state=>state.products)
    let categorySet = new Set()
    items.forEach(element => {
        categorySet.add(element.category)
    });
    let categories = Array.from(categorySet);

  return (
    <div className={styles.container}>
      {categories.map(category =>(
        <div className={styles.category} >{category}</div>
      ))}
    </div>
  )
}

export default Categories