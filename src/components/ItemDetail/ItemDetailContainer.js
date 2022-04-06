import { useState, useEffect } from "react";
import ItemDetail from './ItemDetail'
import containerProductos from "../../Utils/containerProductos"


const ItemDetailContainer = () => {
    const [dataProducto, setDataProducto] = useState({})


    const [productos, setProducts] = useState([])
    const obtenerProductos = () =>{
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                return resolve(containerProductos);
            }, 2000);
        })
    }

    useEffect( () =>{
        obtenerProductos().then ( (data) =>{
            setProducts(data)
        }).finally( () =>{
            console.log("Termino la llamada")
        })
    }, [])

    return (
        <>
        
            <ItemDetail data={dataProducto}/>
        </>
    )
}

export default ItemDetailContainer