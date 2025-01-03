import React, { useRef, useState } from 'react';
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
                    <h2>Edu Web</h2>
                    <p>Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.</p>
                    <p>
                        Address: 70-80 Upper St Norwich NR2
                        <br />
                        Call: +01 123 4567 890
                        <br />
                        Email: info@eduweb.com
                    </p>
                </div>

                {/* Online Platform Section */}
                <div className={styles.Onlineplatform}>
                    <h2>Online Platform</h2>
                    <ul>
                        <li>About</li>
                        <li>Courses</li>
                        <li>Instructor</li>
                        <li>Events</li>
                        <li>Instructor Profile</li>
                        <li>Purchase Guide</li>
                    </ul>
                </div>

                {/* Links Section */}
                <div className={styles.link}>
                    <h2>Links</h2>
                    <ul>
                        <li>Contact Us</li>
                        <li>Gallery</li>
                        <li>News & Articles</li>
                        <li>FAQ's</li>
                        <li>Sign in/Registration</li>
                    </ul>
                </div>

                {/* Contacts Section with Newsletter Subscription */}
                <div className={styles.contacts}>
                    <h2>Contacts</h2>
                    <p>Enter your email address to register for our newsletter subscription</p>

                    {/* Form to handle email subscription */}
                    <form ref={form} onSubmit={sendEmail}>
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
                    </form>

                    {/* Displaying response message */}
                    {responseMessage && (
                        <div className={styles.responseMessage} role="alert" aria-live="assertive">
                            {responseMessage}
                        </div>
                    )}

                    {/* Social Media Icons */}
                    <div className={styles.socialIcons}>
                      <li><FaFacebook /></li>                            
                        <li> <FaLinkedin /></li>
                           
                       <li> <FaInstagram /></li>
                           
                       <li><FaTwitter /></li>
                            
                      <li><FaYoutube /></li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
