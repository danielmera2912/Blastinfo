import React from 'react';
import '../../hojas-de-estilo/layout/Encabezado.sass';
import Logo from '../../images/logo.svg';
import Barra_buscadora from '../Barra_buscadora';
import {useLocation} from 'react-router-dom';
import { Routes, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';


/**
 * Componente que representa el encabezado de la página web
 *
 * @component
 * @example
 * return (
 *   <Encabezado/>
 * )
 */
function Encabezado({ }) {
  /**
  * name Location
  */
  const { pathname, hash, key } = useLocation();
  /**
  * boolean que dependerá de si tiene portada o no
  */
  let portada;
  if(pathname == "/blastinfo/"){
    portada = false;
    
  }else{
    portada = true;
  }
  
  return (
    
    <header className={portada ? 'encabezado encabezado--normal' : 'encabezado encabezado--portada'}>
      {portada==true && 
        <a href="/blastinfo/">
            <img className="encabezado__lista__logo" src= {Logo}/>
        </a>
      }
        <nav className="encabezado__navegador">
            <ul className="encabezado__lista">
                <li><Link to="/blastinfo/listado_pokemon" state={{ url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1500",  identidad:"todo"}} className={pathname=="/blastinfo/listado_pokemon" ? 'encabezado__lista__enlace--actual' : 'encabezado__lista__enlace'} >Pokémon</Link></li>
                <li><Link to="/blastinfo/listado_movimiento" state={{ url: "https://pokeapi.co/api/v2/move?offset=0&limit=1200",  identidad:"movimiento"}} className={pathname=="/blastinfo/listado_movimiento" ? 'encabezado__lista__enlace--actual' : 'encabezado__lista__enlace'}>Movimientos</Link></li>
                <li><Link to="/blastinfo/listado_habilidad" state={{ url: "https://pokeapi.co/api/v2/ability?offset=0&limit=500",  identidad:"habilidad"}} className={pathname=="/blastinfo/listado_habilidad" ? 'encabezado__lista__enlace--actual' : 'encabezado__lista__enlace'}>Habilidades</Link></li>
            </ul>
        </nav>
        {portada==true && 
        <Barra_buscadora encabezado={true}/>
        }
        
    </header>

  );    
}

export default Encabezado;