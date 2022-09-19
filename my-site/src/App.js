

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>
          <div className="cartItem">
            <img width={160} height={112} src="/img/sneakers/1.png" alt="sneakers" />
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>12000 uah</b>
            </div>
          </div>
        </div>
      </div>



      <header className="d-flex justify-between align-center p-40">

        <div className="d-flex align-center">
          <img width='40' height='40' src="img/logo192.png" alt="logo" />
          <div className="headerInfo">
            <h3 className="text-uppercase">react snakers</h3>
            <p>магазин лучших кроссовок</p>
          </div>
        </div>

        <div >
          <ul className="d-flex" >
            <li className="mr-30">
              <img width='18' height='18' src="img/shopping-cart.png" alt="bascet" />
              <span>0 uah</span>
            </li>
            <li>
              <img width='18' height='18' src="img/user.png" alt="user" />
            </li>
          </ul>
        </div>

      </header>

      <div className="content p-40">
        <div className="d-flex justify-between  mb-40 alight-center">
          <h1 >Все кроссовки</h1>
          <div className="d-flex align-center search">
            <img width={20} height={20} src="/img/search.png" alt="search" />
            <input placeholder="поиск..." className="" type="text" />
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className="card">
          <div className="favorite">
            <img width={20} height={20} src="/img/heart.png" alt="heart" />
          </div>
          <img className="card__img" width={160} height={112} src="/img/sneakers/1.png" alt="img" />
          <p className="card__text">Мужские кроссовки <br /> Nike Blazer Mid Source</p>
          <div className="d-flex justify-between align-center" >
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>12000 uah</b>
            </div>
            <div className="btn">
              <img width="32" height="32" src="/img/plus.png" alt="plus" />
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card__img" width={160} height={112} src="/img/sneakers/2.png" alt="img" />
          <p className="card__text">Мужские кроссовки <br /> Nike Blazer Mid Source</p>
          <div className="d-flex justify-between align-center" >
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>12000 uah</b>
            </div>
            <div className="btn">
              <img width="32" height="32" src="/img/plus.png" alt="plus" />
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card__img" width={160} height={112} src="/img/sneakers/3.png" alt="img" />
          <p className="card__text">Мужские кроссовки <br /> Nike Blazer Mid Source</p>
          <div className="d-flex justify-between align-center" >
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>12000 uah</b>
            </div>
            <div className="btn">
              <img width="32" height="32" src="/img/plus.png" alt="plus" />
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card__img" width={160} height={112} src="/img/sneakers/4.png" alt="img" />
          <p className="card__text">Мужские кроссовки <br /> Nike Blazer Mid Source</p>
          <div className="d-flex justify-between align-center" >
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>12000 uah</b>
            </div>
            <div className="btn">
              <img width="32" height="32" src="/img/plus.png" alt="plus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
