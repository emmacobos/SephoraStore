import { useEffect, useState } from 'react';
import productoMock from "../../Utils/productoMock"
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({data}) => {
    const {title, price, tone, stock, image} = data

    return(
        <div>
            <div>
                <img src={image} alt="Base" />
            </div>
            <div>
                <h3>{title}</h3>
                <p>Precio: $ {price}</p>
                <p>Tone</p>
                <p>{tone}</p>
                <ItemCount stock = {stock}/>
                <button >Comprar</button>
            </div>
        </div>
    )
}

export default ItemDetail