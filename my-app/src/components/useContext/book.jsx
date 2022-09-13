import React from "react";
import { useContext } from "react";
import { CustomContex } from "./Context";


function Book(props) {
    const { removeBook } = useContext(CustomContex);
    return <h2 onClick={() => removeBook(props.id)}>{props.title}</h2>
}

export default Book;