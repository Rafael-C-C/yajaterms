//import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/navbar.css'

export default function NavBar() {
    return (
      <section class="top-nav">
    <div>
      YajaDoc
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
        <li><a  href="/">Página principal</a></li>
        <li ><a href="/about/aviso">Política de privacidad</a></li>
        <li ><a href="/about/privacity">Términos y condiciones</a></li>
        <li ><a href="/about/contact">Métodos de contaco</a></li>
    </ul>
  </section>
    )
}


/*
      <label>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

          <div class="navbar">
            <a class="active" href="/"><i class="fa fa-fw fa-home"></i>Página principal</a>
            <a href="/about/aviso"><i class="fa fa-fw fa-user"></i> Política de privacidad</a>
            <a href="/about/privacity"><i class="fa fa-address-book"></i> Términos y condiciones</a>
            <a href="/about/contact"><i class="fa fa-fw fa-envelope"></i> Métodos de contaco</a>
          </div>
      </label>




          <input type="checkbox"/>
          <span class="menu"> <span class="hamburger"></span> </span>
          <ul>
            <li> <a href="/">Inicio</a> </li>
            <li> <a href="">Aviso de privacidad</a> </li>
            <li> <a href="">Términos y condiciones</a> </li>
            <li> <a href="/about/about">Sobre nosotros</a> </li>
            <li> <a href="">Contáctanos</a> </li>
          </ul>
*/