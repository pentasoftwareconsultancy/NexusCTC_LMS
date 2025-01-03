import React from 'react';
import styles from './Reasons.module.css';
import reasonsimg1 from '../../../assets/reasonsimg1.jpg';
import shape2 from '../../../assets/shape2.png';
import reasonsshape2 from '../../../assets/reasonsshape2.svg'
import { BsPeople } from "react-icons/bs";
import reasonsshape3 from '../../../assets/reasonsshape3.svg'
import { IoCheckmarkDoneOutline } from "react-icons/io5";

function Reasons() {
  return (
    <div className={styles.reasons}>
      <div className={styles.reasons_r}>
        <div className={styles.imageContainer}>
          <img src={shape2} alt="shape" className={styles.shapeImg} />
          <img src={reasonsimg1} className={styles.reasonsImg} />
          <img src={reasonsshape2} alt="reasons" className={styles.reasonsShape} />
          <div className={styles.learners}>
            <div>+<BsPeople size={30}/></div>
            <div className={styles.enroll}><span className={styles.span}>20K+</span><br />Enrolled Learners</div>
          </div>
        </div>
      </div>

      <div className={styles.reasons_l}>

        <div className={styles.content}>
          ABOUT
          <h1>Over 10 Years in<span className={styles.span}> Distant learning for</span><br/> skill Development</h1>
          <p>Lorem ipsum dolor sit amet consectur adipiscing<br />
            elit sed eiusmod ex tempor incididunt labore dolore<br />
            magna aliquaenim ad minim.</p>
            <img src={reasonsshape3} alt="" className={styles.reasonsshape3}></img>
        </div>
        <div className={styles.features}>
          <ul>
            <li><IoCheckmarkDoneOutline color="orange"/>  Expert Trainers</li><br/>
            <li><IoCheckmarkDoneOutline color="orange" /> Online Remote Learning</li><br/>
            <li><IoCheckmarkDoneOutline color="orange" /> Lifetime Access</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Reasons;
