import BookState from 'components/BookState';
import AddBook from 'components/AddBook';

const Books = () => (
  <div>
    <BookState category="Action" title="The Hunger Games" author="Suzanne Collins" percentage="98" />
    <BookState category="Science Fiction" title="Dune" author="Frank Herbert" percentage="32" />
    <BookState category="Economy" title="Capitalism" author="Suzanne Collins" percentage="12" />
    <AddBook />
  </div>
);

export default Books;
