import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from 'redux/books/booksSlice';
import styles from 'styles/AddBook.module.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      title, author, item_id: uuidv4(), category: 'Fiction',
    }));
  };
  return (
    <div className={styles.container}>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="title" value={title} placeholder="Book title" onChange={handleTitle} />
        <input type="text" name="author" value={author} placeholder="Author" onChange={handleAuthor} />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
