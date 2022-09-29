import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";

import axios from 'axios';



function App() {
  const [items, setItems] = useState([]);
  const [itemsDrawer, setItemsDrawer] = useState([]);
  const [itemsFavorite, setItemsFavorite] = useState(['435']);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [searchValue, setSearchValue] = useState('');





  useEffect(() => {

    // __________________Fetch

    // fetch('https://633005f6f5fda801f8d97d50.mockapi.io/items')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => setItems(json));

    // __________________Axios

    axios.get('https://633005f6f5fda801f8d97d50.mockapi.io/items')
      .then(res => setItems(res.data))

    axios.get('https://633005f6f5fda801f8d97d50.mockapi.io/cart')
      .then(res => setItemsDrawer(res.data))
  }, []);

  const onAddToCard = (obj) => {
    axios.post('https://633005f6f5fda801f8d97d50.mockapi.io/cart', obj);

    setItemsDrawer(prev => [...prev, obj]);
  }

  const onAddToFavorite = (obj) => {
    axios.post('https://633005f6f5fda801f8d97d50.mockapi.io/favorite', obj);

    setItemsFavorite(prev => [...prev, obj]);
  }


  const onRemoveItemCart = (id) => {
    axios.delete(`https://633005f6f5fda801f8d97d50.mockapi.io/cart/${id}`);

    setItemsDrawer(prev => prev.filter(item => item.id !== id));
  }





  return (
    <div className="wrapper clear" >
      {
        openDrawer ?
          <Drawer
            onRemove={onRemoveItemCart}
            items={itemsDrawer}
            onClosedDrawer={() => setOpenDrawer(false)} /> :
          null
      }

      {/* Одно и тоже !!! */}
      {/* {openDrawer && <Drawer onClosedDrawer={() => setOpenDrawer(false)} /> }*/}



      <Header onClickDrawer={() => setOpenDrawer(true)} />



      <div className="content p-40">
        <div className="d-flex justify-between  mb-40 alight-center">
          <h1 >
            {
              searchValue ?
                `Поиск по запросу: " ${searchValue} " ` :
                `Все кроссовки`
            }
          </h1>
          <div className="d-flex align-center search">
            <img
              width={20}
              height={20}
              src="/img/search.png"
              alt="search"
            />
            <input
              value={searchValue}
              maxLength={14}
              placeholder="поиск..."
              className=""
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <img
              onClick={() => setSearchValue('')}
              className="remove"
              width={20}
              height={20}
              src="/img/close.png"
              alt="remove"
            />
          </div>
        </div>
      </div>


      <div className="cards d-flex">

        {items.filter((itemTitle) => itemTitle.name.toLowerCase().includes(searchValue)).map((item, id) => (
          <Card
            key={id}
            id={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
            onFavorite={(obj) => onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCard(obj)}
          />
        ))}
      </div>
    </div >
  );
}

export default App;
