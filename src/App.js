import './App.css';
import React, {useState, useEffect} from "react"

import NavBar from './components/NavBar/NavBar'
import Card from './components/Card/Card'
import CardClass from './components/Card/CardClass'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ModalCustom from './components/Modal/Modal';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import ItemList from "./components/ItemListContainer/ItemList"

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
        <ItemList />
        <ItemDetailContainer />
    </div>
  );
}

export default App;
