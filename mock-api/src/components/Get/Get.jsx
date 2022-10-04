import './get.css';
import { useContext } from 'react';

import { AppContext } from '../../App';
import { useState } from 'react';

function Get() {
    const {
        nameRecipe,
        nameStage,
        nameProduct,
        priceProduct,
        amountProduct,
        amountRecipeProduct,
        items,
        itemsStage } = useContext(AppContext);

    const [result, setResult] = useState(0);

    return (
        <div className='container'>
            <h1>Get table</h1>
            <div className='table'>Названия рецепта {nameRecipe}</div>
            {itemsStage.map((item, id) => (
                <>

                    <div className='name__stage'>Этап: {item.nameStage}</div>
                </>
            ))}


            <div className='flex'>
                <div className="name__product">Имя продукта</div>
                <div className="price__product">Цена продукта</div>
                <div className="amount__product">Количество грамм в продукте</div>
                <div className="amount__recipe-product">Количество грамм в рецепте</div>
                <div className="result">Результат</div>
            </div>

            {items.map((item, id) => (
                <div key={id} className='flex'>
                    <div className="name__product">{item.nameProduct}</div>
                    <div className="price__product">{item.priceProduct}</div>
                    <div className="amount__product">{item.amountProduct}</div>
                    <div className="amount__recipe-product">{item.amountRecipeProduct}</div>
                    <div className="result">Результат</div>
                </div>
            ))}

        </div>
    )
}

export default Get;
