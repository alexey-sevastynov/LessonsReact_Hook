function GoodsItem(props) {
    const { id, name, description, full_background } = props;

    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card" id={id} >
                    <div className="card-image">
                        <img src={full_background} alt='#' />
                        <span className="card-title">{name}</span>

                    </div>
                    <div className="card-content">
                        <p>{description}</p>
                    </div>
                    <div class="card-action">
                        <button className="btn">Buy</button>
                        <span className="right">4000 $</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { GoodsItem };