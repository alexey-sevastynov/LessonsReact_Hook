import { Link } from 'react-router-dom';



function Header({ onClickDrawer, countFavorite, countDraver }) {
    return (

        <>
            <header className="d-flex justify-between align-center p-40">

                <div className="d-flex align-center">
                    <Link to="/">
                        <img
                            className='cu-p'
                            width='40'
                            height='40'
                            src="img/logo192.png"
                            alt="logo" />
                    </Link>



                    <div className="headerInfo">
                        <h3 className="text-uppercase">react snakers</h3>
                        <p>магазин лучших кроссовок</p>
                    </div>
                </div>

                <div >
                    <ul className="d-flex" >
                        <li
                            onClick={onClickDrawer}
                            className=" drawer__icons mr-30 cu-p">
                            <span className='drawer__count'>{countDraver}</span>
                            <img width='18' height='18' src="img/shopping-cart.png" alt="bascet" />
                            <span>0 uah</span>
                        </li>
                        <li className='favorite__icons'>
                            <span className='favorite__circle'>{countFavorite}</span>
                            <Link to="/test">
                                <img

                                    className="mr-20 cu-p"
                                    width='18'
                                    height='18'
                                    src="img/favorite.png"
                                    alt="favorite" />
                            </Link>


                        </li>
                        <li>
                            <img width='18' height='18' src="img/user.png" alt="user" />
                        </li>
                    </ul>
                </div>
            </header>

        </>

    )
}
export default Header;