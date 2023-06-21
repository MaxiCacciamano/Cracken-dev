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
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#00390D"
              d="M56.1,-56.3C72.1,-40.1,84.1,-20.1,83.4,-0.7C82.7,18.6,69.3,37.3,53.3,53C37.3,68.6,18.6,81.3,-1.8,83.1C-22.2,84.8,-44.3,75.7,-58.8,60C-73.2,44.3,-80,22.2,-78.7,1.3C-77.4,-19.5,-67.9,-39,-53.5,-55.2C-39,-71.4,-19.5,-84.2,0.3,-84.5C20.1,-84.8,40.1,-72.5,56.1,-56.3Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
