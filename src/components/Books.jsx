import { useDispatch, useSelector } from 'react-redux';
import BookState from 'components/BookState';
import AddBook from 'components/AddBook';
import { fetchBooks } from 'redux/books/booksSlice';
import { useEffect } from 'react';

const Books = () => {
  const { books } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      {books.map((item) => (
        <BookState
          key={item.item_id}
          title={item.title}
          category={item.category}
          author={item.author}
          id={item.item_id}
        />
      ))}
      <AddBook />
    </div>
  );
};
export default Books;
