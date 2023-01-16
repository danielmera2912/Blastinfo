import React, {useState, useEffect} from 'react';
import '../hojas-de-estilo/componentes/Pagina404.sass';
import Pokeball from '../images/pokeball.svg';
function Pagina404({  }) {
  useEffect(() => {
    const interval = setInterval(() => efecto, 1000);
  }, []);
  const [efectoActivado, setEfectoActivado] = useState(false)
  const efecto = () => {
    setEfectoActivado(true);
  }
  return (

    <main className="cuerpo cuerpo--error">
        <div className="cuerpo--error__contenedor">
            <div className={efectoActivado ? "cuerpo--error__contenedor__text1--efecto" : "cuerpo--error__contenedor__text1"} >4</div>
            <img className="cuerpo--error__contenedor__img" src={Pokeball}/>
            <div className={efectoActivado ? "cuerpo--error__contenedor__text2--efecto" : "cuerpo--error__contenedor__text2"}>4</div>
            <div className="cuerpo--error__contenedor__mensaje">La página buscada, no ha sido encontrada.</div>
        </div>
    </main>


  );    
}

export default Pagina404;