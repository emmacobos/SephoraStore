import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import containerProductos from "../Utils/containerProductos"
import ItemCount from "../../src/components/ItemCount/ItemCount"

const Details = () => {
    const {id, categoria} = useParams()
    const [producto, setProducts]= useState({})

    useEffect( () => {
        filtrarProducto(containerProductos, id)
    }, [id])

    const filtrarProducto= (array, id) =>{
        return array.map ( (producto)=> {
            if(producto.id == id) {
                return setProducts(producto)
            }
        })
    }

    return (
        <Container>
            <h1>Detalle</h1>
            <div>
                <img src={producto.image} alt="Base" />
            </div>
            <div>
                <h3>{producto.title}</h3>
                <p>Precio: € {producto.price}</p>
                <p>{producto.description}</p>
                <p>Tone: </p>
                <p><strong>{producto.tone}</strong></p>
                <ItemCount stock = {producto.stock}/>
                <Button >Añadir al carrito</Button>
            </div>
        </Container>

    )
}

export default Details