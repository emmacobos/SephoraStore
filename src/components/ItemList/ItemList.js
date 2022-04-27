import React,{useState, useEffect, useContext} from 'react'
import Item from "../Item/Item"
import containerProductos from "../../Utils/containerProductos"
import { useParams } from "react-router-dom"
import CartContext from '../Context/CartContext'

const ListProducts = ({children}) => {
    const {categoria} = useParams()
    const [productos, setProducts] = useState([])

    const obtenerProductos = () =>{
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                return resolve(containerProductos);
            }, 1000);
        })
    }

    useEffect( () => {
        setProducts([])
        obtenerProductos().then( (productos) => {
            categoria ? filtrarProductoCategoria(productos, categoria) : setProducts(productos)
        })
    }, [categoria])

    const filtrarProductoCategoria= (array, categoria) =>{
        return array.map ( (producto, i)=> {
            if(producto.categoria === categoria) {
                return setProducts(productos => [...productos, producto]);
            }
        })
    }

    return(
        <div>
            <h2>Productos en Oferta</h2>
            <div className="card">
                {productos.map( (producto) => {
                    return(
                        <Item data= {producto}/>
                    )
                })}
            </div>
        </div>
    )
}


export default ListProducts;