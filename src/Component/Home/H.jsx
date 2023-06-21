import React from "react";
import compu from "../../IMG/IMG_20221122_094256774_HDR-removebg-preview.png";
import { ButtonCv } from "../Botones/ButtonCv";
import "./h.scss";

export const H = () => {
  return (
    <div className="hh">
      <div className="gen">
        <div className="gen0">
          <h1>MaxiCacciamano</h1>
          <h2>DesarrolladorFrontend</h2>
          <p>
            Convirtiendo ideas y sueños en lineas de codigo inovadoras
            <br />
            Estudiante avanzado de sistema y desarrollador web Fullstack. Mi
            pasion por la informatica hacen que cada dia crezca y aprenda cosas
            nuevas de este mundo
          </p>
          <div className="resume">
            <ButtonCv />
          </div>
        </div>
        <div className="gen1">
          {/* <img src={compu} style={{position:"relative", top:"100px"}}/> */}
            {/* <img src={compu} /> */}
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF0066"
              d="M71.2,-22.1C79.4,2.1,64.3,34.9,39.7,52.2C15.1,69.5,-19,71.4,-42.8,55C-66.6,38.7,-80,4.1,-71.2,-21C-62.3,-46.2,-31.2,-62,0.2,-62C31.5,-62.1,63,-46.4,71.2,-22.1Z"
              transform="translate(100 100)"
              style={{backgroundImage:"url(../../IMG/IMG_20221122_094256774_HDR-removebg-preview.png)"}}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
