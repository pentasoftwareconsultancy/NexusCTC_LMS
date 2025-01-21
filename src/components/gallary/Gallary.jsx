import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { GallaryData } from "./gallarydata/GallaryData"
import styles from './Gallary.module.css';

const Gallary = () => {
  return (
    <div className={styles["gallery-container"]}>
      {GallaryData.map((item) => (
        <div key={item.id} className={styles["gallery-item"]}>
          <div className={styles.Circle}>
            <Link to={`/image/${item.id}`}>
              <img
                src={item.gallaryimage}
                alt={`Gallery Image ${item.id}`}
              />
            </Link>
          </div>
          <div className={styles.CollegeName}>{item.collageName}</div>
        </div>
      ))}
    </div>
  );
};

export default Gallary;
