import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import containerProductos from '../../Utils/containerProductos'
import Item from "../Item/Item";

const ItemDetailContainer = () => {
    const [dataProducto, setDataProducto] = useState([])

    const obtenerProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                return resolve(containerProductos);
            })
            }, 1000)
    };

    useEffect( () => {
        obtenerProductos().then( (dataProducto) => {
            setDataProducto(dataProducto);
        })
    }, []);
    const {id} = dataProducto
    return (
        <div>
            
            <ItemDetail data= {ItemDetail} key={id}/>
        </div>
    )
}

export default ItemDetailContainer