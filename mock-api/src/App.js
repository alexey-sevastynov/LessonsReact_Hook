import react, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';

import Post from './components/Post/Post';
import Get from './components/Get/Get';
import { createContext } from 'react';

export const AppContext = createContext({});

function App() {
  const [nameRecipe, setNameRecipe] = useState('');
  const [nameStage, setNameStage] = useState('');
  const [nameProduct, setNameProduct] = useState('');
  const [priceProduct, setPriceProduct] = useState(0);
  const [amountProduct, setAmountProduct] = useState(0);
  const [amountRecipeProduct, setAmountRecipeProduct] = useState(0);

  const [items, setItems] = useState([]);
  const [itemsStage, setItemsStage] = useState([]);

  const obj = {
    nameProduct: nameProduct,
    priceProduct: priceProduct,
    amountProduct: amountProduct,
    amountRecipeProduct: amountRecipeProduct
  };

  const objStage = {
    nameStage: nameStage,
    nameRecipe: nameRecipe
  };

  const onClickSubmit = () => {
    axios.post('https://633005f6f5fda801f8d97d50.mockapi.io/rt ', obj);
  }

  const onClickStage = () => {
    axios.post('https://633005f6f5fda801f8d97d50.mockapi.io/stage ', objStage);
  }


  useEffect(() => {
    axios.get('https://633005f6f5fda801f8d97d50.mockapi.io/rt')
      .then(res => setItems(res.data));
  }, [])

  useEffect(() => {
    axios.get('https://633005f6f5fda801f8d97d50.mockapi.io/stage')
      .then(res => setItemsStage(res.data));
  }, [])


  return (
    <AppContext.Provider value={
      {
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
        onClickStage,
        items,
        itemsStage
      }
    } >
      <div className="App">
        <Post />
        <Get />
      </div>
    </AppContext.Provider>

  );
}

export default App;
