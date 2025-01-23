// import React from 'react';
// import { sectionsData } from '../datafile/sectionData'; // Adjust the import based on your file structure
// import styles from './WhyChooseUs.module.css'; // Create and import a CSS file for styles

// const WhyChooseUsSection = () => {
//   const { WhyChooseUs } = sectionsData;

//   return (
//     <section className={styles.whyChooseUsSection}>
//       {/* Render the Title separately */}
//       <h2 className={styles.sectionTitle}>Why Choose Us</h2>
//      <div className={styles.WhyChooseUs}>
//       {/* Render the content for each item */}
//       {WhyChooseUs.map((item, index) => (
//         <div key={index} className={styles.contentBlock}>

//             {/* Add image dynamically */}
//           {item.image && (
//             <img src={item.image} alt={item.heading} className={styles.image} />
//           )}

//           <h3 className={styles.heading}>{item.heading}</h3>
//           <p className={styles.stars}>{item.stars}</p>
//           <p className={styles.description}>{item.description}</p>
//         </div>
//       ))}
//        </div>
//     </section>


//   );
// };

// export default WhyChooseUsSection;


import React from "react";
import { sectionsData } from "../datafile/sectionData";
import styles from "./WhyChooseUs.module.css";  // Import the CSS module

const WhyChooseUs = () => {
  return (
    <section>
      <h2 className={styles.heading}>Why Choose Us</h2>
      <div className={styles.whyChooseUsContainer}>
        {sectionsData.WhyChooseUs.map((item, index) => (
          <div key={index} className={styles.whyChooseUsItem}>
            <div className={styles.WhyChooseUsLogo}>{item.WhyChooseUsLogo}</div>
            <p ><strong>{item.student_counting}</strong>
              <div className={styles.content}>{item.content}</div>
            </p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;


