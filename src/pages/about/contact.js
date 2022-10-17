import React from 'react';
import Layout from '../../components/layout';
import * as styles from "../../styles/contact.css"



export default function contact() {
    return (
        <Layout>
           <img src="/featured.jpg" alt="site banner" style={{maxWidth: '100%', width:"50%"}}/>
        <div class="cards">
            <br></br>
            <div class="services">
            <div class="content content-1">
            <div class="fab fa-facebook">
        </div>
                <h2>Facebook</h2>
                <p>Puedes encontrarnos en nuestra página de facebook como:</p>
                <p>"Instituto Mexicano de la Administración del Conocimiento (IMAC)"</p>
                <a href="https://www.facebook.com/imacface">Visitar</a>
            </div>

            <div class="content content-4">
            <div class="fab fa-linkedin">
            </div>
                <h2>LinkedIn</h2>
                <p>Puedes encontrarnos en nuestro perfil de LinkedIn como:</p>
                <p>"Instituto Mexicano de la Administración del Conocimiento (IMAC)"</p>
                <a href="https://www.linkedin.com/company/2609786/">Visitar</a>
            </div>

            <div class="content content-3">
            <div class="fab fa-youtube">
            </div>
                <h2>Youtube</h2>
                <p>Puedes encontrarnos en nuestro canal de Youtube como:</p>
                <p>"IMAC - Instituto Mexicano de la Administración del Conocimiento A.C."</p>
                <a href="https://www.youtube.com/channel/UCFNb73tmtkYArn_DpGyyX3A">Visitar</a>
            </div>
            </div>

            <div class="content content-5">
            <div class="fab fa-youtube">
            </div>
                <h2>Twiteer</h2>
                <p>Puedes encontrarnos en nuestro perfil de Twitter como:</p>
                <p>@IMAC_AC</p>
                <p>IMAC A.C.</p>
                <a href="https://www.youtube.com/channel/UCFNb73tmtkYArn_DpGyyX3A">Visitar</a>
            </div>
            </div>
        </Layout>
    )
}

//https://twitter.com/IMAC_AC