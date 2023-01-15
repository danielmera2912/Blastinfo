import React from 'react';
import '../hojas-de-estilo/componentes/Paginado.sass';

function Paginado({ paginaAct, paginaAnterior, paginaSiguiente, paginaFinal, ident }) {
  let noExtremo1 = true;
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