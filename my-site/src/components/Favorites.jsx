import { useContext } from "react";
import Card from "./Card";
import { AppContext } from "../App";

function Favorites({ onAddToFavorite, countFavorite }) {
    const { itemsFavorite } = useContext(AppContext);
    return (
        <div className="content p-40">
            <div className="d-flex justify-between  mb-40 alight-center">
                <h1 >Мои закладки</h1>
            </div>


            <div className="d-flex flex-wrap">Тут мои закладки</div>

            <div className="cards d-flex">
                {/* {[].length = countFavorite} */}
                {itemsFavorite.map((item, id) => (
                    <Card
                        key={id}
                        favorited={false}
                        onFavorite={onAddToFavorite}
                        {...item}

                    />
                ))}
            </div>
        </div>

    )
}

export default Favorites;