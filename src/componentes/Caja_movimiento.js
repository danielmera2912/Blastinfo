import React, {useState, useEffect} from 'react';
import { Routes, Link } from "react-router-dom";
import '../hojas-de-estilo/componentes/Caja_movimiento.sass';
function Caja_movimiento({ name }) {
    const [movimiento, setMovimiento] = useState(null)
    useEffect(() => {
      obtenerDatos();
    }, [])
    const url = "https://pokeapi.co/api/v2/move/"+name;
    const obtenerDatos =  async () => {
        const data = await fetch(url);
        const movimiento= await data.json(url);
        setMovimiento(movimiento);
    }
    let id_movimiento = null;
    if(movimiento != null){
        id_movimiento = movimiento.id
    }

    let nombre_nuevo = name;
    if(nombre_nuevo!=null){
        nombre_nuevo = nombre_nuevo.charAt(0).toUpperCase() + nombre_nuevo.slice(1)
    }
    
  return (

    <Link to="/movimiento" state={{name:name}}>
        <article className="cuerpo__listado--movimiento__items">
            <div className="cuerpo__listado--movimiento__items__nombre">
                {nombre_nuevo}
            </div>
        </article>
    </Link>


  );    
}

export default Caja_movimiento;