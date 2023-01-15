import React, {useState, useEffect} from 'react';
import '../hojas-de-estilo/componentes/Filtro.sass';

function Filtro(props) {

  const cambiarFiltro = (e) => {
    console.log(e)
    props.setFiltro(e); 
  }

  return (

    <div className="cuerpo__filtro">
      <select name="filtro" onClick={e=> cambiarFiltro(e.target.value)}>
        <option value="id_descendente">Orden Pokédex &darr;</option>
        <option value="id_ascendente">Orden Pokédex	&uarr;</option>
        <option value="nombre_descendente">Nombre &darr;</option>
        <option value="nombre_ascendente">Nombre 	&uarr;</option>
      </select>
    </div>
    

  );    
}

export default Filtro;