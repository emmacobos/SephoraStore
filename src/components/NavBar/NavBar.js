import React from 'react';
import Button from '@mui/material/Button';
import './NavBarClass';
import CartWidget from '../CartWidget/CartWidget';

function NavBar(props){
    // console.log(props)
    return(
        <header className="main-header">
            <div className='container-logo'>
                <svg className='img-header' id="Calque_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 642 130.5"><style>.st0</style><path d="M66.6 30.2s-.2.7-3.4 9.6c-9.1-7.5-24.5-7-24.5 4.6 0 13.6 32 11.9 31 36.1-.8 19.4-24 23.9-41.8 14.5 1.6-3.4 3.2-6.7 4.3-9.4 13.5 8.2 25.1 4.5 27.1-2.2C64.5 65.2 28 70.8 28 45.1c0-10.9 12.2-27.7 38.6-14.9M103.6 27h44.7s-.1 3.9 0 9.4h-33.5v19.3h23.7c-.1 3.9 0 6.9 0 8.9h-23.7v24.1h33.5v9.2h-44.6l-.1-70.9zM206 27.1c-3.9-.1-12.2-.1-19.2-.1v71H198V71.1c2.8 0 8.5-.2 13.2-.3 6.4-.2 23.4-3.3 23.2-22.8-.1-21.9-24.4-20.8-28.4-20.9m-.6 34.7H198V36.2h6.3c2.9 0 20-1.3 20.5 11.9.6 13-12.8 13.7-19.4 13.7M503.8 98h13.5l-22.4-31.8c6-2.2 13-7.4 12.1-19.1-1.6-21.1-22.1-19.5-26.5-19.7-3.7-.2-11.7-.3-18.6-.2V98h11.2V68.1c3.7 0 5-.1 10.6-.2L503.8 98zM480 59.9c-2.5 0-4.4 0-6.9-.1V35.9h5.8c2.7 0 17.4-.8 18.6 10.7C499 60.3 483 59.9 480 59.9M313 55.3V27.4h10.9v70.8H313V64.6h-36.3v33.6h-10.9V27.4h10.9v27.9z"></path><path class="st0" d="M567.5 27.2h12.9l25.5 71.1h-11.4s-2.5-7.2-5.9-16.7l-28.7.2s-1.2 3.7-4.6 16.5h-11l23.2-71.1m-5 46.4l23.1-.1-11.7-35h-.2l-11.2 35.1zM392.8 35.4c-16.6 0-26 12.2-26 27.3s9.3 27.3 26 27.3 26-12.2 26-27.3-9.5-27.3-26-27.3m0-10.2c-22.6 0-37.3 16.8-37.3 37.4 0 20.7 14.7 37.4 37.3 37.4 22.6 0 37.3-16.8 37.3-37.4 0-20.7-14.7-37.4-37.3-37.4"></path></svg>
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