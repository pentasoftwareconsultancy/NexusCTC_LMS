import React from 'react';
import ContactData from '../contactdata/ContactData';
import styles from './ContactInfo.module.css';
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {ContactData.map((contact, index) => (
          <div key={index} className={styles.contactCard}>
            <h2>{contact.title}</h2>
            <p>{contact.para}</p>

            <div className={styles.ContactAdress}>
              <MdLocationPin color='orange' size={30} className={styles.locationicon} />
              <h3>Address </h3>
            </div>
            <ul>
              <li><strong>Pune:</strong> {contact.Address.Pune_Address}</li>
              <li><strong>Nashik: </strong>{contact.Address.Nashik_Address}</li>
              <li><strong>Akola:</strong> {contact.Address.Akola_Address}</li>
            </ul>

            <div className={styles.MailIcon}>
              <MdEmail color="orange" size={30} className={styles.mailIcon} />
              <h3>Mail ID:</h3>
              {contact.Mail_ID}
            </div>

            <div className={styles.ContactNo}>
              <FaPhone color="orange" size={30} className={styles.contacticon} />
              <h3>Contact:</h3>
              {contact.Contact_Us}
            </div>

          </div>
        ))}
      </div>

      <div className={styles.right}>
        <form className={styles.form}>
          <div className={styles.Righttitle}>Send Message</div>
          <div className={styles.NameMob}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                aria-required="true"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="mobile">Mobile Number:</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
                required
                aria-required="true"
              />
            </div>
          </div>

          <div className={styles.EmailCourse}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                aria-required="true"
              />
            </div>


            <div className={styles.formGroup}>
              <label htmlFor="course">Course:</label>
              <input
                type="text"
                id="course"
                name="course"
                placeholder="Enter the course name"
                required
                aria-required="true"
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="4"
              required
              aria-required="true"
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>

      <address className={styles.Mapaddress}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1628.0113235319673!2d73.8018538119488!3d18.597327788922826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8e7b191df45%3A0x62be555255f8ee54!2sGaneesham%20Phase%202!5e0!3m2!1sen!2sin!4v1736586231251!5m2!1sen!2sin" width="370" height="450" allowfullscreen loading="lazy"></iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.8264954327565!2d73.78496647500158!3d19.97379768142456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb23c0a036eb%3A0xdfe93387e9ed6a9!2sAmideep%20Apartment%2C%20Parab%20Nagar%2C%20Nashik%2C%20Maharashtra%20422006!5e0!3m2!1sen!2sin!4v1737197232184!5m2!1sen!2sin" width="370" height="450" allowfullscreen loading="lazy"></iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.488168354527!2d73.80165827496486!3d18.597100182511376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b99b75c2a2b7%3A0xcfe04cc2a94f2f3f!2sDHL%20Express%20(India)%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1737197730357!5m2!1sen!2sin" width="370" height="450" allowfullscreen loading="lazy" ></iframe>
      </address>
    </div>
  );
};

export default ContactInfo;
