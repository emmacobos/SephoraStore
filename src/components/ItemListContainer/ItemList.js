import React,{useState, useEffect} from "react"
import Card from "../Card/Card"
import Item from "../ItemListContainer/Item"
import containerProductos from "../../Utils/containerProductos"

const ListProducts = ({children}) => {
    const containerProductos = [{
        id: 1,
        title: "Base",
        tone: "Light",
        price: 1500,
        image: './541507_swatch.webp',
        stock: 10
    },
    {   
        id: 2,
        title: "Corrector",
        tone: "Medium",
        price: 150,
        image: './541503_swatch.webp',
        stock: 8
    }]

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



    return(
        <div className="container-cards">
            <h2>Productos en Oferta</h2>
            {productos.map( (producto) => {
                const {id} = producto
                return(
                    // <Card data={product} key ={id} />
                    <Item data= {producto} key = {id} />
                )
            })}
        </div>
    )
}
export default ListProducts;