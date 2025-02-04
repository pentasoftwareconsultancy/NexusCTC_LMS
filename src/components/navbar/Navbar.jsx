import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaBars, FaUserCircle } from "react-icons/fa";

const Navbar = ({ loggedIn, setLoggedIn }) => {
    const mobile = window.innerWidth <= 768;
    const [menuOpened, setMenuOpened] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');  // Redirect to login page after logout
    };

    return (
        <div className={styles.container}>
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
                    <li className={styles.navbarItem}><Link to="/" className={styles.navbarLink}>Home</Link></li>
                    <li className={styles.navbarItem}><Link to="/about" className={styles.navbarLink}>About</Link></li>
                    <li className={styles.navbarItem}><Link to="/cources" className={styles.navbarLink}>Courses</Link></li>
                    <li className={styles.navbarItem}><Link to="/blog" className={styles.navbarLink}>Blog</Link></li>
                    <li className={styles.navbarItem}><Link to="/guestexam" className={styles.navbarLink}>Exam</Link></li>
                    <li className={styles.navbarItem}><Link to="/gallary" className={styles.navbarLink}>Gallery</Link></li>
                    <li className={styles.navbarItem}><Link to="/contact" className={styles.navbarLink}>Contact</Link></li>

                    {loggedIn || isLoggedIn ? (
                        <li className={styles.profileContainer}>
                            <FaUserCircle 
                                className={styles.profileIcon} 
                                onClick={() => setShowDropdown(!showDropdown)} 
                            />
                            {showDropdown && (
                                <div className={styles.dropdownMenu}>
                                    <div className={styles.dropdownItem}><Link to="/profile">Profile</Link></div>
                                    <div className={styles.dropdownItem} onClick={handleLogout}>Logout</div>
                                </div>
                            )}
                        </li>
                    ) : (
                        <li className={styles.navbarItem}><Link to="/login" className={styles.navbarLink}>Login</Link></li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
