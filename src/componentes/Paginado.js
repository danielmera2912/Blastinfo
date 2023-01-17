import React from 'react';
import '../hojas-de-estilo/componentes/Paginado.sass';
/**
 * Componente que representa el paginado de cada página de la lista de búsqueda
 *
 * @component
 * @example

 * return (
 * const paginaAct = function => ()
 * const paginaAnterior = function => ()
 * const paginaSiguiente = function => ()
 * const paginaFinal = function => ()
 * const ident = function => ()
 *   <Paginado paginaAct={paginaAct} paginaAnterior={paginaAnterior} paginaSiguiente={paginaSiguiente} paginaFinal={paginaFinal}/>
 * )
 */
function Paginado({ paginaAct, paginaAnterior, paginaSiguiente, paginaFinal, ident }) {
  /**
  * variable que identifica si se encuentra en un primer extremo
  */
  let noExtremo1 = true;
  /**
  * variable que identifica si se encuentra en un segundo extremo
  */
  let noExtremo2 = true;
  if(paginaAct == 1){
    noExtremo1 = false;
  }
  if(ident == "pokemon" || paginaFinal==false){
    noExtremo2 = false;
  }
  return (

    <nav className="cuerpo__paginado">
        <button className={noExtremo1 ? 'cuerpo__paginado__boton' : 'cuerpo__paginado__boton cuerpo__paginado__boton--desactivado'} onClick={paginaAnterior}> &lt; </button>
        <button className="cuerpo__paginado__boton cuerpo__paginado__boton--actual"> {paginaAct} </button>
        <button className={noExtremo2 ? 'cuerpo__paginado__boton' : 'cuerpo__paginado__boton cuerpo__paginado__boton--desactivado'} onClick={paginaSiguiente}> &gt; </button>
    </nav>


  );    
}

export default Paginado;