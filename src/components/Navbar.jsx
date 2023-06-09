import { NavLink } from "react-router-dom";
import styles from 'styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <h1>Bookstore CMS</h1>
            <ul>
                <li><NavLink to="/" className={styles.link}>Books</NavLink></li>
                <li><NavLink to="categories" className={styles.link}>Categories</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;