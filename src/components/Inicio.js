import React from "react";
import logo from '../img/main-logo.png'
import './Inicio.css'

const Inicio = () => {

    return(
    <div className="body_main">
        <main className="main__index">
            <section className="main__index__section">
                <div className="div">
                    <h2 className="text">Somos Kurenai Studio, un espacio multidisciplinario donde se interrelacionan las Artes y la
                        Tecnología. Somos entusiastas de la animación, el diseño web, la música, la programación, el
                        manga y el cómic.</h2>
                    <h2 className="text">Nuestro objetivo es ofrecer a nuestros clientes soluciones con lo más altos estandares actuales
                        en el área de la producción de audio, el tatuaje y la informática</h2>
                </div>
                <img className= "img" src={logo} alt="logo"/>
            </section>
        </main>
    </div>
    )
}

export default Inicio;