import { Link } from "react-router-dom";
import styles from 'styles/BookDetails.module.css'
const BookState = ({category, title, author, percentage}) => {
    return (
       <div className={styles.container}>
         <div className={styles.details}>
            <h4>{category}</h4>
            <h3>{title}</h3>
            <p>{author}</p>
            <ul>
                <li><Link to="">Comments</Link></li>
                <li><Link to="">Remove</Link></li>
                <li><Link to="">Edit</Link></li>
            </ul>
        </div>
        <div className={styles.progress}>
            <div>
                <h2>{percentage}%</h2>
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