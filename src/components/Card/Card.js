import { dividerClasses } from "@mui/material";
import './Card.css';

export default function Card(price, talle, title){
    console.log("Precio: ",price)
    console.log("Talle: ",talle)
    console.log("Title: ",title)
    return(
        <div className="card-item">
            <h2>Titulo</h2>
            <p>Precio</p>
            <p>Talle</p>
            <button>Comprar</button>
        </div>
    )
}