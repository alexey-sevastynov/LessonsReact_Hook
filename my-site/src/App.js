// [
//   {
//    "id": "1",
//    "name": "adidas",
//    "price": "1200 uah",
//    "img": "/img/sneakers/1.png"
//   },
//   {
//    "id": "2",
//    "name": "nike",
//    "price": "1500 uah",
//    "img": "/img/sneakers/2.png"
//   },
//   {
//    "id": "3",
//    "name": "aditdas",
//    "price": "16200 uah",
//    "img": "/img/sneakers/3.png"
//   },
//   {
//    "id": "4",
//    "name": "nitke",
//    "price": "15600 uah",
//    "img": "/img/sneakers/4.png"
//   }
//  ]



import axios from 'axios';
import { useEffect, useState, createContext } from "react";
import { Routes, Route } from 'react-router-dom';

import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Favorites from './components/Favorites';
import Home from './pages/Home';


// create object Contex
export const AppContext = createContext({});

console.log(AppContext);

function App() {


  const [items, setItems] = useState([]);
  const [itemsDrawer, setItemsDrawer] = useState([]);
  const [itemsFavorite, setItemsFavorite] = useState(['']);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [countFavorite, setCountFavorite] = useState(0);
  const [countDraver, setCountDriver] = useState(0);


  // console.log(`itemsDrawer: ${JSON.stringify(itemsDrawer)}`);
  useEffect(() => {

    // __________________Fetch

    // fetch('https://633005f6f5fda801f8d97d50.mockapi.io/items')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => setItems(json));

    // __________________Axios

    //   axios.get('https://633005f6f5fda801f8d97d50.mockapi.io/items')
    //   .then(res => );

    // axios.get('https://633005f6f5fda801f8d97d50.mockapi.io/cart')
    //   .then(res => setItemsDrawer(res.data));

    // axios.get('https://633005f6f5fda801f8d97d50.mockapi.io/favorite')
    //   .then(res => setItemsFavorite(res.data));

    // __________________Axios async/await ()

    async function fetchData() {
      // setIsLoading(true); // для загрузки карточек
      const itemsResponse = await axios.get('https://633005f6f5fda801f8d97d50.mockapi.io/items');
      const favoriteResponse = await axios.get('https://633005f6f5fda801f8d97d50.mockapi.io/favorite');
      const cartResponse = await axios.get('https://633005f6f5fda801f8d97d50.mockapi.io/cart');

      // последовательность функций выполнения

      setItems(itemsResponse.data);
      setItemsFavorite(favoriteResponse.data);
      setItemsDrawer(cartResponse.data);

      setIsLoading(false); // загрузка закончилась

    }

    fetchData();


  }, []);




  const onAddToCard = (obj) => {
    try {
      if (itemsDrawer.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://633005f6f5fda801f8d97d50.mockapi.io/cart/${obj.id}`);
        setItemsDrawer((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
        console.log('delete obj');
      } else {
        axios.post('https://633005f6f5fda801f8d97d50.mockapi.io/cart', obj);

        setItemsDrawer(prev => [...prev, obj]);
        console.log('post obj');
      }

    } catch (err) {
      alert('не удалось добавить в корзину');
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      console.log(obj);
      if (itemsFavorite.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://633005f6f5fda801f8d97d50.mockapi.io/favorite/${obj.id}`);
        setItemsFavorite((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
        console.log('delete obj');
        setCountFavorite(countFavorite - 1);

      } else {

        const { data } = await axios.post('https://633005f6f5fda801f8d97d50.mockapi.io/favorite', obj);

        setItemsFavorite(prev => [...prev, data]);
        console.log('post obj');
        setCountFavorite(countFavorite + 1);
      }

    } catch (err) {
      alert('не удалось добавить в фавориты');
    }
  }

  const onRemoveItemCart = (id) => {
    axios.delete(`https://633005f6f5fda801f8d97d50.mockapi.io/cart/${id}`);

    setItemsDrawer(prev => prev.filter(item => item.id !== id));
  }

  return (
    <AppContext.Provider value={{ items, itemsFavorite }}>
      <div className="wrapper clear" >
        {
          openDrawer ?
            <Drawer
              onRemove={onRemoveItemCart}
              items={itemsDrawer}
              onClosedDrawer={() => setOpenDrawer(false)}

            /> :
            null
        }

        {/* Одно и тоже !!! */}
        {/* {openDrawer && <Drawer onClosedDrawer={() => setOpenDrawer(false)} /> }*/}

        <Header
          onClickDrawer={() => setOpenDrawer(true)}
          changeCountFavorite={() => setCountFavorite(Number(countFavorite) + 1)}
          countFavorite={countFavorite}
          countDraver={countDraver}
        />

        <Routes>
          <Route path='/' element={<Home
            items={items}
            itemsDrawer={itemsDrawer}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onAddToCard={onAddToCard}
            onAddToFavorite={onAddToFavorite}
            countDraver={countDraver}
            setCountDraver={setCountDriver}
            isLoading={isLoading}


          />} />
          <Route path='/test' element={
            <Favorites onAddToFavorite={onAddToFavorite} countFavorite={countFavorite} />}
          />
        </Routes>
      </div >
    </AppContext.Provider>
  );
}

export default App;
