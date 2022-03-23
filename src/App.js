import './App.css';
import React, {useState} from "react"

import NavBar from './components/NavBar/NavBar'
import Card from './components/Card/Card'
import CardClass from './components/Card/CardClass'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ModalCustom from './components/Modal/Modal';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleOpen = () =>{
    setOpen(true)
  }

  return (

    <div className="App">
      <NavBar />
      <ItemListContainer>
        <p>Productos Realacionados</p>
        <span>Subtitulo</span>

      </ItemListContainer>
      <ItemListContainer>
        Productos en Oferta
      </ItemListContainer>
      <button onClick={handleOpen}></button>
      <ModalCustom handleClose={handleClose} open={open}>
        <p>FORMULARIO CONTACTO</p>
      </ModalCustom>
      <ModalCustom handleClose={handleClose} open={open}>
        <Card />
      </ModalCustom>
    </div>
  );
}

export default App;
