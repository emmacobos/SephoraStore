import { useContext, useEffect, useState } from "react";


import ItemCount from "../ItemCount/ItemCount";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';



export default function Item({data, action}){  
    const navigate = useNavigate();

    const {title,description, price, tone, stock, image, id} = data

    useEffect( () =>{
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

    return(
        <div className="card-item" onClick={detailProducto}>
                <img src={`./${image}`} alt={`./${image}`}  />
                <div className="container-cards-data">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Precio: $ {price}</p>
                    <p>tone: {tone}</p>
                    <Button onClick={action}>Comprar</Button>
                </div>
        </div>
    )
}