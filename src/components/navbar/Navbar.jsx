import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const mobile = window.innerWidth <= 768; // Check for mobile view
    const [menuOpened, setMenuOpened] = useState(false); // Track menu state

    return (
        <div className={styles.container}>
            {/* Mobile Menu Icon */}
            {mobile && (
                <div
                    className={styles.menuIcon}
                    onClick={() => setMenuOpened(!menuOpened)}
                >
                    <FaBars className={styles.barIcon} />
                </div>
            )}
            <nav className={styles.Navbar}>
                <ul className={`${styles.navbarList} ${menuOpened ? styles.navbarListOpen : ''}`}>
                    <li className={styles.navbarItem}>
                        <Link to="/" className={styles.navbarLink}>Home</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link to="/about" className={styles.navbarLink}>About</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link to="/cources" className={styles.navbarLink}>Courses</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link to="/blog" className={styles.navbarLink}>Blog</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link to="/guestexam" className={styles.navbarLink}>Exam</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link to="/gallary" className={styles.navbarLink}>Gallary</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link to="/contact" className={styles.navbarLink}>Contact</Link>
                    </li>
                    <li className={styles.navbarLogin}>
                        <Link to="/login" className={styles.navbarLink}>Login</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
