import React, {useState, useEffect} from 'react';
import '../hojas-de-estilo/componentes/Pagina404.sass';
import Pokeball from '../images/pokeball.svg';

/**
 * Componente que representa la página Error 404
 *
 * @component
 * @example

 * return (
 *   <Error404/>
 * )
 */

function Pagina404({  }) {
  /**
   * useEffect que cuando ocurra dos segundos tras iniciar la página, se realice un cambio a true al valor del efectoActivado
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setEfectoActivado(true);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const [efectoActivado, setEfectoActivado] = useState(false)

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