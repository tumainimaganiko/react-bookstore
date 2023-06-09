import styles from 'styles/AddBook.module.css';

const AddBook = () => (
  <div className={styles.container}>
    <h3>ADD NEW BOOK</h3>
    <form action="">
      <input type="text" placeholder="Book title" />
      <select name="" id="">
        <option value="Category">Tumaini Maganiko</option>
      </select>
      <button type="button">Add book</button>
    </form>
  </div>
);

export default AddBook;
