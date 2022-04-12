import React from 'react';
import Button from '@mui/material/Button';
import './NavBarClass';
import CartWidget from '../CartWidget/CartWidget';
import {Link } from "react-router-dom"


function NavBar(props){
    const page = [
        {
            title: "Tienda & Servicios",
            url: "/tiendaServicios"
        },
        {
            title: "Mi Cuenta",
            url: "/miCuenta"
        },
        {
            title: "Me Gusta",
            url: "/meGusta"
        }
    ]

    return(
        <header className="main-header">
            <div className='container-logo'>
                <Link to={"/"}><img src='../logo192.png' /></Link>
            </div>
            <ul className='navbar'>
                {/* <li>
                    <Button>
                        <Link to={"/nars"}>Nars</Link>
                    </Button>
                </li>
                <li>
                    <Button>
                        <Link to={"/lancome"}>lancome</Link>
                    </Button>
                </li> */}
               {page.map (page =>{
                   return(
                       <li key = {page.id}>
                           <Button component= {Link} to = {page.title.url} variant="contained">{page.title}</Button>
                       </li>
                    //    <li>
                    //        <Button>
                    //            <Link to={page.url}>{page.title}</Link>
                    //        </Button>
                    //    </li>
                   )
               })}
            </ul>
            <CartWidget />
      </header>
    )
}

export default NavBar;