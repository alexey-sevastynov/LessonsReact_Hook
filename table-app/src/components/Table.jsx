import './table.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Table() {

    const [APIdata, setAPIdata] = useState([]);

    useEffect(() => {
        axios.get('https://sheet.best/api/sheets/adfc2388-5ec2-47e3-b902-cb1e4c084324')
            .then((incominData) => {
                setAPIdata(incominData.data);
            })
    }, []);


    return (
        <div className='table'>
            <table>
                <tr>
                    <th>Рік</th>
                    <th>Місяць</th>
                    <th>Показання світла</th>
                    <th>Показання газу</th>
                    <th>Показання води</th>
                    <th></th>
                </tr>

                {APIdata.map((data) => {
                    return (
                        <tr>
                            <th >{data.year}</th>
                            <th >{data.month}</th>
                            <th >{data.light}</th>
                            <th >{data.gas}</th>
                            <th >{data.water}</th>
                            <th ></th>
                        </tr>
                    )
                })
                }
            </table>
        </div>
    )
}

export default Table;