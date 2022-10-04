import { useState } from "react";
import ContentLoader from "react-content-loader";
import './card.scss';


function Card({
    name,
    price,
    img,
    id,
    onPlus,
    onFavorite,
    favorited = true,
    added = true,
    loading = false
}) {
    const [activePlus, setActivePlus] = useState(added);
    const [activeHeart, setActiveHeart] = useState(favorited);


    const onClickPlus = () => {
        onPlus({ id, name, price, img });
        setActivePlus(!activePlus);

    };

    const onClickFavorite = () => {
        onFavorite({ id, name, price, img });
        setActiveHeart(!activeHeart);
    };

    return (
        <div className="card">

            {loading ? (
                <ContentLoader
                    speed={2}
                    width={230}
                    height={250}
                    viewBox="0 0 230 250"
                    backgroundColor="#9c9c9c"
                    foregroundColor="#ffffff"

                >
                    <rect x="0" y="0" rx="10" ry="10" width="160" height="112" />
                    <rect x="0" y="136" rx="10" ry="10" width="188" height="33" />
                    <rect x="1" y="189" rx="10" ry="10" width="188" height="35" />
                </ContentLoader>) :
                (
                    <>
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
                                    className={activePlus ? "btn-active" : "btn-opacity"}
                                    onClick={onClickPlus}
                                    width="32"
                                    height="32"
                                    src={activePlus ? '/img/green-plus.png' : '/img/plus.png'}
                                    alt="plus"

                                />
                            </div>
                        </div>
                    </>

                )
            }


        </div>
    )
}

export default Card;