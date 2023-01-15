import React, {useState, useEffect} from 'react';
import { Routes, Link } from "react-router-dom";
import '../hojas-de-estilo/componentes/Caja_habilidad.sass';
function Caja_habilidad({ name }) {
    const [habilidad, setHabilidad] = useState(null)
    useEffect(() => {
      obtenerDatos();
    }, [])
    const url = "https://pokeapi.co/api/v2/ability/"+name;
    const obtenerDatos =  async () => {
        const data = await fetch(url);
        const habilidad= await data.json(url);
        setHabilidad(habilidad);
    }

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