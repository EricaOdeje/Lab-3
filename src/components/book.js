import BookItem from "./bookItem";

    {/*I used props as an argument to get data from read.js.*/}
function Book(props){
    {/*I used props to pass data from one component to another.*/}
    return props.myBook.map( 
            {/*The map function is used to create a new aray.*/}
        (book) => {
            return <BookItem mybook={book} key={book.isbn}></BookItem>
        }
    );
    }
    
    export default Book;
