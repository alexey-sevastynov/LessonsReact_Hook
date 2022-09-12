import React from "react";

import './Board.css';
import Square from "./Square";

function Board({ squares, click }) {

    return (
        <div className="board">
            {squares.map((elem, index) => (
                <Square key={index} value={elem} onClick={() => click(index)} />
            ))}
        </div>
    )
}

export default Board;