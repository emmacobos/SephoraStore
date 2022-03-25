import React,{useState} from "react"
import Card from "../Card/Card"

export default function ListProducts ({children}) {
    const [showCard, setShowCard] = useState(true)
    let dataProduct = {
        title: "Base",
        tone: "Light",
        price: 1500,
        stock: 10
    }
    const hideCard =()=>{
        setShowCard(!showCard)
    }
    return(
        <div className="container-cards">
            <h2>{children}</h2>
            <button onClick={hideCard}></button>
            {showCard && <Card data= {dataProduct}/>}
            {/* <Card title="Remera" talle= "XL" price= {200}/>
            <Card title="Pantalon" talle= "L" price= {100}/>
            <Card title="Campera" talle= "M" price= {50}/>
            <Card title="Jogging" talle= "S" price= {20}/> */}
        </div>
    )
}
