import {H} from './Component/Home/H.jsx'
import {About} from './Component/About/About.jsx'
import { Allproyects } from './Component/Trabajos/Allproyects.jsx'
import {Footer}from './Component/footer/Footer.jsx'
import NavBar from './Component/NavBar/NavBar.jsx'
import {CertificadoFront} from './Component/Certificado/CertificadoFront.jsx'
// import Wraper from './Component/Wraper/Wraper.jsx';
import { Henry } from './Component/Certificado/Henry.jsx'
import './App.css'

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div >
      <div class="general">
        <div>
    <NavBar/>
         </div> 
  
      <Routes>
        {/* <div style={{height:"100vh"}}> */}
        <Route exact path="/" element={<H/>}/>
        {/* </div> */}
        <Route  path="/about" element={<About/>}/>
        <Route path="/proyects" element={<Allproyects/>}/>
        <Route path="/certificados" element={<CertificadoFront/>}/>
        <Route path="certificado-henry" element={<Henry/>}/>
     </Routes>
     {/* <div>
     <Footer />
     </div> */}
      </div>
     <Footer />
    </div>
  );
}

export default App;
