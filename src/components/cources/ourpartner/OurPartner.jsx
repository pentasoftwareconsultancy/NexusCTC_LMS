import React from 'react';
import { OurPartnerData } from './OurPartnerData/OurPartnerData'
import styles from './OurPartner.module.css'; 

function OurPartner() {
  return (
    
    <div className={styles.ourPartnersContainer}>
      <div className={styles.OurPartnerHeading}>
        OUR PARTNERS
      </div>
      {/* Row 1 - Left side sliding */}
      <div className={`${styles.row} ${styles['row-left']}`}>
        {OurPartnerData[0].map((partner, index) => {
          const partnerKey = Object.keys(partner)[0]; // Get the dynamic key for the image
          return (
            <div key={index} className={styles.partner}>
              <img src={partner[partnerKey]} alt={`Partner ${index + 1}`} />
            </div>
          );
        })}
      </div>

      {/* Row 2 - Right side sliding */}
      <div className={`${styles.row} ${styles['row-right']}`}>
        {OurPartnerData[1].map((partner, index) => {
          const partnerKey = Object.keys(partner)[0]; // Get the dynamic key for the image
          return (
            <div key={index} className={styles.partner}>
              <img src={partner[partnerKey]} alt={`Partner ${index + 13}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurPartner;
