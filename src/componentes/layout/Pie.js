import React, {useState, useEffect} from 'react';
import '../../hojas-de-estilo/layout/Pie.sass';
import Twitter from '../../images/Redes/twitter-5-48.png';
import Facebook from '../../images/Redes/facebook-5-48.png';
import Instagram from '../../images/Redes/instagram-48.png';
import Iniciar from '../sesion/Iniciar';
function Pie({  }) {
    const [zoom, setZoom] = useState(false);
    const [activado, setActivado] = useState(false);
    const [activado2, setActivado2] = useState(false);
    const [activado3, setActivado3] = useState(false);
    const [sesionIniciada, setSesionIniciada] = useState(localStorage.getItem("conexion"));

    const mostrarSesion = () => {
        setSesionIniciada(localStorage.getItem("conexion"))
        if(localStorage.getItem("conexion") == "true"){
            setActivado3(true);
        }else{
            setActivado(true);
        }

      }
    const usarZoom = (valor) => {
        setZoom(valor);
    }
  return (
    <div className="pie">
        <ul className="pie__seccion pie__seccion--redes">
            <li>
                <a className="pie__seccion__redes" href="error404">
                    <img onMouseEnter={() => usarZoom(true)}
                            onMouseLeave={() => usarZoom(false)} src={Twitter} className={zoom ? 'pie__seccion__redes-img_encima' : 'pie__seccion__redes'} alt='Logo de Twitter'/>
                </a>
            </li>
            <li>
                <a className="pie__seccion__redes" href="error404">
                    <img onMouseEnter={() => usarZoom(true)}
                            onMouseLeave={() => usarZoom(false)} src={Facebook} className={zoom ? 'pie__seccion__redes-img_encima' : 'pie__seccion__redes'} alt='Logo de Facebook'/>
                </a>
            </li>
            <li>
                <a className="pie__seccion__redes" href="error404">
                    <img onMouseEnter={() => usarZoom(true)}
                            onMouseLeave={() => usarZoom(false)} src={Instagram} className={zoom ? 'pie__seccion__redes-img_encima' : 'pie__seccion__redes'} alt='Logo de Instagram'/>
                </a>
            </li>
        </ul>
          
        <section className="pie__acceder">
                <p className="leader"> <a onClick={mostrarSesion} className="pie__acceder__enlace">Cuenta de Usuario</a></p>
        </section>
        <section className="pie__contacto">
            <p className="leader"> <a href="/contacto" className="pie__contacto__enlace">Contacto</a></p>
        </section>
        <Iniciar activado={activado} setActivado={setActivado}
         activado2={activado2} setActivado2={setActivado2} 
         activado3={activado3} setActivado3={setActivado3} sesionIniciada={sesionIniciada} setSesionIniciada={setSesionIniciada}/>
    </div>
  );    
}

export default Pie;