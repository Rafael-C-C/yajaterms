import React from 'react';
import Layout from "../../components/layout"
import * as styles from "../../styles/projects.module.css"

export default function Products() {
    return (

        <Layout>
            <img src="/ban.jpeg" alt="site banner" style={{maxWidth: '100%', minWidth: '50%'}}/>
            <div className={styles.portfolio}>
            <h2>Productos</h2>
            <br></br>
            <h3>Enfoque:</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nostra aliquet, nunc ante justo magna et eget dignissim accumsan, suspendisse penatibus litora platea facilisis ligula torquent sollicitudin. Habitasse tellus ut torquent maecenas risus sociis cubilia eros scelerisque viverra integer, potenti quam sapien rutrum aptent quisque nibh vitae feugiat. Dapibus nascetur a malesuada accumsan lacinia ultricies nunc mollis quam enim, elementum convallis porttitor nostra lacus duis hac himenaeos turpis purus sagittis, vestibulum iaculis eros litora et montes eget justo tortor.</p>
            <h3>Tipo de productos:</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nostra aliquet, nunc ante justo magna et eget dignissim accumsan, suspendisse penatibus litora platea facilisis ligula torquent sollicitudin. Habitasse tellus ut torquent maecenas risus sociis cubilia eros scelerisque viverra integer, potenti quam sapien rutrum aptent quisque nibh vitae feugiat. Dapibus nascetur a malesuada accumsan lacinia ultricies nunc mollis quam enim, elementum convallis porttitor nostra lacus duis hac himenaeos turpis purus sagittis, vestibulum iaculis eros litora et montes eget justo tortor.</p>
            </div>


            <div className={styles.portfolio}>
            <h2>Servicios</h2>
            <br></br>
            <h3>Enfoque:</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nostra aliquet, nunc ante justo magna et eget dignissim accumsan, suspendisse penatibus litora platea facilisis ligula torquent sollicitudin. Habitasse tellus ut torquent maecenas risus sociis cubilia eros scelerisque viverra integer, potenti quam sapien rutrum aptent quisque nibh vitae feugiat. Dapibus nascetur a malesuada accumsan lacinia ultricies nunc mollis quam enim, elementum convallis porttitor nostra lacus duis hac himenaeos turpis purus sagittis, vestibulum iaculis eros litora et montes eget justo tortor.</p>
            <h3>Tipo de productos:</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nostra aliquet, nunc ante justo magna et eget dignissim accumsan, suspendisse penatibus litora platea facilisis ligula torquent sollicitudin. Habitasse tellus ut torquent maecenas risus sociis cubilia eros scelerisque viverra integer, potenti quam sapien rutrum aptent quisque nibh vitae feugiat. Dapibus nascetur a malesuada accumsan lacinia ultricies nunc mollis quam enim, elementum convallis porttitor nostra lacus duis hac himenaeos turpis purus sagittis, vestibulum iaculis eros litora et montes eget justo tortor.</p>
            </div>
        </Layout>
    )
}