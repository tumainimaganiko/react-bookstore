import styles from 'styles/AddBook.module.css'
const AddBook = () => {
    return (
        <div className={styles.container}>
            <h3>ADD NEW BOOK</h3>
            <form action="">
                <input type="text" placeholder="Book title" />
                <select name="" id="">
                    <option value="Category">Category</option>
                </select>
                <button>Add book</button>
            </form>
        </div>
    )
}

export default AddBook;