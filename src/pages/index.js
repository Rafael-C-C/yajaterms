import { header, card, cardwrapper} from "../styles/home.module.css"
import * as styles from "../styles/projects.module.css"
import Layout from "../components/layout"

import React from "react"

export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>YajaDoc</h2>
          <h3>YajaXal.</h3>
        </div>
        <img src="/banner.png" alt="site banner" style={{maxWidth: '100%'}}/>
        <br></br>
      </section>

      <div className={styles.portfolio}>
        <h2>¿Qué es YajaDoc?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit netus praesent scelerisque egestas, eget primis sodales rhoncus ac cubilia venenatis tempus gravida sed, ad at dapibus tempor sollicitudin vulputate nascetur fames ornare dignissim. Placerat nunc odio fames interdum facilisi justo duis rutrum, diam mattis nibh arcu suspendisse taciti nec habitant est, risus pellentesque varius curae vulputate tristique ridiculus. Venenatis viverra ornare cum interdum tellus tempor, nascetur rutrum consequat aliquet hac himenaeos urna, natoque in imperdiet molestie habitant.</p>
        <h2>¿Quiénes somos?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit netus praesent scelerisque egestas, eget primis sodales rhoncus ac cubilia venenatis tempus gravida sed, ad at dapibus tempor sollicitudin vulputate nascetur fames ornare dignissim. Placerat nunc odio fames interdum facilisi justo duis rutrum, diam mattis nibh arcu suspendisse taciti nec habitant est, risus pellentesque varius curae vulputate tristique ridiculus. Venenatis viverra ornare cum interdum tellus tempor, nascetur rutrum consequat aliquet hac himenaeos urna, natoque in imperdiet molestie habitant.</p>
            
      </div>
      <br></br>

      <section className={cardwrapper}>
      <li className={card}>
        <img src='/products.jpeg' alt='ProductsImage'/>
        <h3><a href="/portfolio/pruducts">Productos y Servicios</a></h3>
        <p>Aquí encontrarás información sobre los productos con los que contamos.</p>
      </li>

      <li className={card}>
      <img src='/contact.jpg' alt='ContactImage'/>
      <h3><a href="/about/contact">Contacto</a></h3>
      <p>Aquí encontrarás la información con la que podrás contactarnos</p>
      </li>
  
      <li className={card}>
      <img src='/terms.jpg' alt='ContactImage'/>
      <h3><a href="/about/contact">Términos y condiciones</a></h3>
      <p>Aquí encontrarás la información con la que podrás contactarnos</p>
      </li>

      <li className={card}>
      <img src='/services.jpg' alt='ContactImage'/>
      <h3><a href="/about/aviso">Política de privacidad.</a></h3>
      <p>Aquí encontrarás la información con la que podrás contactarnos</p>
      </li>
      </section>
    </Layout>
  )
}
