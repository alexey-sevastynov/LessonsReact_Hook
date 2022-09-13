import React from "react";
import { CustomContex } from "./Context";
import { useContext } from "react";
import Book from "./book";

function Books() {
    const { books = [] } = useContext(CustomContex);
    console.log(books);

    return (
        <div className="book">
            {books.map(book => {
                return <Book key={book.id} {...book} />
            })}
        </div>
    )
}

export default Books;