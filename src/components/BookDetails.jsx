import { Link } from "react-router-dom";

const BookState = () => {
    return (
        <div>
            <h3>Action</h3>
            <h2>The Hunger Games</h2>
            <h2>Suzanne Collins</h2>
            <ul>
                <li><Link to="comments">Comments</Link></li>
                <li><Link to="remove">Remove</Link></li>
                <li><Link to="edit">Edit</Link></li>
            </ul>
        </div>
    )
}

export default BookState;