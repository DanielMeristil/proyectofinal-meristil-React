import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./navbar.css"
import CartWidget from '../CartWidget/CartWidget';
const Navbar = () => {

    const enlaces = [
        "Fashon",
        "Producto",
        "Barberia",
        "Maquillaje",
        "Sobre Nosotros",
        "Nuestro Blog",
        "Contacto",
        "Ubicacion"
    ]

    return (
        <div className='nav'>
            <Link className="enlace" to={"/"}>
                <p>LOGO</p>
            </Link>
            
            <ul className='enlacesContainer'>
                {enlaces.map((e,id) => 
                    <li  className="liContainer" key={id}>
                        <NavLink activeclassname="active" to={`${e}`}>
                         {e}
                        </NavLink>
                    </li>
                )}
              
            </ul>

            <CartWidget/>
        </div>
    );
};

export default Navbar;