//import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/navbar.css'

export default function NavBar() {
    return (
      <label>
          <input type="checkbox"/>
          <span class="menu"> <span class="hamburger"></span> </span>
          <ul>
            <li> <a href="/">Inicio</a> </li>
            <li> <a href="/about/aviso">Aviso de privacidad</a> </li>
            <li> <a href="/about/privacity">Términos y condiciones</a> </li>
            <li> <a href="/about/about">Sobre nosotros</a> </li>
            <li> <a href="/about/contact">Contáctanos</a> </li>
          </ul>
      </label>
    )
}


