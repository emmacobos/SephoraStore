import React,{ useState, useEffect, useContext } from 'react'
import CartContext from '../Context/CartContext';


import ItemCount from "../ItemCount/ItemCount";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';



export default function Item({data, action}){  
    const navigate = useNavigate();
    const { cartProducts, addProductToCart } = useContext(CartContext)
    const {title,description, price, tone, stock, image, id} = data

    useEffect( () =>{
        console.log("cartProducts:", cartProducts)
        const ventanaScroll = () =>{
            if( window.scrollY > 100 ) {
                console.log("scroll mayor a 100")
            }
        }       
        window.addEventListener("scroll", ventanaScroll)

        return () =>{
            window.removeEventListener("scroll", ventanaScroll)
        }
    }, [])

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