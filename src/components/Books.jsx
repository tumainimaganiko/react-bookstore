import BookDetails from "components/BookDetails";
import AddBook from "components/AddBook";

const Books = () => {
    return (
        <div>
            <BookDetails category={'Action'} title={'The Hunger Games'} author={'Suzanne Collins'} percentage={'98'}/>
            <BookDetails category={'Science Fiction'} title={'Dune'} author={'Frank Herbert'} percentage={'32'}/>
            <BookDetails category={'Economy'} title={'Capitalism'} author={'Suzanne Collins'} percentage={'12'}/>
            <AddBook />
        </div>
    )
}

export default Books;