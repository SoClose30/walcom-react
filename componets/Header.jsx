import React from 'react'
import styles from "./Header.module.css"
import Image from "next/image"
import HeaderLogo from "./assets/walcomlogo.png"
import Link from "next/link"

export default function Header() {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.textcontainer}>
                <div className={styles.textcontainer__box}>
                    <h1 className={styles.header__text}><span>50,000</span> users registered today, what are you waiting for?</h1>
                    <Link href="/register"><a className={styles.textcontainer__ctabtn}>Start now &#x2192;</a></Link>
                    <Link href="/"><a className={styles.textcontainer__mintbtn}>MINT &#x2192;</a></Link>
                </div>
            </div>
            <div className={styles.imagecontainer}>
                <Image src={HeaderLogo} width="500px" height="500px" className={styles.header__logo}/>
            </div>
        </header>
    </>
  )
}
