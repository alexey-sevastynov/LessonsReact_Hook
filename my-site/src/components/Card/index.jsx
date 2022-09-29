import { useState } from "react";
import './card.scss';


function Card({ name, price, img, id, onPlus, onFavorite }) {
    const [activePlus, setActivePlus] = useState(true);
    const [activeHeart, setActiveHeart] = useState(true);

    const onClickPlus = () => {

        setActivePlus(!activePlus);
        if (activePlus === true) {
            onPlus({ name, price, img });
        }
    };

    const onClickFavorite = () => {
        onFavorite({ name, price, img });
        setActiveHeart(!activePlus);
    };

    return (
        <div className="card">
            <div className="favorite">
                <img
                    onClick={onClickFavorite}
                    width={20}
                    height={20}
                    src={activeHeart ? '/img/heart.png' : '/img/red-heart.png'}
                    alt="heart"
                />
            </div>
            <img
                className="card__img"
                width={160}
                height={112}
                src={img}
                alt="img" />
            <p className="card__text">Мужские кроссовки <br /> {name}</p>
            <div className="d-flex justify-between align-center" >
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>{price}</b>
                </div>
                <div className="btn">
                    <img
                        className={activePlus ? "btn-opacity" : "btn-active"}
                        onClick={onClickPlus}
                        width="32"
                        height="32"
                        src={activePlus ? '/img/plus.png' : '/img/green-plus.png'}
                        alt="plus"

                    />
                </div>
            </div>
        </div>
    )
}

export default Card;