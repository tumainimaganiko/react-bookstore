import { useSelector } from 'react-redux';
import BookState from 'components/BookState';
import AddBook from 'components/AddBook';

const Books = () => {
  const { books } = useSelector((store) => store.books);
  // const data = [
  //   {
  //     id: 1,
  //     category: 'Action',
  //     title: 'The Hunger Games',
  //     author: 'Suzanne Collins',
  //     percentage: '98',
  //   },
  //   {
  //     id: 2,
  //     category: 'Science Fiction',
  //     title: 'Dune',
  //     author: 'Frank Herbert',
  //     percentage: '32',
  //   },
  //   {
  //     id: 3,
  //     category: 'Economy',
  //     title: 'Capitalism',
  //     author: 'Suzanne Collins',
  //     percentage: '12',
  //   },
  // ];

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
