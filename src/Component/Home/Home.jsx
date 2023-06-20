// import React, { useEffect, useRef } from "react";
// import Wraper from "../Wraper/Wraper";
// import { ButtonCv } from "../Botones/ButtonCv";
// import compu from "../../IMG/m.png";
// import Typed from "typed.js";
// import "./Home.scss";

// export const Home = () => {
//   const el = useRef(null);
//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ["FullStackWeb", "FrontEndWeb", "BackEndWeb"],
//       startDelay: 200,
//       typeSpeed: 200,
//       backDelay: 200,
//       backSpeed: 300,
//       // smartBackspace:true,
//       showCursor: false,
//       loop: true,
//     });
//   });
//   return (
//     <div className="general2">
//       <div className="info">
//       {/* <Wraper /> */}
//       {/* <div className="home"> */}
//         <div className="home3">
//           <div className="nombres">
//             <h1>MaxiCacciamano</h1>
//             {/* <h1 className="dev">Developer</h1> */}
//             <div /*class='content'*/>
//               <div className="maquina">
//                 <h1>
//                   Desarrollador <br />
//                   <span ref={el}></span>
//                 </h1>
//               </div>
//             </div>
//             <div className="presentacion">
//               <p>
//                 Convirtiendo ideas y sueños en lineas de codigo inovadoras
//                 <br />
//                 Estudiante de sistema y desarrollador web Fullstack. Mi pasion
//                 por la informatica hacen que cada dia crezca y aprenda cosas
//                 nuevas de este mundo
//               </p>
//             </div>
//            <div className="cv">
//              <ButtonCv />
//            </div>
//           </div>
//          </div>
//          <div className="home2">
//           <div className="foto">
//             <img src={compu} alt="image not found" />
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//     </div>
//   );
// };