import React from 'react'
import styles from "./ResponsiveNavBar.module.css"
import Walcomlogo from "./assets/walcomlogo.png"
import Image from 'next/image'

export default function ResponsiveNavBar() {
  return (
    <nav className={styles.header__nav}>
        <Image src={Walcomlogo} alt="Walcom" className={styles.navLogo} width="50px" height="50px"/>
        <div className={styles.nav__menu}>
            <span className={styles.menu__bar1}></span>
            <span className={styles.menu__bar2}></span>
        </div>
    </nav>
  )
}
