import React, {useState, useEffect} from 'react';
import { Routes, Link } from "react-router-dom";
import '../hojas-de-estilo/componentes/Caja_pokemon.sass';
function Caja_pokemon({ name, front, back }) {
    const [pokemon, setPokemon] = useState(null)
    useEffect(() => {
      obtenerDatos();
    }, [])
    const url = "https://pokeapi.co/api/v2/pokemon/"+name;
    const obtenerDatos =  async () => {
        const data = await fetch(url);
        const pokemon= await data.json(url);
        setPokemon(pokemon);
    }
    let id_pokemon = null;
    if(pokemon != null){
        id_pokemon = pokemon.id
        
    }    
    let nombre_nuevo = name;
    if(nombre_nuevo!=null){
        nombre_nuevo = nombre_nuevo.charAt(0).toUpperCase() + nombre_nuevo.slice(1);
    }
    
    
  return (
    
    <Link to="/pokemon" state={{name:name}}>
        <article className="cuerpo__listado__items">
            <div className="cuerpo__listado__items__imagenes">
                <img className="cuerpo__listado__items__imagenes__imagen" src={front}/>
                <img className="cuerpo__listado__items__imagenes__imagen" src={back}/>
            </div>
            <div className="cuerpo__listado__items__texto">
                {nombre_nuevo}
            </div>
        </article>
    </Link>


  );    
}

export default Caja_pokemon;