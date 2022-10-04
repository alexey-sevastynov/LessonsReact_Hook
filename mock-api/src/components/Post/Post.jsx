import './post.css';
import { AppContext } from '../../App';
import { useContext } from 'react';

function Post() {
    const {
        nameRecipe,
        nameStage,
        nameProduct,
        priceProduct,
        amountProduct,
        amountRecipeProduct,
        setNameRecipe,
        setNameStage,
        setNameProduct,
        setPriceProduct,
        setAmountProduct,
        setAmountRecipeProduct,
        onClickSubmit,
        onClickStage } = useContext(AppContext);

    return (
        <div className='container'>
            <h1>Post Table</h1>
            <p className='text'>Ведите названия рецепта</p>
            <input
                className='name'
                type="text"
                value={nameRecipe}
                onChange={(e) => setNameRecipe(e.target.value)} />

            <p className='text'>Ведите названия этапа</p>
            <input
                className='name'
                type="text"
                value={nameStage}
                onChange={(e) => setNameStage(e.target.value)} />

            <button onClick={onClickStage}>submit</button>

            <p className='text'>Ведите названия продукта</p>
            <input
                className='name'
                type="text"
                value={nameProduct}
                onChange={(e) => setNameProduct(e.target.value)} />

            <p className='text'>Ведите цену продукта</p>
            <input
                className='name'
                type="number"
                value={priceProduct}
                onChange={(e) => setPriceProduct(e.target.value)} />

            <p className='text'>Ведите количество в продукте</p>
            <input
                className='name'
                type="number"
                value={amountProduct}
                onChange={(e) => setAmountProduct(e.target.value)} />

            <p className='text'>Ведите количество в рецепте</p>
            <input
                className='name'
                type="number"
                value={amountRecipeProduct}
                onChange={(e) => setAmountRecipeProduct(e.target.value)} />

            <button onClick={onClickSubmit}>submit</button>
        </div>
    )
}

export default Post;