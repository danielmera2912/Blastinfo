import React, {useState, useEffect} from 'react';
import { Routes, Link } from "react-router-dom";
import '../hojas-de-estilo/componentes/Caja_movimiento.sass';
/**
 * Componente que representa la caja de cada movimiento de la lista de movimientos
 *
 * @component
 * @example
 * const name = "pound"
 * return (
 *   <Caja_movimiento name={name}/>
 * )
 */
function Caja_movimiento({ name }) {
    const [movimiento, setMovimiento] = useState(null)
    /**
     * useEffect provoca la llamada de obtenerDatos cada vez que se reinicia la página
     */
    useEffect(() => {
      obtenerDatos();
    }, [])
    /**
     * url de la API llamando al movimiento en concreto
     */
    const url = "https://pokeapi.co/api/v2/move/"+name;
    /**
     * obtenerDatos guarda el array de los datos del movimiento de la API
     */
    const obtenerDatos =  async () => {
        const data = await fetch(url);
        const movimiento= await data.json(url);
        setMovimiento(movimiento);
    }
     /**
     * nombre de la habilidad limpia, con la primera letra en mayúscula
     */
    let nombre_nuevo = name;
    if(nombre_nuevo!=null){
        nombre_nuevo = nombre_nuevo.charAt(0).toUpperCase() + nombre_nuevo.slice(1)
    }
    
  return (

    <Link to="/blastinfo/movimiento" state={{name:name}}>
        <article className="cuerpo__listado--movimiento__items">
            <div className="cuerpo__listado--movimiento__items__nombre">
                {nombre_nuevo}
            </div>
        </article>
    </Link>


  );    
}

export default Caja_movimiento;