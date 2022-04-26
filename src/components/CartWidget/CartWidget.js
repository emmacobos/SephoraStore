import { Link } from "react-router-dom"


const CartWidget = () => {
    return(
        <div className="carrito">
            <Link to={"/cart"}><img src='../carrito-de-compras.png' /></Link>
            <p>2</p>
        </div>
    )
}
export default CartWidget;