import React, { useEffect } from "react";
import "./about.scss";
import { Tecnologias } from "../Habilidades/Tecnologias";
import { Educacion } from "../Educacion/Educacion";
import { Experiencia } from "../Experiencia/Experiencia.jsx";

export const About = () => {
  return (
    <div className="About-me" id="maxi">
      <h1>Sobre mi</h1>
      <div className="sub-about">
        <div  className="fotoabout"></div>
        <div className="about2">
          <h3>¿Quien soy?</h3>
          <p>
            Una de mis fortalezas es mi capacidad para aprender rápidamente
            nuevas tecnologías. Siempre estoy atento a las últimas tendencias y
            novedades en el campo de la programación, y me aseguro de mantenerme
            actualizado para aplicar las mejores prácticas en mis proyectos. Mi
            naturaleza curiosa y autodidacta me impulsa a buscar constantemente
            oportunidades para crecer y ampliar mis conocimientos técnicos.
            <br />
            Además de mis habilidades técnicas, también valoro el trabajo en
            equipo y la comunicación efectiva. Creo en la importancia de la
            colaboración para lograr resultados sobresalientes, y me adapto
            fácilmente a diferentes entornos y requerimientos de proyectos.
            Estoy emocionado por la oportunidad de trabajar junto a
            profesionales experimentados, aprender de ellos y aportar valor a
            través de mi contribución.
            <br />
          </p>
        </div>
      </div>
      <Tecnologias />
      <Educacion />
      <Experiencia />
      <br />
      <br />
      <br />
    </div>
  );
};
