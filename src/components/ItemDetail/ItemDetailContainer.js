import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import containerProductos from '../../Utils/containerProductos'
import Item from "../Item/Item";

const ItemDetailContainer = () => {
    const mockProduct =
        {
            id: 1,
            title: "Lancôme Teint Idole Ultra Wear",
            description: "Descubre la base de maquillaje Teint Idole Ultra Wear Stick, una base en barra de larga duración con una textura sedosa y un acabado mate para un cutis impecable durante todo el día. El revolucionario producto de Lancôme que se convertirá en tu mejor aliado y te acompañará en todos los desafíos de tu día a día!",
            tone: "Nº01 Beige Albatre",
            price: 44.99,
            image: '../teintIdoleUltraWear.webp',
            categoria:"lancome",
            stock: 10
        };
    const [dataProducto, setDataProducto] = useState([])

    const obtenerProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                return resolve(mockProduct);
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
            
            <ItemDetail data= {dataProducto} key={id}/>
        </div>
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


