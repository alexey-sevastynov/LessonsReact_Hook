import React, { useState } from 'react';

function Clicker() {

    const [clicker, setClicker] = useState(0);

    const increment = () => {
        setClicker(clicker + 1);
    }

    const dicrement = () => {
        setClicker(clicker - 1);
    }

    return (
        <div className="clicker">
            <button className=' btn' onClick={dicrement}>-</button>
            <span>
                <h1>{clicker}</h1>
            </span>
            <button className=' btn' onClick={increment}>+</button>
        </div>
    );
}

export default Clicker;