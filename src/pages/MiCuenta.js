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
        console.log("Envio de formulario", value)
    }
    const handleChange = (e) =>{
        setValue(e.target.value)
    }
    const resetForm = (e) =>{
        setValue("")
    }

    return (
        <Container>
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={value.nombre} placeholder="Nombre"/>
                <input type="text" value={value.apellido} placeholder="Apellido"/>
                <input type="email" value={value.email} placeholder="E-mail"/>
                <Button onClick={resetForm}>Limpiar Formulario</Button>
                <Button type="submit" onSubmit={handleSubmit}>Enviar</Button>

            </form>
        </Container>
    )
}

export default Home