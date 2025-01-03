import React from 'react'
import styles from './News.module.css'
import { NewsData } from '../../../NewsData';
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { IoIosChatbubbles } from "react-icons/io";
import shape3 from '../../../assets/shape3.png'

function News() {
    return (

        <div className={styles.News}>
            <div className={styles.shape3}><img src={shape3} alt=""/></div>
            <div className={styles.article}> LATEST ARTICLE</div>
            <p className={styles.p}>Get News With Eduweb</p>

            <div className={styles.news_container}>


                {NewsData.map((news, index) => (
                    <div className={styles.news_item} key={index}>
                        <div className={styles.content}>
                            <img src={news.image} alt={news.heading} className={styles.image} />
                            <div className={styles.news_details}>

                                <div className={styles.mode}>{news.mode}</div>

                                <div className={styles.heading}>{news.heading}</div>

                                <div className={styles.date}><p><HiOutlineCalendarDays color='orange' />{news.date}  </p>  <p><IoIosChatbubbles color='orange'/>{news.Com}</p> </div>

                                <div className={styles.text}>{news.text}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News
