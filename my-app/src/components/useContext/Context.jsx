import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CustomContex = createContext();

export const Context = (props) => {
    const [books, setBooks] = useState([
        { id: 1, title: 'JS' },
        { id: 2, title: 'React' },
        { id: 3, title: 'NodeJS' },
    ])

    const addBook = (book) => {
        setBooks([book, ...books]);
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    const value = {
        books,
        addBook,
        removeBook,
    }

    return <CustomContex.Provider value={value}>
        {props.children}
    </CustomContex.Provider>
}

