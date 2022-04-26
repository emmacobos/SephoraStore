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

const ItemDetail = ({data}) => {
    const [contador, setContador] = useState(false)
    const borrarTitulo = (text) => {
        setContador(text)
    }
    return(
        <Container className='container-general'> 
                <div>
                    {contador ? seguirCompra() : <ItemCount agregado={(text) => borrarTitulo(text)} stock={10} initial={0} />}
                </div>
        </Container>
    )
}

export default ItemDetail



// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import { useEffect, useState } from 'react';
// import { render } from '@testing-library/react';
// import ItemCount from "../ItemCount/ItemCount"

// const ItemDetail = ({data}) => {
//         return(
//             <Container className='container-general'> 
//                 <div className='container-detail'>
//                 <div className='container-detail__img'>
//                     <img src={data.image} alt="jean" />
//                 </div>
//                 <div className='container-detail__info'>
//                     <h3 className='info__title'>{data.title}</h3>
//                     <p className='info__text'>$ {data.price}</p>
//                     <p className='info__subtitle'>TALLE</p>
//                     <p className='info__text'>{data.talle}</p>
//                     <p className='info__subtitle'>Stock</p>
//                     <ItemCount stock= {data.stock}/>
//                     <p className='info__text detail__text'>{data.description}</p>
//                     <Button className='detail__btn-buy'>COMPRAR</Button>
//                 </div>
//                 </div>
//             </Container>
//         )
//     }

// export default ItemDetail






// import ItemCount from "../ItemCount/ItemCount";


// const ItemDetail = ({data}) => {
//     const {title,description, price, tone, stock, image} = data
//     return(
//         <div>
//             <div>
//                 <img src={image} alt="Base" />
//             </div>
//             <div>
//                 <h3>{title}</h3>
//                 <p>Precio: €{price}</p>
//                 <p>{description}</p>
//                 <p>Tone</p>
//                 <p>{tone}</p>
//                 <ItemCount stock = {stock}/>
//                 <button >Comprar</button>
//             </div>
//         </div>
//     )
// }

// export default ItemDetail
