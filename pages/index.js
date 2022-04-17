import Header from '../componets/Header'
import NavBar from '../componets/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
       <NavBar />
       <Header />
    </div>
  )
}
