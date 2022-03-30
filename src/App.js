import './App.css';
import React, {useState} from "react"

import NavBar from './components/NavBar/NavBar'
import Card from './components/Card/Card'
import CardClass from './components/Card/CardClass'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ModalCustom from './components/Modal/Modal';
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
    </div>
  );
}

export default App;
