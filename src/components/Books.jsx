import { useDispatch, useSelector } from 'react-redux';
import BookState from 'components/BookState';
import AddBook from 'components/AddBook';
import { fetchBooks } from 'redux/books/booksSlice';
import { useEffect } from 'react';

const Books = () => {
  const { books } = useSelector((store) => store.books);
  const myBooks = Object.keys(books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      {myBooks.map((item) => {
        const book = books[item][0];
        return (
          <>
            <BookState
              key={item}
              title={book.title}
              category={book.category}
              author={book.author}
              id={item}
            />
          </>
        );
      })}
      <AddBook />
    </div>
  );
};
export default Books;
