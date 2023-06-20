import React from 'react'
import'./experiencia.scss'

export const Experiencia = () => {
  return (
    <div>
        <h1 id="experiencia">Experiencia</h1>
        <ul class="timeline">
  <li class="timeline-event">
    <label class="timeline-event-icon"></label>
    <div class="timeline-event-copy">
      <h3 class="timeline-event-thumbnail">GoldShop</h3>
      <p><strong>Tecnologias utilizadas</strong><br/>Wordpress</p>
      <p><strong>Ecoomerce</strong><br/>Trabajar como parte de un equipo desarrollando una pagina web ecoomerce, para un cliente  con version no code(Wordpress).<br/>Funciones: filtrado por secciones, pasarela de pago, detalles de cada producto, busqueda por producto, envio de emails</p>
    </div>
  </li>
  <li class="timeline-event">
    <label class="timeline-event-icon"></label>
    <div class="timeline-event-copy">
      <h3 class="timeline-event-thumbnail">Mercadito</h3>
      <h4>Ecoomerce</h4>
      <p><strong>Tecnologias utilizadas</strong><br/>React, React hooks, Postgresql, Nodejs, Git, Github, Sass, Javascript, Sequelize, Api rest</p>
      <p><br/>Trabajar como parte de un equipo desarrollando una pagina web de productos de tecnologias, practicanado la simulacion de un entorno de trabajo.<br/>Funciones: filtrado por categorias, ordenar por precio y nombre, busqueda de productos, pasarela de pago, envio de correos, detalles del producto, session de usuario </p>
    </div>  
  </li>
  <li class="timeline-event">
    <label class="timeline-event-icon"></label>
    <div class="timeline-event-copy">
      <h3 class="timeline-event-thumbnail">Shop</h3>
      <h4>Ecomerce</h4>
      <p><strong>Tecnologias utilizadas</strong><br/>React, React hooks, Boostrap, Api rest</p>
      <p><br/>Realice ecomerce de ventas de productos. <br/>Funciones: filtrado por categorias, pasarela de pago, detalles del producto</p>

    </div>
  </li>
</ul>  
    </div>
  )
}
