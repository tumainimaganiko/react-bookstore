import { Link } from "react-router-dom";

const BookState = () => {
    return (
       <div>
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
        <div>
            <div>
                <h2>64%</h2>
                <p>completed</p>
            </div>
            <div>
                <h3>CURRENT CHAPTER</h3>
                <h3>Chapetr 17</h3>
                <button>UPDATE PROGRESS</button>
            </div>
        </div>
       </div>
    )
}

export default BookState;