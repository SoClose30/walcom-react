import React from 'react'
import styles from "./NavBar.module.css"
import Image from 'next/image'
import Walcomlogo from "./assets/walcomlogo.png"
import {useRouter} from "next/router"
import Link from "next/link"

export default function NavBar() {

    const router = useRouter();
    const { pid } = router.query;
    
  return (
    <>
        <nav className={styles.headerNav}>
            <Image src={Walcomlogo} alt="Walcom" className={styles.navLogo} width="50px" height="50px"/>
            <ul className={styles.navLinks}>
                <li className={styles.navLinks__link}><Link href="/"><a className={styles.navLinks__link__a}>Home</a></Link></li>
                <li className={styles.navLinks__link}><Link href="/"><a className={styles.navLinks__link__a}>Mint</a></Link></li>
                <li className={styles.navLinks__link}><Link href="/"><a className={styles.navLinks__link__a}>Shop</a></Link></li>
            </ul>
        </nav> 
    </>
  )
}
