import { Container } from "@mui/material"
import ItemDetailContainer from "../components/ItemDetail/ItemDetailContainer"
import ListProducts from "../components/ItemList/ItemList"

const Home = () =>{
    return (
        <Container>
            <ListProducts />
        </Container>
    )
}

export default Home