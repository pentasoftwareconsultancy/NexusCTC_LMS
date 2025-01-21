import React from 'react';
import { OurPartnerData } from './OurPartnerData/OurPartnerData';

const OurPartners = () => {
  return (
    <div>
      {OurPartnerData.map((partner, index) => (
        <img 
          key={index} 
          src={partner.OurPartnersimg1} 
          alt="Our Partner" 
          style={{ width: '150px', height: 'auto' }}
        />
      ))}
    </div>
  );
};

export default OurPartners;
