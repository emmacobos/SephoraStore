import ItemCount from "../ItemCount/ItemCount";

export default function Item({data}){  
    const {title, price, tone, stock, image} = data

    return(
        <div className="card-item">
            <img src={`./${image}`} alt={`./${image}`}  />

            <div className="container-cards-data">
                <h2>{title}</h2>
                <p>Precio: $ {price}</p>
                <p>tone: {tone}</p>
                <ItemCount stock = {stock}/>
                <button>Comprar</button>
            </div>
        </div>
    )
}