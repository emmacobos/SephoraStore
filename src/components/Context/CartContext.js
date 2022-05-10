import { createContext, useState } from "react";

const CartContext = createContext();


const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (producto) => {
        let exist = cartProducts.find(cartProduct => cartProduct.id === producto.id)
        if(!exist) { 
            setTotalPrice(totalPrice + producto.price)
            setCartProducts(cartProducts => [...cartProducts, producto])
        }
    }

    const deleteProduct = (producto) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== producto.id))
    }

    const totalPrecio = () =>{
        let total = 0 
        cartProducts.map((cartProduct)=>{
            total = cartProduct.price + total
        })
        return total
    }

    const data = {
        cartProducts,
        addProductToCart,
        deleteProduct,
        totalPrecio
    }


    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext


