import PropTypes from 'prop-types';
import styles from 'styles/BookDetails.module.css';

const BookState = ({ item }) => {
  const {
    category, title, author, percentage,
  } = item;
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h4>{category}</h4>
        <h3>{title}</h3>
        <p>{author}</p>
        <ul>
          <li><a href="/">Comments</a></li>
          <li><a href="/">Remove</a></li>
          <li><a href="/">Edit</a></li>
        </ul>
      </div>
      <div className={styles.progress}>
        <div>
          <h2>
            {percentage}
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
    percentage: PropTypes.string.isRequired,
  }).isRequired,
};
