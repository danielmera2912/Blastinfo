import React, {useState, useEffect} from 'react';
import { Routes, Link } from "react-router-dom";
import '../hojas-de-estilo/componentes/Caja_pokemon.sass';
/**
 * Componente que representa la caja de cada movimiento de la lista de movimientos
 *
 * @component
 * @example
 * const name = "pikachu"
 * const front = "pikachu_front.png"
 * const back = "pikachu_back.png"
 * return (
 *   <Caja_pokemon name={name} front={front} back={back}/>
 * )
 */
function Caja_pokemon({ name, front, back }) {
    const [pokemon, setPokemon] = useState(null)
    /**
     * useEffect provoca la llamada de obtenerDatos cada vez que se reinicia la página
     */
    useEffect(() => {
      obtenerDatos();
    }, [])
    /**
     * url de la API llamando al Pokémon en concreto
     */
    const url = "https://pokeapi.co/api/v2/pokemon/"+name;
    /**
     * obtenerDatos guarda el array de los datos del Pokémon de la API
     */
    const obtenerDatos =  async () => {
        const data = await fetch(url);
        const pokemon= await data.json(url);
        setPokemon(pokemon);
    }
     /**
     * nombre del Pokémon limpio, con la primera letra en mayúscula
     */
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