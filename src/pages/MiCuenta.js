import { useState } from "react";
import { Container } from "@mui/material"
import Button from '@mui/material/Button';

const Home = () =>{

    const [value, setValue] =useState({
        nombre: '',
        apellido: '',
        email: ''

    })


    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    const handleChange = (e) =>{
        setValue(e.target.value)
    }

    return (
        <Container>
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={value.nombre} placeholder="Nombre"/>
                <input type="text" value={value.apellido} placeholder="Apellido"/>
                <input type="email" value={value.email} placeholder="E-mail"/>
                <Button type="submit" onSubmit={handleSubmit}>Enviar</Button>

            </form>
        </Container>
    )
}

export default Home