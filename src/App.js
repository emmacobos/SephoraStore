import './App.css';
import NavBar from './components/NavBar/NavBar'

import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from "./pages/Home"
import MiCuenta from "./pages/MiCuenta"
import errorDePagina from "./pages/ErrorDePagina"
import Details from './pages/Details';
import Cart from './components/Cart/Cart'

//Context
import {CartProvider} from "./components/Context/CartContext"


function App() {

  return (
    <div className="App">
       <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/MiCuenta' element={<MiCuenta/> } />
              <Route path='*' element={<errordePagina/> } />
              <Route path='/:categoria/:id' element={<Details/> } />
              <Route path='/:categoria/' element={<Home/> } />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
