import React from 'react'
import compu from "../../IMG/m.png";
import { ButtonCv } from "../Botones/ButtonCv";
import './h.scss'

export const H = () => {
  return (
    <div className='hh'>
    <div className='gen'>
        <div className='gen0'>
              <h1>MaxiCacciamano</h1>
              <h2>DesarrolladorFrontend</h2>
              <p>
                Convirtiendo ideas y sueños en lineas de codigo inovadoras
                <br />
                Estudiante de sistema y desarrollador web Fullstack. Mi pasion
                por la informatica hacen que cada dia crezca y aprenda cosas
                nuevas de este mundo
              </p>
              <div className='resume'>
              <ButtonCv />
              </div>
        </div>
        <div className='gen1'>
            <img src={compu}/>
        </div>
    </div>

    </div>
  )
}
