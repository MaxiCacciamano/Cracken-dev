import React from 'react'
import certificado from '../../IMG/stack.png'
// import arrow from '../../IMG/arrow.png'
import { Link } from "react-router-dom";
import certificado1 from '../../IMG/curso-boostrap.png'
import certificado2 from '../../IMG/hcj.png'
import certificado3 from '../../IMG/Cjs.png'
import certificado4 from '../../IMG/curso-boostrap.png'
import certificado5 from '../../IMG/certificado2.png'

export const CertificadoFront = () => {
  return (
    <div>
        {/* <Link to="/">
          <img src={arrow}/>
        </Link> */}
      <Link to='/CertificadoStack'>
        <img src={certificado}/>
        <img src={certificado5}/>
        <img src={certificado2}/>
        <img src={certificado3}/>
        <img src={certificado4}/>
      </Link>
    </div>
  )
}
