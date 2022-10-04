import Card from "../components/Card";

function Home({ items,
    searchValue,
    setSearchValue,
    onAddToCard,
    onAddToFavorite,
    itemsDrawer,
    isLoading }) {

    const renderItems = () => {
        const filterItems = items.filter((itemTitle) => itemTitle.name.toLowerCase().includes(searchValue));

        return ((isLoading ? [...Array(5)] : filterItems).map((item, id) => (
            <Card
                key={id}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCard(obj)}
                added={itemsDrawer.some((obj) => Number(obj.id) === Number(item.id))}
                loading={isLoading}
                {...item}
            />
        ))
        )
    }
    return (
        <>
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

                {renderItems()
                /* {items.filter((itemTitle) => itemTitle.name.toLowerCase().includes(searchValue)).map((item, id) => (
                    <Card
                        key={id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        img={item.img}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onPlus={(obj) => onAddToCard(obj)}
                        added={itemsDrawer.some((obj) => Number(obj.id) === Number(item.id))}
                    />
                ))} */}
            </div>
        </>

    )
}

export default Home;