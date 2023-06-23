import React from "react";
import "./experiencia.scss";

export const Experiencia = () => {
  return (
    <div data-aos="fade-left">
      <h1 id="experiencia">Experiencia</h1>
        <ul class="timeline">
          <li class="timeline-event">
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <h3 class="timeline-event-thumbnail">Asesor comercial</h3>
              <h4>Center flowers s.a</h4>
              <p>
                <strong>Diciembre 2015 - agosto 2022</strong>
              </p>
              <p>
                <br />
                Center flowers es una empresa de ventas de flores y articulos
                florales por mayor y menor. Donde me desempeñé como vendedor
                Mayor/Menor, armado de arreglos florales, atención telefónica,
                entre otras tareas
              </p>
            </div>
          </li>
          <li class="timeline-event">
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <h3 class="timeline-event-thumbnail">
                <a href="https://goldshop-ue.com">GoldShop</a>
              </h3>
              <h4>Ecoomerce</h4>
              <p>
                <strong>Tecnologias utilizadas</strong>
                <br />
                Wordpress
              </p>
              <p>
                <br />
                Desarolle una pagina web ecoomerce, para un cliente con software
                cms(Wordpress).
                <br />
                Funciones: filtrado por secciones, pasarela de pago, detalles de
                cada producto, busqueda por producto, envio de emails
              </p>
            </div>
          </li>
          <li class="timeline-event">
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <h3 class="timeline-event-thumbnail">
                <a href="https://www.goldshopue.it">GoldShop-Italia</a>
              </h3>
              <h4>Ecomerce</h4>
              <p>
                <strong>Tecnologias utilizadas</strong>
                <br />
                Shopify
              </p>
              <p>
                <br />
                Desarrolle un ecomerce para un cliente de italia, con software
                cms (shopify). <br />
                Funciones: filtrado por secciones, pasarela de pago, detalles de
                cada producto, busqueda por producto, envio de emails
              </p>
            </div>
          </li>
          <li class="timeline-event">
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <h3 class="timeline-event-thumbnail">
                <a href="https://deploy-client-mercadito.vercel.app">
                  Mercadito
                </a>
              </h3>
              <h4>Ecoomerce</h4>
              <p>
                <strong>Tecnologias utilizadas</strong>
                <br />
                React, React hooks, Postgresql, Nodejs, Git, Github, Sass,
                Javascript, Sequelize, Api rest
              </p>
              <p>
                <br />
                Trabajar como parte de un equipo desarrollando una pagina web de
                productos de tecnologias, practicanado la simulacion de un
                entorno de trabajo.
                <br />
                Funciones: filtrado por categorias, ordenar por precio y nombre,
                busqueda de productos, pasarela de pago, envio de correos,
                detalles del producto, session de usuario{" "}
              </p>
            </div>
          </li>
          <li class="timeline-event">
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <h3 class="timeline-event-thumbnail">
                <a href="https://e-comerce-max-pay.vercel.app">Shop</a>
              </h3>
              <h4>Ecomerce</h4>
              <p>
                <strong>Tecnologias utilizadas</strong>
                <br />
                React, React hooks, Boostrap, Api rest
              </p>
              <p>
                <br />
                Realice ecomerce de ventas de productos. <br />
                Funciones: filtrado por categorias, pasarela de pago, detalles
                del producto
              </p>
            </div>
          </li>
        </ul>
    </div>
  );
};
