import { header, btn } from "../styles/home.module.css"
import styles from "../styles/home.module.css"
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
      </section>
    </Layout>
  )
}
