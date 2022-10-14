import { header, btn, card, cardwrapper} from "../styles/home.module.css"
import Layout from "../components/layout"
import { Link } from "gatsby"
import React from "react"

export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>YajaDoc</h2>
          <h3>Ventas de productos al por mayor.</h3>
          <p>Diseño de caja</p>
          <Link className={btn} to="/about/privacity">Términos y condiciones</Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{maxWidth: '100%'}}/>
        <br></br>
      </section>

      <section className={cardwrapper}>

      <li className={card}>
        <img src='/featured.jpg' alt='ProductsImage'/>
        <h3><a href="">Productos</a></h3>
        <p>Aquí encontrarás información sobre los productos con los que contamos.</p>
      </li>

      <li className={card}>
        <img src='/featured.jpg' alt='servicesimage'/>
        <h3><a href="">Servicios</a></h3>
        <p>Aquí encontrarás información sobre los servicios que ofrecemos.</p>
      </li>

      <li className={card}>
      <img src='/featured.jpg' alt='ContactImage'/>
      <h3><a href="">Contacto</a></h3>
      <p>Aquí encontrarás la información con la que podrás contactarnos</p>
      </li>

      </section>
    </Layout>
  )
}
