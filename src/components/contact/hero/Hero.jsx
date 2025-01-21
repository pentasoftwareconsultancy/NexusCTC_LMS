import React from 'react'
import styles from './Hero.module.css'

function Hero() {
  return (
    <div className={styles.ContactHero}>
     <section className={styles.heroSection}>
        <img
          src='https://www.nexusctc.com/assets/contactUs-DY0dHHJf.jpg'className={styles.heroImage}
        />
        <h1 className={styles.heroTitle}>Contact Us</h1>
      </section>
    </div>
  )
}

export default Hero
