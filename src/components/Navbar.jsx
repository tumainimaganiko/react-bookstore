import { NavLink } from "react-router-dom";
// import { FaPlusCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <h1>Bookstore CMS</h1>
            <ul>
                <NavLink to="/">Books</NavLink>
                <NavLink to="categories">Categories</NavLink>
            </ul>
            {/* <FaPlusCircle /> */}
        </div>
    )
}

export default Navbar;