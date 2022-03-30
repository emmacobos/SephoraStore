import React from 'react';
import Button from '@mui/material/Button';
import './NavBarClass';
import CartWidget from '../CartWidget/CartWidget';

function NavBar(props){
    // console.log(props)
    return(
        <header className="main-header">
            <div className='container-logo'>
                <img src='./public/carrito-de-compras.png' />
            </div>
            <ul className='navbar'>
                <li><Button variant="contained">Tiendas & Servicios</Button></li>
                <li><Button variant="contained">Mi Cuenta</Button></li>
                <li><Button variant="contained">Me Gusta</Button></li>
                <li><Button variant="contained">Carrito</Button></li>
            </ul>
            <CartWidget />
      </header>
    )
}

export default NavBar;