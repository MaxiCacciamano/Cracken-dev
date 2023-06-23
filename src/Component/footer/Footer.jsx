import React from "react";
import copy from "../../IMG/Copyright.png";
import escuadra from "../../IMG/urobos .png";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <h4>
        2023
        <img className="c" src={copy} />
        All right reserved
      </h4>
      <span>
        <h4>Created by ❤ Maxi</h4>
      </span>
      <div className="footer-contacto">
        <img src={escuadra} />
      </div>{" "}
    </div>
  );
};
