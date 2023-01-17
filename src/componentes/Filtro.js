import React, {useState, useEffect} from 'react';
import '../hojas-de-estilo/componentes/Filtro.sass';
/**
 * Componente que representa el filtro en los listados de artículos
 *
 * @component
 * @example
 * const props.setFiltro = function (establece al campo filtro un valor)
 * return (
 *   <Filtro/>
 * )
 */
function Filtro(props) {
  /**
   * cambia campo del select para guardar en el campo filtro, el filtro que se haya seleccionado
   * @param {string} e  se mandará un string para cambiar el texto del filtro usando props.setFiltro
   */
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