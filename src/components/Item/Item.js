import React,{useContext } from 'react'
import CartContext from '../Context/CartContext';


import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';



export default function Item({data}){  
    const navigate = useNavigate();
    const { cartProducts, addProductToCart } = useContext(CartContext)
    const {title,description, price, tone, image, id} = data

    const detailProducto = () =>{
        navigate(`/productos/${id}`)
    }
    const addToCart = (e) => {
        e.stopPropagation()  
        console.log("Productos agregados:", cartProducts) 
        addProductToCart(data)
    }
    return(
        <div className="card-item" onClick={detailProducto}>
                <img src={`./${image}`} alt={`./${image}`}  />
                <div className="container-cards-data">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Precio: $ {price}</p>
                    <p>tone: {tone}</p>
                    <Button onClick={addToCart} className="btn-custom">Comprar</Button>
                </div>
        </div>
    )
}