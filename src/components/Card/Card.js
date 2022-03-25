import { dividerClasses } from "@mui/material";
import React,{ useState, useEffect } from "react";
import './Card.css';
import ItemCount from "../ItemCount/ItemCount";

export default function Card({data}){  
    const {title, price, tone, stock} = data
    const [count, setCount]  = useState(1)
    const [countTest, setCountTest] = useState(1)


    // console.log("estado contador:  ", count)
    // useEffect( () =>{
    //     console.log("Montaje")
    // },[])
    // useEffect( () =>{
    //     console.log("Actualizado")
    // })
    // useEffect( () =>{
    //     console.log("Count")
    // }, [count])
    // useEffect( () =>{
    //     window.addEventListener("scroll")
    //     return () => {
    //         console.log("Desmontaje")
    //         window.addEventListener("scroll")

    //     }
    // })
    
    const addStock = () =>{
        setCount(count + 1)
    }
    const removeStock = () =>{
        setCountTest(countTest - 1)
    }
    return(
        <div className="card-item">
            {console.log("Console dentro de render")}
            <h2>{title}</h2>
            <p>Precio: $ {price}</p>
            <p>tone: {tone}</p>
            <ItemCount stock = {stock}/>
            {/* <p>Stock : {count}</p> */}
            {/* <button onClick={removeStock}>quitar stock</button>
            <button onClick={addStock}>agregar stock</button> */}
        </div>
    )
}