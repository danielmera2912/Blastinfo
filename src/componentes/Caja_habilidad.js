import React, {useState, useEffect} from 'react';
import { Routes, Link } from "react-router-dom";
import '../hojas-de-estilo/componentes/Caja_habilidad.sass';
/**
 * Componente que representa la caja de cada habilidad de la lista de habilidades
 *
 * @component
 * @example
 * const name = "limber"
 * return (
 *   <Caja_habilidad name={name}/>
 * )
 */
function Caja_habilidad({ name }) {
    const [habilidad, setHabilidad] = useState(null)
    /**
     * useEffect provoca la llamada de obtenerDatos cada vez que se reinicia la página
     */
    useEffect(() => {
      obtenerDatos();
    }, [])
    /**
     * url de la API llamando a la habilidad en concreto
     */
    const url = "https://pokeapi.co/api/v2/ability/"+name;
    /**
     * obtenerDatos guarda el array de los datos de la habilidad de la API
     */
    const obtenerDatos =  async () => {
        const data = await fetch(url);
        const habilidad= await data.json(url);
        setHabilidad(habilidad);
    }
    /**
     * nombre de la habilidad limpia, con la primera letra en mayúscula
     */
    let nombre_nuevo = name;
    if(nombre_nuevo!=null){
        nombre_nuevo = nombre_nuevo.charAt(0).toUpperCase() + nombre_nuevo.slice(1)
    }
    
    return (

        <Link to="/habilidad" state={{name:name}}>
            <article className="cuerpo__listado--movimiento__items">
                <div className="cuerpo__listado--movimiento__items__nombre">
                    {nombre_nuevo}
                </div>
            </article>
        </Link>
    
    
      );    
    }

export default Caja_habilidad;