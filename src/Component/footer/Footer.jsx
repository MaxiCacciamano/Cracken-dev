import React from 'react';
import copy from '../../IMG/Copyright.png'
import escuadra from '../../IMG/urobos .png'
import './footer.scss';

export const Footer = () => {
  return (
    <div className="footer">
      <h4>2023<img className='c' src={copy}/>All right reserved</h4>
      <span><h4>Created by ❤ Maxi</h4></span>
      <div className="footer-contacto">
      {/* <h4>Contacto</h4> */}
      <img src={escuadra}/>
      </div>
        {/* <h3>Created by <strong>Maxi</strong> ❤ | <img src={copy}/> 2022 All right reserved</h3> */}
    </div>
  )
}
