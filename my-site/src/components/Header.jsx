function Header({ onClickDrawer }) {
    return (
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
                    <li
                        onClick={onClickDrawer}
                        className="mr-30 cu-p">
                        <img width='18' height='18' src="img/shopping-cart.png" alt="bascet" />
                        <span>0 uah</span>
                    </li>
                    <li>
                        <img width='18' height='18' src="img/user.png" alt="user" />
                    </li>
                </ul>
            </div>

        </header>
    )
}
export default Header;