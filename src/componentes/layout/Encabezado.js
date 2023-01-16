import React from 'react';
import '../../hojas-de-estilo/layout/Encabezado.sass';
import Logo from '../../images/logo.svg';
import Barra_buscadora from '../Barra_buscadora';
import {useLocation} from 'react-router-dom';
import { Routes, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

function Encabezado({paginaActual }) {
  const { pathname, hash, key } = useLocation();
  let portada;
  if(pathname == "/"){
    portada = false;
    
  }else{
    portada = true;
  }
  
  return (
    
    <header className={portada ? 'encabezado encabezado--normal' : 'encabezado encabezado--portada'}>
      {portada==true && 
        <a href="/">
            <img className="encabezado__lista__logo" src= {Logo}/>
        </a>
      }
        <nav className="encabezado__navegador">
            <ul className="encabezado__lista">
                <li><Link to="/listado_pokemon" state={{ url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1600",  identidad:"todo"}} className="encabezado__lista__enlace">Pokémon</Link></li>
                <li><Link to="/listado_movimiento" state={{ url: "https://pokeapi.co/api/v2/move?offset=0&limit=1200",  identidad:"movimiento"}} className="encabezado__lista__enlace">Movimientos</Link></li>
                <li><Link to="/listado_habilidad" state={{ url: "https://pokeapi.co/api/v2/ability?offset=0&limit=500",  identidad:"habilidad"}} className="encabezado__lista__enlace">Habilidades</Link></li>
            </ul>
        </nav>
        {portada==true && 
        <Barra_buscadora encabezado={true}/>
        }
        
    </header>

  );    
}

export default Encabezado;