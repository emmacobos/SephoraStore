import {useContext} from 'react'
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../Context/CartContext';

const CartPage = () => {
    const { cartProducts, deleteProduct, totalPrecio } = useContext(CartContext)

    return(
        <Container className='container-general'> 
            <div className='cart-item'>
                {cartProducts.map( (cartProduct) => {
                    const { price, image, title, id } = cartProduct
                    return(
                        <div className='cart-table__content' key={id}>
                            <div className='cart-table__content-img'>
                                <img src={`./${image}`} />
                            </div>
                            <div className='cart-table__content-title'>
                                <p>{title}</p>
                            </div>
                            <div className='cart-table__content-price'>
                                <p>$ {price}</p>
                            </div>
                            <div className='cart-table__content-quantity'>
                                <p>1</p>
                            </div>
                            <div className='cart-table__content-price'>
                                <button className='btn-delete' onClick={() => deleteProduct(cartProduct)}>
                                    <DeleteIcon/>
                                </button>
                            </div>
                        </div>
                    )
                })}

                <div className='cart-footer'>
                    <div className='cart-checkout-details'>
                        <div className='cart-checkout__subtotal'>
                            <p>Subtotal</p>
                            <span>$ {totalPrecio()}</span>
                        </div>
                        <div className='cart-checkout__total'>
                            <p>Total</p>
                            <span>$ {totalPrecio()}</span>
                        </div>
                        <Button className='btn-custom'>Completar Compra</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CartPage 