import React, {useState, useEffect} from 'react';
import '../hojas-de-estilo/componentes/Barra_buscadora.sass';
import Buscador from '../images/icons/search-3-48.png';
import { Routes, Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';
function Barra_buscadora({ encabezado }) {
  const [busqueda, setBusqueda] = useState("")
  const location = useLocation();
  const cambiarTexto = (e) => {
    setBusqueda(e.target.value);
  }
  
  return (
    <form className={encabezado ? 'buscador-encabezado' : 'buscador'}>
        <input className={encabezado ? 'buscador-encabezado__caja' : 'buscador__caja'} onChange={cambiarTexto} value={busqueda} type="text" placeholder="Buscar..."/> 
        <Link to={location.pathname=="/blastinfo/" ? "/blastinfo/listado_pokemon" : location.pathname=="/blastinfo/listado_pokemon" ?
         "/blastinfo/listado_pokemon" : location.pathname=="/blastinfo/listado_movimiento" ?
          "/blastinfo/listado_movimiento" : location.pathname=="/blastinfo/listado_habilidad" ?
          "/blastinfo/listado_habilidad" : "/blastinfo/listado_pokemon" } 
          state={{ url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1500", 
          identidad:"pokemon", 
          buscar:busqueda}} className={encabezado ? 'buscador-encabezado__boton' : 'buscador__boton'}>
            <img className={encabezado ? 'buscador-encabezado__boton__imagen' : 'buscador__boton__imagen'} src={Buscador}/>
        </Link>

    </form>

  );    
}

export default Barra_buscadora;