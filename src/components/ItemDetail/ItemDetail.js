import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'


function seguirCompra () {
    return (
      <div className='seguirCompra'>
        <Link to='/cart'><button className='botonSeguirComprando'>Ir al carrito</button></Link>
        <Link to='/'><button className='botonSeguirComprando'>Seguir comprando</button></Link>
      </div>
    )
}

const ItemDetail = (data) => {
    const {description} = data.data

    const [contador, setContador] = useState(false)
    const borrarTitulo = (text) => {
        setContador(text)
    }
    return(
        <Container className='container-general'> 
                <div>
                    <div className='container-detail'>

                        <div className='container-detail__info'>
                            <p className='info__text detail__text'>{description}</p>
                            {contador ? seguirCompra() : <ItemCount agregado={(text) => borrarTitulo(text)} stock={10} initial={0} />}
                        </div>
                    </div>
              </div>
        </Container>
    )
}

export default ItemDetail