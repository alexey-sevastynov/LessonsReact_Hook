import React, { useState } from 'react'
import Board from './Board';

import { calculateWinner } from '../helper';

import './Game.css'

function Game() {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(board);



    const handleClick = (index) => {
        const boardCopy = [...board];
        if (winner || boardCopy[index]) return
        boardCopy[index] = xIsNext ? 'dasha' : 'lesha';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    const startNewGame = () => {
        return (
            <button className='start__btn' onClick={() => setBoard(Array(9).fill(null))}>
                New Game
            </button>
        )
    }

    return (
        <div className='wrapper'>
            {startNewGame()}
            <Board
                squares={board}
                click={handleClick} />
            <p className='game__info'>
                {winner ? 'Winner ' + winner : 'now plaing ' + (xIsNext ? 'dasha' : 'lesha')}
            </p>
        </div>
    )
}

export default Game;