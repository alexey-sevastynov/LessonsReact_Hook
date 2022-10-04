function Drawer({ onClosedDrawer, items = [], onRemove, countDraver }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <div className="drawerMain d-flex justify-between alighn-items">
                    <h2>Корзина</h2>
                    <img
                        onClick={onClosedDrawer}
                        className="img__closes"
                        width={30}
                        height={30}
                        src="/img/close.png"
                        alt="close"
                    />
                </div>



                {items.length > 0 ?
                    (<div className="drawer">
                        <div className="drawerMain d-flex justify-between alighn-items">
                            <h2>Корзина</h2>
                            <img
                                onClick={onClosedDrawer}
                                className="img__closes"
                                width={30}
                                height={30}
                                src="/img/close.png"
                                alt="close" />
                        </div>
                        <div className="cartItems">
                            {items.map((obj) => (
                                <div key={obj.id} className="cartItem d-flex align-center">
                                    <img className="mr-20" width={140} height={92} src={obj.img} alt="sneakers" />
                                    <div className="mr-20">
                                        <p className="card__text mb-5">{obj.name}</p>
                                        <b>{obj.price}</b>
                                    </div>
                                    <img
                                        onClick={() => onRemove(obj.id)}
                                        className="img__closes"
                                        width={30}
                                        height={30}
                                        src="/img/close.png"
                                        alt="close" />
                                </div>
                            ))}
                        </div>

                        <div className="cartTotalBlock">
                            <div className="drawer-items">
                                <ul >
                                    <li className="d-flex justify-between mt-20">
                                        <span>Итого:</span>
                                        <div className="dashed"></div>
                                        <b>12000 uah</b>
                                    </li>
                                    <li className="d-flex justify-between mt-20">
                                        <span>Налог 5%:</span>
                                        <div className="dashed"></div>
                                        <b>600 uah</b>
                                    </li>
                                </ul>
                            </div>

                            <button className="blueButton">Оформить заказ</button>
                        </div>
                    </div>) :
                    (
                        <div className="overlay">
                            <div className="drawer">
                                <div className="drawerMain d-flex justify-between alighn-items">
                                    <h2>Корзина</h2>
                                    <img
                                        onClick={onClosedDrawer}
                                        className="img__closes"
                                        width={30}
                                        height={30}
                                        src="/img/close.png"
                                        alt="close" />
                                </div>

                                <div className="drawer__empty">
                                    <img
                                        width={250}
                                        src="./img/driwersEmpty.png"
                                        alt="drawerEmpty" >
                                    </img>
                                    <h2>Корзина пустая</h2>
                                    <p>Добавь хотя бы одну пару кросовок, чтобы сделать заказ</p>
                                    <button onClick={onClosedDrawer}>Вернуться назад</button>
                                </div>
                            </div>
                        </div>
                    )}

               





            </div>
        </div>
    )

}

export default Drawer;