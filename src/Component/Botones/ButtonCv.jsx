import React from "react";
import ReactTooltip from "react-tooltip";
import CV from "../../CV/CV-ACTUALIZADO-2.pdf";
import dow from "../../IMG/download_FILL0_wght400_GRAD0_opsz48.png";
import "./Button.scss";

export const ButtonCv = () => {
    return (
        <div className="buttons">
            <button className="boton" data-tip data-for="botonsobre">
                <a href={CV} download="CV-Maxi">
                    <span class="shadow"></span>
                    <span class="edge"></span>
                    <span class="front text">
                        {" "}
                        <p className="Resume">Resume</p>
                        <img src={dow} />{" "}
                    </span>
                </a>
            </button>
            <ReactTooltip id="botonsobre">
                para saber de mi historial academico, descarga mi cv
            </ReactTooltip>
            <div className="boton-2">
                <a href="mailto:developer.maxi33@gmail.com" className="contacto">Contacto</a>
            </div>
        </div>
    );
};
