import Card from "../Card/Card"

export default function ListProducts({children}) {
    return(
        <div className="container-cards">
            <h2>{children}</h2>
            <Card title="Remera" talle= "XL" price= {200}/>
            <Card title="Pantalon" talle= "L" price= {100}/>
            <Card title="Campera" talle= "M" price= {50}/>
            <Card title="Jogging" talle= "S" price= {20}/>
        </div>
    )
}
