import { Link } from 'gatsby'
import React from 'react'

export default function NavBar() {
    return (
        <nav>
            <h3></h3>
            <div className='links'>
                <Link to="/">Inicio</Link>
                <Link to="/about/about">Sobre nosotros</Link>
                <Link to="/about/privacity">Términos y condiciones</Link>
                <Link to="/portfolio/portfolio">Productos y servicios</Link>
            </div>
        </nav>
    )
}