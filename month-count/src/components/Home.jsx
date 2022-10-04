import { useEffect, useState } from 'react';
import axios from 'axios';

import './home.css';


function Home() {

    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [light, setLight] = useState(0);
    const [gas, setGas] = useState(0);
    const [water, setWater] = useState(0);

    const [cheluskinaItems, setCheluskinaItems] = useState([]);

    const [hide, setHide] = useState(false);

    const objCheluskina = {
        year: year,
        month: month,
        light: light,
        gas: gas,
        water: water
    };

    let years = [];
    for (let currentYear = 2021; currentYear <= 2032; currentYear++) {
        years.push(currentYear);
    }

    let months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Травень', 'Червень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];


    const postMockApi = () => {
        window.location.reload();
        axios.post('https://633005f6f5fda801f8d97d50.mockapi.io/cheluskina', objCheluskina);

    }

    useEffect(() => {
        axios.get('https://633005f6f5fda801f8d97d50.mockapi.io/cheluskina')
            .then(res => setCheluskinaItems(res.data));
    }, [])



    return (
        <div className='container'>
            <button
                onClick={() => setHide(!hide)}
                className='btn'>Показання</button>

            {hide ?
                (<table>
                    <tr >
                        <th className='tr__table'>Рік</th>
                        <th className='tr__table'>Місяць</th>
                        <th className='tr__table'>Показання світла</th>
                        <th className='tr__table'>Показання газу</th>
                        <th className='tr__table'>Показання води</th>
                    </tr>

                    {cheluskinaItems.map((item, id) => (
                        <tr key={id}>
                            <th>{item.year}</th>
                            <th>{item.month}</th>
                            <th>{item.light}</th>
                            <th>{item.gas}</th>
                            <th>{item.water}</th>
                        </tr>
                    ))}


                </table>
                )
                : (
                    <>
                        <table>
                            <tr >
                                <th className='tr__table'>Ведіть рік!</th>
                                <th className='tr__table'>Ведіть місяць!</th>
                                <th className='tr__table'>Ведіть показання світла!</th>
                                <th className='tr__table'>Ведіть показання газу!</th>
                                <th className='tr__table'>Ведіть показання води!</th>
                            </tr>
                            <tr>
                                <th>
                                    <select

                                        onChange={(event) => setYear(event.target.value)}>
                                        {years.map((year, id) => {
                                            return <option key={id} value={year}>{year}</option>
                                        })}

                                    </select>
                                </th>
                                <th>
                                    <select

                                        onChange={(event) => setMonth(event.target.value)}>
                                        {months.map((month, id) => (
                                            <option key={id} value={month}>{month}</option>
                                        ))}
                                    </select>
                                </th>
                                <th>
                                    <input
                                        value={light}
                                        type="number"
                                        placeholder='світло'
                                        onChange={(e) => setLight(e.target.value)} />

                                </th>
                                <th>
                                    <input
                                        value={gas}
                                        type="number"
                                        placeholder='газ'
                                        onChange={(e) => setGas(e.target.value)} />
                                </th>
                                <th>
                                    <input
                                        value={water}
                                        type="number"
                                        placeholder='вода'
                                        onChange={(e) => setWater(e.target.value)} />
                                </th>
                            </tr>

                        </table>
                        <button
                            type='submit'
                            className='btn btn__red'
                            onClick={postMockApi}
                        >Відправити !</button>
                    </>


                )}





        </div>
    )
}

export default Home;