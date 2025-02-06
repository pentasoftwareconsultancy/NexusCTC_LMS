import React from 'react';
import Styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import footerData from './footerdata/footerData'

function Footer() {

    const { about, usefulLinks, cources, contact } = footerData;

  return (
    <div className={Styles.Container}>
      <div className={Styles.FlexContainer}>
        
        {/* About Section */}
        <div className={Styles.Section}>
          <h3>{about.heading}</h3> 
          <img src={about.logo} alt="Company Logo" className={Styles.Logo} />
          <p>{about.description}</p>

          <p>Phone: {about.phone}</p>
          <p>Email: <a href={`mailto:${about.email}`}>{about.email}</a></p>

          <div className={Styles.SocialMedia}>
            {about.socialLinks.map((social, index) => {
              const Icon = 
                social.icon === 'facebook' ? FaFacebookF :
                social.icon === 'twitter' ? FaTwitter :
                social.icon === 'instagram' ? FaInstagram :
                FaLinkedinIn;
              
              return (
                <a key={index} href={social.url} target="_blank" rel="noreferrer">
                  <Icon className={Styles.Icon} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Useful Links Section */}
        <div className={Styles.Section}>
          <h3>{usefulLinks.heading}</h3>
          <ul>
            {usefulLinks.links.map((link, index) => (
              <li key={index}><a href={link.path}>{link.title}</a></li>
            ))}
          </ul>
        </div>

        {/* Cources Section */}
        <div className={Styles.CourcesSection}>
          <h3>{cources.heading}</h3> 
          <ul>
            {cources.list.map((cource, index) => (
              <li key={index}>{cource}</li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className={Styles.Section}>
          <h3>{contact.heading}</h3>
          <p><strong>Pune Address:</strong>{contact.details.Pune_Address}</p>
          <p><strong>Nashik Address:</strong>{contact.details.Nashik_Address}</p>
          <p><strong>Akola Address:</strong>{contact.details.Akola_Address}</p>
         
        </div>

      </div>
      
      <hr />
      <div className={Styles.Copyright}>
        <span>© 2025 Nexus Corporate Training Center - All Rights Reserved
        Made By Nexusctc.com</span>        
      </div>
    </div>
  );
}

export default Footer;
