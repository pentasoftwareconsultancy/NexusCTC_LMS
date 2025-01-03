import React from 'react'
import styles from './hero.module.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import shape from '../../../assets/shape.png'
import heroimg1 from '../../../assets/heroimg1.jpg'
import heroimg2 from '../../../assets/heroimg2.jpg'

function Hero() {
    return (
        <div className={styles.hero}>
            
                <div className={styles.hero_l}>
                    <h1 className={styles.section_title}>
                        The Best Program<br /> to <span className={styles.span}>Enroll</span> for<br /> Exchange
                    </h1>

                    <p className={styles.hero_text}>
                        Excepteur sint occaecat cupidatat non proident sunt in<br /> culpa qui officia deserunt mollit.
                    </p>

                    <div className={styles.btn_has_before}>
                        Find courses
                        <div className={styles.arrow}>
                            <IoIosArrowRoundForward />
                        </div>
                    </div>
                </div>

                <div className={styles.hero_r}>
                    <div className={styles.image_container}>
                        <div className={styles.image}>
                            <img src={shape} alt="" />
                        </div>
                        <img src={heroimg1} alt="" className={styles.img1} />
                        <img src={heroimg2} alt="" className={styles.img2} />


                    </div>
                </div>
            
        </div>
    )
}

export default Hero
