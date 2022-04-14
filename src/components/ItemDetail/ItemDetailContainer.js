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
            }, 1000);
        })
    }

    useEffect( () => {
        obtenerProductos().then( (producto) => {
            setDataProducto(producto)
            //console.log("Llamada al mock:", producto)
        }).finally( () => {
            console.log("Termino la llamada")
        })
    }, [])

    return (
        <>
        <div>
            <ItemDetail data= {dataProducto}/>
            </div>
        </>
    )
}

export default ItemDetailContainer


// import { useState, useEffect } from "react";
// import ItemDetail from './ItemDetail'
// import Item from "../Item/Item"
// import containerProductos from "../../Utils/containerProductos"


// const ItemDetailContainer = ({children}) => {
//     const [dataProducto, setDataProducto] = useState({})

//     const [productos, setProducts] = useState([])
    
//     const obtenerProductos = () =>{
//         return new Promise((resolve, reject) => {
//             setTimeout(() =>{
//                 return resolve(containerProductos);
//             }, 2000);
//         })
//     }

//     useEffect( () =>{
//         obtenerProductos().then ( (data) =>{
//             setProducts(data)
//         }).finally( () =>{
//             console.log("Termino la llamada")
//         })
//     }, [])

//     return (
//         <>
        
//             <ItemDetail data={dataProducto}/>
//         </>
//     )
// }

// export default ItemDetailContainer

