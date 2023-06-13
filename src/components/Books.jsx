import { useSelector } from 'react-redux';
import BookState from 'components/BookState';
import AddBook from 'components/AddBook';

const Books = () => {
  const { books } = useSelector((store) => store.books);

  return (
    <div>
      {books.map((item) => (
        <BookState key={item.item_id} item={item} />
      ))}
      <AddBook />
    </div>
  );
};
export default Books;
