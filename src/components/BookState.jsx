import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from 'redux/books/booksSlice';
import styles from 'styles/BookDetails.module.css';

const BookState = ({ item }) => {
  const {
    category, title, author, item_id,
  } = item;

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h4>{category}</h4>
        <h3>{title}</h3>
        <p>{author}</p>
        <ul>
          <li><button type="button">Comments</button></li>
          <li><button type="button" onClick={() => dispatch(removeBook(item_id))}>Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      <div className={styles.progress}>
        <div>
          <h2>
            80
            %
          </h2>
          <p>completed</p>
        </div>
        <div className={styles.updateProgress}>
          <h3>CURRENT CHAPTER</h3>
          <h3>Chapter 17</h3>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
      {' '}

    </div>
  );
};

export default BookState;

BookState.propTypes = {
  item: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
