import React,{useState, useEffect} from "react"
import Item from "../Item/Item"
import containerProductos from "../../Utils/containerProductos"
import { useParams } from "react-router-dom"


const ListProducts = ({children}) => {
    const {categoria} = useParams()
    const [contador, setContador] = useState(0)
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
    const contadorInfo = (e, nombre) =>{
        e.stopPropagation()
        console.log("Nombre: " , nombre)
        setContador(contador +1)
    }

    return(
        <div>
            <h2>Productos en Oferta</h2>
            <div className="card">
                {/* <h1>Contador: {contador}</h1> */}
                {productos.map( (producto) => {
                    const {id} = producto
                    return(
                        <Item data= {producto} key = {id} action={contadorInfo}/>
                    )
                })}
            </div>
        </div>
    )
}


export default ListProducts;