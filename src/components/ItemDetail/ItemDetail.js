import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { render } from '@testing-library/react';
import ItemCount,{onAdd} from "../ItemCount/ItemCount"

const ItemDetail = ({data, stock}) => {

    const [count, setCount] = useState(1)

    onAdd = (e) => {
        if(count < stock){
            setCount (count + 1)
        }
        console.log("anda el onAdd")
    }
    function sub(e) {
        if (count > 1) {
          setCount(count - 1)
        }
    }
        return(
            <Container className='container-general'> 
                <div className='container-detail'>
                <div className='container-detail__img'>
                    <img src={data.image} alt="jean" />
                </div>
                <div className='container-detail__info'>
                    <h3 className='info__title'>{data.title}</h3>
                    <p className='info__text'>$ {data.price}</p>
                    <p className='info__subtitle'>TALLE</p>
                    <p className='info__text'>{data.talle}</p>
                    <p className='info__subtitle'>Stock</p>
                    <ItemCount onAdd = {this.onAdd}/>
                    <p className='info__text detail__text'>{data.description}</p>
                    <Button className='detail__btn-buy'>COMPRAR</Button>
                </div>
                </div>
            </Container>
        )
    }

export default ItemDetail






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
