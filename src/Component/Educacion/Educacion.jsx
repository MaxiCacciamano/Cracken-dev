// import React from "react";
// import Henry from '../../IMG/Henry.png';
// import Front from '../../IMG/stack.png'
// import js from '../../IMG/Cjs.png'
// import avanzado from '../../IMG/hcj.png'
// import hc from '../../IMG/certificado2.png'
// import './educacion.scss'

// export const Educacion = () => {
//     return (
//         <div>
//             <h1>Educación</h1>
//             <section id="timeline">
//                 <div class="demo-card-wrapper">
//                     <div class="demo-card demo-card--step1">
//                         <div class="head">
//                             <div class="number-box">
//                                 <span>01</span>
//                             </div>
//                             <h2>
//                                 <span class="small">Fundación universitaria Cervantes</span> Analista en sistema
//                             </h2>
//                         </div>
//                         <div class="body">
//                             <p>
//                                Actualmente me encuentro cursando el segundo año de la carrera
//                             </p>
//                             <img
//                                 src={"http://placehold.it/1000x500"}
//                                 alt="Graphic"
//                             />
//                         </div>
//                     </div>

//                     <div class="demo-card demo-card--step2">
//                         <div class="head">
//                             <div class="number-box">
//                                 <span>03</span>
//                             </div>
//                             <h2>
//                                 <span class="small">UTN.frba</span>Desarrollo web en Html5 y Css3
//                             </h2>
//                         </div>
//                         <div class="body">
//                             <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipisicing elit. Soluta reiciendis deserunt
//                                 doloribus consequatur, laudantium odio dolorum
//                                 laboriosam.
//                             </p>
//                             <div className="Henry-img">
//                             <img
//                                 className="henry"
//                                 src={hc}
//                                 alt="Graphic"
//                             />
//                             </div>
//                         </div>
//                     </div>

//                     <div class="demo-card demo-card--step3">
//                         <div class="head">
//                             <div class="number-box">
//                                 <span>04</span>
//                             </div>
//                             <h2>
//                                 <span class="small">UTN.frba</span> Desarrollo web con JavaScript
//                             </h2>
//                         </div>
//                         <div class="body">
//                             <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipisicing elit. Soluta reiciendis deserunt
//                                 doloribus consequatur, laudantium odio dolorum
//                                 laboriosam.
//                             </p>
//                             <img
//                                 src={js}
//                                 alt="Graphic"
//                             />
//                         </div>
//                     </div> 
//                     <div class="demo-card demo-card--step4">
//                         <div class="head">
//                             <div class="number-box">
//                                 <span>05</span>
//                             </div>
//                             <h2>
//                                 <span class="small">UTN.frba</span> HTML5,CSS3,JavaScript<br/>(Nivel avanzado)
//                             </h2>
//                         </div>
//                         <div class="body">
//                             <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipisicing elit. Soluta reiciendis deserunt
//                                 doloribus consequatur, laudantium odio dolorum
//                                 laboriosam.
//                             </p>
//                             <img
//                                 src={avanzado}
//                                 alt="Graphic"
//                             />
//                         </div>
//                     </div>
//                     <div class="demo-card demo-card--step5">
//                         <div class="head">
//                             <div class="number-box">
//                                 <span>02</span>
//                             </div>
//                             <h2>
//                                 <span class="small">UTN.Frba</span> Profesional Frontend 
//                             </h2>
//                         </div>
//                         <div class="body">
//                             <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipisicing elit. Soluta reiciendis deserunt
//                                 doloribus consequatur, laudantium odio dolorum
//                                 laboriosam.
//                             </p>
//                             <img
//                                 src={Front}
//                                 alt="Graphic"
//                             />
//                         </div>
//                     </div>

//                     <div class="demo-card demo-card--step6">
//                         <div class="head">
//                             <div class="number-box">
//                                 <span>03</span>
//                             </div>
//                             <h2>
//                                 <span class="small">Bootcamp Soy Henry</span> Fullstack developer
//                             </h2>
//                         </div>
//                         <div class="body">
//                             <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipisicing elit. Soluta reiciendis deserunt
//                                 doloribus consequatur, laudantium odio dolorum
//                                 laboriosam.
//                             </p>
//                             <div className="Henry-img">
//                             <img
//                                 className="henry"
//                                 src={Henry}
//                                 alt="Graphic"
//                             />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };


import React from 'react'

export const Educacion = () => {
  return (
    <div className='educacion00'>
        <h1 id="educacion">Educación</h1>
        <ul class="timeline">
  <li class="timeline-event">
    <label class="timeline-event-icon"></label>
    <div class="timeline-event-copy">
      <p class="timeline-event-thumbnail">2020 - actualidad</p>
      <h3>Analista en sistemas</h3>
      <h4>Fundación universitaria Cervantes</h4>
      <p><strong>Cursando actualmente en segundo año de la carrera</strong><br/></p>
      {/* <p><strong>Projektmanagement mit Scrum</strong><br/>Ständiges Verbessern des agilen Entwicklungsprozesses beispielsweise durch Grunt, Yeoman, GIT, JIRA und BrowserStack.</p> */}
    </div>
  </li>
  <li class="timeline-event">
    <label class="timeline-event-icon"></label>
    <div class="timeline-event-copy">
      <p class="timeline-event-thumbnail">Marzo 2020 - Octubre 2021</p>
      <h3>Profesional Frontend desarrollador web</h3>
      <h4>UTN.BA facultad regional Buenos Aires</h4>
      <p><strong><a style={{cursor:'pointer'}}>certificados</a></strong><br/>Aprendiendo los fundamentos basicos y mas importantes de la programacion orientada a FrontEnd y  aplicarlos de forma profesional.<br/>
        Htm5l, Css3, Sass, Javascript, Boostrap, MaterialUi, Git, GitHub entre otras librerias
      </p>
    </div>
  </li>
  <li class="timeline-event">
    <label class="timeline-event-icon"></label>
    <div class="timeline-event-copy">
      <p class="timeline-event-thumbnail">Marzo 2022 - Septeimbre 2022</p>
      <h3>FullStack developer</h3>
      <h4>Bootcamp "Soy Henry"</h4>
      <p><strong><a style={{cursor:'pointer'}}>certificado</a></strong><br/>Aplicar concecptos de programación, nuevas tecnologias y trabajar de forma profesional, como programador Fullstack<br/>
       React, React hooks, ExpresJs, NodeJs, Base de datos relacionales y no relacionales, Typescipt, control de versiones Git, Github<br/><br/>
      Aplicar tambien de forma profesional, los metodos de trabajos actuales en un ambiente laboral como programdador. <br/> metodologias agiles (SCRUM), Ccomunicación (Slack, Microsoft team), etc</p>
    </div>
  </li>
</ul>  
    </div>
  )
}
