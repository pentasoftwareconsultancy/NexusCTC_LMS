import React from 'react';
import { useParams } from 'react-router-dom';
import { GallaryData } from "../gallarydata/GallaryData"
import styles from './ImageDetail.module.css'

const ImageDetail = () => {
  const { id } = useParams();
  const imageDetail = GallaryData.find((item) => item.id.toString() === id);

  if (!imageDetail) {
    return <div>Image not found!</div>;
  }

  return (
    <div className={styles.ImageDetailContainer}>
      <div className={styles.CollageName}>{imageDetail.collageName}</div>
      <div className={styles.ImageContainer}>
      <div className={styles.ImageDetail}>
       
      <img src={imageDetail.gallaryimg1}  className={styles.GallaryImages}/>
      <img src={imageDetail.gallaryimg2} className={styles.GallaryImages}/>
      <img src={imageDetail.gallaryimg3} className={styles.GallaryImages}/>
      <img src={imageDetail.gallaryimg4} className={styles.GallaryImages}/>
      <img src={imageDetail.gallaryimg5} className={styles.GallaryImages}/>
      <img src={imageDetail.gallaryimg6} className={styles.GallaryImages}/>
      <img src={imageDetail.gallaryimg7} className={styles.GallaryImages}/>
      <img src={imageDetail.gallaryimg8} className={styles.GallaryImages}/>
      <img src={imageDetail.gallaryimg9} className={styles.GallaryImages}/>
      <img src={imageDetail.gallaryimg10} className={styles.GallaryImages}/>
      <img src={imageDetail.gallaryimg11} className={styles.GallaryImages}/>
      <img src={imageDetail.gallaryimg12} className={styles.GallaryImages}/>
      <img src={imageDetail.gallaryimg13} className={styles.GallaryImages}/>
      </div>
      </div>
    </div>
  );
};

export default ImageDetail;
