import Header from '../componets/Header'
import NavBar from '../componets/NavBar'
import ResponsiveNavBar from '../componets/ResponsiveNavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
       <ResponsiveNavBar />
       <NavBar />
       <Header />
    </div>
  )
}
