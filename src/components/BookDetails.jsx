import { Link } from "react-router-dom";
import styles from 'styles/BookDetails.module.css'
const BookState = () => {
    return (
       <div className={styles.container}>
         <div className={styles.details}>
            <h4>Action</h4>
            <h3>The Hunger Games</h3>
            <p>Suzanne Collins</p>
            <ul>
                <li><Link to="comments">Comments</Link></li>
                <li><Link to="remove">Remove</Link></li>
                <li><Link to="edit">Edit</Link></li>
            </ul>
        </div>
        <div className={styles.progress}>
            <div>
                <h2>64%</h2>
                <p>completed</p>
            </div>
            <div className={styles.updateProgress}>
                <h3>CURRENT CHAPTER</h3>
                <h3>Chapter 17</h3>
                <button>UPDATE PROGRESS</button>
            </div>
        </div>
       </div>
    )
}

export default BookState;