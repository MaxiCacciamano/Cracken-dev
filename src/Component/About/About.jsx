import React from 'react'
import CV from '../../CV/CV-ACTUALIZADO-2.pdf'
import  ReactTooltip  from 'react-tooltip';
import './about.scss';
import { Tecnologias } from '../Habilidades/Tecnologias';
import { Educacion } from '../Educacion/Educacion';
import Wraper from '../Wraper/Wraper';
import { Experiencia } from '../Experiencia/Experiencia';

export const About = () => { 
  return (
    <div className="About-me" id="maxi">
      {/* <Wraper/> */}
      {/* <div className="line"></div> */}
      <h1>Sobre mi</h1>
      <div className="sub-about">
      {/* <div className="border-foto"></div> */}
      <div className="fotoabout">
      {/* <h2>Sobre mi</h2> */}
      </div>
      <div className="about2">
        <h3>¿Quien soy?</h3>
        <p>Una de mis fortalezas es mi capacidad para aprender rápidamente nuevas tecnologías. Siempre estoy atento a las últimas tendencias y novedades en el campo de la programación, y me aseguro de mantenerme actualizado para aplicar las mejores prácticas en mis proyectos. Mi naturaleza curiosa y autodidacta me impulsa a buscar constantemente oportunidades para crecer y ampliar mis conocimientos técnicos.<br/>
        Además de mis habilidades técnicas, también valoro el trabajo en equipo y la comunicación efectiva. Creo en la importancia de la colaboración para lograr resultados sobresalientes, y me adapto fácilmente a diferentes entornos y requerimientos de proyectos. Estoy emocionado por la oportunidad de trabajar junto a profesionales experimentados, aprender de ellos y aportar valor a través de mi contribución.<br/> 
        </p>  
        {/* <button className="boton" data-tip data-for="botonsobre">
          <a
             href={CV}
            download="CV-Maxi"
          >
         <span class="shadow"></span>
         <span class="edge"></span>
         <span class="front text"> Download CV
         </span>
          </a>
        </button>
        <ReactTooltip id="botonsobre">
          si querés saber más de mi historial academico y profesional, podes descargar mi  curriculum 
        </ReactTooltip> */}
      </div>
      {/* <button>
    Download
    <div id="clip">
        <div id="leftTop" class="corner"></div>
        <div id="rightBottom" class="corner"></div>
        <div id="rightTop" class="corner"></div>
        <div id="leftBottom" class="corner"></div>
    </div>
    <span id="rightArrow" class="arrow"></span>
    <span id="leftArrow" class="arrow"></span>
</button> */}
      </div>
      <Tecnologias />
      <Educacion/>
      <Experiencia/>
      <br/>
      <br/>
      <br/>
    </div>
    // </div>
  )
}
