import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import styles from 'styles/Navbar.module.css'

const Navbar = () => {
    const display = {
        display: 'flex',
        'align-items': 'center'
    }
    return (
        <div className={styles.container}>
            <div style={display}>
            <h1 className={styles.color}>Bookstore CMS</h1>
            <ul>
                <li><NavLink to="/" className={styles.link}>Books</NavLink></li>
                <li><NavLink to="categories" className={styles.link}>Categories</NavLink></li>
            </ul>
            </div>
            <div className={styles.icon}><FaUserAlt className={styles.color} /></div>
        </div>
    )
}

export default Navbar;