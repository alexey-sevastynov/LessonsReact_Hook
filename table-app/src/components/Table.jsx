import './table.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function calcValue(value1, value2) {

    return Math.abs(+value2 - (+value1)).toFixed(1);
}

function Table({ }) {

    const [generalLight, setGeneralLight] = useState(0);
    const [noonlLight, setNoonlLight] = useState(0);
    const [afterNoonlLight, setAfterNoonlLight] = useState(0);
    const [gas, setGas] = useState(0);
    const [water, setWater] = useState(0);

    const [generalLight2, setGeneralLight2] = useState(0);
    const [noonlLight2, setNoonlLight2] = useState(0);
    const [afterNoonlLight2, setAfterNoonlLight2] = useState(0);
    const [gas2, setGas2] = useState(0);
    const [water2, setWater2] = useState(0);





    return (
        <div className="container">
            <table>
                <caption>
                    <input className='input__text' type='text' placeholder='Ваша адреса'></input>
                </caption>
                <tr>
                    <th>Дата</th>
                    <th>Світло <br /> <span className='fz16'>(загальне)</span></th>
                    <th>Світло <br /> <span className='fz16'>(день)</span></th>
                    <th>Світло <br /> <span className='fz16'>(ніч)</span></th>
                    <th>Газ <br /> <span className='fz16'>(загальний)</span></th>
                    <th>Вода <br /> <span className='fz16'>(загальна)</span></th>
                </tr>
                <tr>
                    <th></th>
                    <th>кВт</th>
                    <th>кВт</th>
                    <th>кВт</th>
                    <th>куб</th>
                    <th>куб</th>
                </tr>
                <tr>
                    <th>
                        <input className='input__data' type='data' placeholder='ввести дату'></input>
                    </th>
                    <th>
                        <input
                            className='input__value'
                            type='namber'
                            placeholder='показання лічильника'
                            onChange={(event) => setGeneralLight(event.target.value)}
                        >
                        </input>
                    </th>
                    <th>
                        <input
                            className='input__value'
                            type='namber'
                            placeholder='показання лічильника'
                            onChange={(event) => setNoonlLight(event.target.value)}
                        >
                        </input>
                    </th>
                    <th>
                        <input
                            className='input__value'
                            type='namber'
                            placeholder='показання лічильника'
                            onChange={(event) => setAfterNoonlLight(event.target.value)}
                        >
                        </input>
                    </th>
                    <th>
                        <input
                            className='input__value'
                            type='namber'
                            placeholder='показання лічильника'
                            onChange={(event) => setGas(event.target.value)}
                        >
                        </input>
                    </th>
                    <th>
                        <input
                            className='input__value'
                            type='namber'
                            placeholder='показання лічильника'
                            onChange={(event) => setWater(event.target.value)}
                        >
                        </input>
                    </th>
                </tr>
                <tr>
                    <th></th>
                    <th>{generalLight}</th>
                    <th>{noonlLight}</th>
                    <th>{afterNoonlLight}</th>
                    <th>{gas}</th>
                    <th>{water}</th>
                </tr>
                <tr>
                    <th>
                        <input className='input__data' type='data' placeholder='ввести дату'></input>
                    </th>
                    <th>
                        <input
                            className='input__value'
                            type='namber'
                            placeholder='показання лічильника'
                            onChange={(event) => setGeneralLight2(event.target.value)}
                        >
                        </input>
                    </th>
                    <th>
                        <input
                            className='input__value'
                            type='namber'
                            placeholder='показання лічильника'
                            onChange={(event) => setNoonlLight2(event.target.value)}
                        >
                        </input>
                    </th>
                    <th>
                        <input
                            className='input__value'
                            type='namber'
                            placeholder='показання лічильника'
                            onChange={(event) => setAfterNoonlLight2(event.target.value)}
                        >
                        </input>
                    </th>
                    <th>
                        <input
                            className='input__value'
                            type='namber'
                            placeholder='показання лічильника'
                            onChange={(event) => setGas2(event.target.value)}
                        >
                        </input>
                    </th>
                    <th>
                        <input
                            className='input__value'
                            type='namber'
                            placeholder='показання лічильника'
                            onChange={(event) => setWater(event.target.value)}
                        >
                        </input>
                    </th>
                </tr>
                <tr>
                    <th></th>
                    <th>{calcValue(generalLight, generalLight2)}</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>


            </table>
        </div >

    )
}

export default Table;