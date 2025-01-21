import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import styles from './Footer.module.css';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Footer() {
    const form = useRef();  // useRef to reference the form
    const [isSubmitting, setIsSubmitting] = useState(false);  // Track form submission state
    const [responseMessage, setResponseMessage] = useState('');  // Message after submission

    const sendEmail = (e) => {
        e.preventDefault();  // Prevent default form submit behavior
        setIsSubmitting(true);  // Set submitting state to true

        // Send email using EmailJS
        emailjs.sendForm('service_ixmnrie', 'template_cw3z8np', form.current, 'K6cyaZrhz1z6LTGHU')
            .then((result) => {
                setResponseMessage('Thank you for subscribing!');  // Success message
                form.current.reset();  // Reset the form after successful submission
            })
            .catch((error) => {
                setResponseMessage('Something went wrong, please try again later.');  // Error message
                console.error('EmailJS error:', error);  // Log error for debugging
            })
            .finally(() => {
                setIsSubmitting(false);  // End submitting state
            });
    };

    return (

        <div className={styles.Footer}>
            <div className={styles.content}>
                {/* Text Section */}
                <div className={styles.text}>
                    <h2>Nexus Corporate Training Center</h2>
                    <div className={styles.FooterLogo}>
                        <img src='https://www.nexusctc.com/assets/NexusctcLogo-DxZCpO4-.png' />
                    </div>
                    {/* <p>Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.</p> */}
                    {/* <p>
                        Address: 70-80 Upper St Norwich NR2
                        <br />
                        Call: +01 123 4567 890
                        <br />
                        Email: info@eduweb.com
                    </p> */}
                </div>


                {/* Online Platform Section */}
                <div className={styles.Onlineplatform}>
                    <h2>Useful Links</h2>
                    <ul>
                        <li><Link to="/" className={styles.FooterLink}>Home</Link></li>
                        <li><Link to="/about" className={styles.FooterLink}>About </Link></li>
                        <li> <Link to="/cources" className={styles.FooterLink}>Cources</Link></li>
                        <li><Link to="/blog" className={styles.FooterLink}>Blog</Link></li>
                        <li><Link to="/contact" className={styles.FooterLink}>Contact</Link></li>
                        <li><Link to="/login" className={styles.FooterLink}>Login</Link></li>
                    </ul>
                </div>

                {/* Links Section */}
                <div className={styles.link}>
                    <h2>Our Cources</h2>
                    <ul className={styles.FooterCources}>
                        <li>SoftWare Testing</li>
                        <li>AWS Administrator</li>
                        <li>Dev-Ops</li>
                        <li>Power BI</li>
                        <li>Data Science</li>
                        <li>Full Stack Developer </li>
                        <li>Big Data</li>
                        <li>Medical Coding</li>
                        <li>AR Caller</li>
                        <li>Java</li>
                        <li>C# and .NET</li>
                        <li>Business Analyst</li>
                        <li>Sales Force Adm Dev</li>
                        <li>SQL</li>
                        <li>Scrum Master</li>
                        <li>Digital Marketing</li>
                        <li>Soft Skills</li>
                    </ul>
                </div>

                {/* Contacts Section with Newsletter Subscription */}
                {/* <div className={styles.contacts}>
                    <h2>Contacts</h2> */}

                {/* <p>Enter your email address to register for our newsletter subscription</p> */}

                {/* Form to handle email subscription */}
                {/* <form ref={form} onSubmit={sendEmail}>
                        <div className={styles.mail}>
                            <input
                                type="email"
                                name="user_email"  // Make sure this matches the form field in your template
                                placeholder="Your email"
                                required
                            />
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Subscribe'}
                            </button>
                        </div>
                    </form> */}

                {/* Displaying response message */}
                {/* {responseMessage && (
                        <div className={styles.responseMessage} role="alert" aria-live="assertive">
                            {responseMessage}
                        </div>
                    )} */}

                {/* Social Media Icons */}
                <div className={styles.socialIcons}>
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                    <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                    <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
                </div>

                {/* </div> */}

            </div>
            <div className={styles.Line}></div>
            <div className={styles.Copyright}>
                © {new Date().getFullYear()} Nexus Corporate Training Center - All
                Rights Reserved

            </div>
        </div>
    );
}

export default Footer;

