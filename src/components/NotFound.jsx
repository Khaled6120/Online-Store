import styles from './styles/NotFound.module.css'
function NotFound() {
  return (
    <div className={styles.notFound}>
        <h2>404</h2>
        <p>page not found!</p>
    </div>
  )
}

export default NotFound