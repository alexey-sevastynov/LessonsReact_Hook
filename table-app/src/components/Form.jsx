import './Form.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';




function Forms(props) {
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [light, setLight] = useState('');
    const [gas, setGas] = useState('');
    const [water, setWater] = useState('');

    let years = [];
    for (let currentYear = 2022; currentYear <= 2032; currentYear++) {
        years.push(currentYear);
    }

    let months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Травень', 'Червень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

    const onSubmit = (e) => {
        e.preventDefault();
        if (year === '') {
            alert('Ведіть рік!');
            return
        }
        if (month === '') {
            alert('Ведіть місяць!');
            return
        }
        if (light === '') {
            alert('Ведіть показання світла!');
            return
        }
        if (water === '') {
            alert('Ведіть показання води!');
            return
        }
        if (gas === '') {
            alert('Ведіть показання газу!');
            return
        }
        axios.post('https://sheet.best/api/sheets/adfc2388-5ec2-47e3-b902-cb1e4c084324', {
            month, year, light, gas, water
        }).then(response => console.log(response));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(month, year, light, gas, water);
    }

    return (
        <div className="App">
            <h1>Челюськіна 1 кв.12</h1>
            <form onSubmit={handleSubmit} className='app-form'>
                <div className="flex">
                    <div className="years">
                        <h4>Вибери рік</h4>
                        <select

                            onChange={(event) => setYear(event.target.value)}>
                            {years.map((year, id) => {
                                return <option key={id} value={year}>{year}</option>
                            })}

                        </select>
                    </div>
                    <div className="month">
                        <h4>Вибери місяць</h4>
                        <select

                            onChange={(event) => setMonth(event.target.value)}>
                            {months.map((month, id) => (
                                <option key={id} value={month}>{month}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex">
                    <div className="light">
                        <h4>Показання Світлу</h4>
                        <input
                            value={light}
                            type="number"
                            placeholder='світло'
                            onChange={(e) => setLight(e.target.value)}

                        />
                    </div>

                    <div className="gas">
                        <h4>Показання Газу</h4>
                        <input
                            value={gas}
                            type="number"
                            placeholder='газ'
                            onChange={(e) => setGas(e.target.value)}
                        />
                    </div>

                    <div className="water">
                        <h4>Показання Води</h4>
                        <input
                            value={water}
                            type="number"
                            placeholder='вода'
                            onChange={(e) => setWater(e.target.value)}

                        />
                    </div>
                </div>

                <button className='btn'
                    type='submit'
                    onClick={onSubmit}

                >Відправити</button>
            </form>
        </div>
    )
}

export default Forms;
