import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import '../hojas-de-estilo/componentes/Pokemon.sass';
import bug from "../images/Tipos/bug.png";
import dark from "../images/Tipos/dark.png";
import dragon from "../images/Tipos/dragon.png";
import electric from "../images/Tipos/electric.png";
import fairy from "../images/Tipos/fairy.png";
import fighting from "../images/Tipos/fighting.png";
import fire from "../images/Tipos/fire.png";
import flying from "../images/Tipos/flying.png";
import ghost from "../images/Tipos/ghost.png";
import grass from "../images/Tipos/grass.png";
import ground from "../images/Tipos/ground.png";
import ice from "../images/Tipos/ice.png";
import normal from "../images/Tipos/normal.png";
import poison from "../images/Tipos/poison.png";
import psychic from "../images/Tipos/psychic.png";
import rock from "../images/Tipos/rock.png";
import steel from "../images/Tipos/steel.png";
import water from "../images/Tipos/water.png";
/**
 * Componente que representa el Pokémon
 *
 * @component
 * @example
 * return (
 *   <Pokemon nombreNuevo={nombreNuevo}/>
 * )
 */
function Pokemon() {
    /**
     * name Location
     */
    const location = useLocation()
    /**
     * nombre del Pokémon
     */
    const { name } = location.state;
    /**
     * nombre del Pokémon limpio, con la primera letra en mayúscula
     */
    let nombre_nuevo=name;
    if(nombre_nuevo!=null){
        nombre_nuevo = nombre_nuevo.charAt(0).toUpperCase() + nombre_nuevo.slice(1);
    }
    /**
     * url de la API llamando al Pokemon deseado
     */
    const url = "https://pokeapi.co/api/v2/pokemon/"+name;
    const [pokemon, setPokemon] = useState(null)
     /**
     * useEffect provoca la llamada de obtenerDatos cada vez que se reinicia la página
     */
    useEffect(() => {
        obtenerDatos();
      }, [])
    /**
     * obtenerDatos guarda el array de los Pokémon con los resultados de la API
     */
    const obtenerDatos =  async () => {
      const data = await fetch(url);
      const pokemon= await data.json();
      setPokemon(pokemon);
      
    }


    
    
   
  return (
    
    <main className="cuerpo cuerpo--articulo">     
      {
        pokemon!=null &&
            <div className="cuerpo--articulo__contenedor">

                <section className="cuerpo--articulo__titulo">
                    {nombre_nuevo}
                </section>

                <section className="cuerpo--articulo__avatar">
                    <img className="cuerpo--articulo__avatar__imagen" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+pokemon.id+".png"}/>
                </section>

                <section className="cuerpo--articulo__sprites">
                        <img className="cuerpo--articulo__sprites__imagen" src={pokemon.sprites.front_default}/>
                        <img className="cuerpo--articulo__sprites__imagen" src={pokemon.sprites.back_default}/>
                </section>
                <section className="cuerpo--articulo__movimientos">
                    <div className="cuerpo--articulo__movimientos__titulo">Movimientos</div>
                    <div className="cuerpo--articulo__movimientos__movimiento1">
                    {
                    pokemon.moves[0]!= null && pokemon.moves[0].move.name.length>0 && <div className="cuerpo--articulo__movimientos__movimiento1__elementosNombre">{pokemon.moves[0].move.name}</div>
                }
                {
                    pokemon.moves[1]!= null && pokemon.moves[1].move.name.length>0 && <div className="cuerpo--articulo__movimientos__movimiento1__elementosNombre">{pokemon.moves[1].move.name}</div>
                }
                {
                    pokemon.moves[2]!= null && pokemon.moves[2].move.name.length>0 && <div className="cuerpo--articulo__movimientos__movimiento1__elementosNombre">{pokemon.moves[2].move.name}</div>
                }
                {
                    pokemon.moves[3]!= null && pokemon.moves[3].move.name.length>0 && <div className="cuerpo--articulo__movimientos__movimiento1__elementosNombre">{pokemon.moves[3].move.name}</div>
                }
                   
                    </div>
                </section>
                
                

                            

                    

                <section className="cuerpo--articulo__extraInfo">
 
                            <div className="cuerpo--articulo__extraInfo__habilidad">
                        <div className="cuerpo--articulo__extraInfo__habilidad__titulo">Habilidades</div>
                        <div className="cuerpo--articulo__extraInfo__habilidad__datos">
                            {
                                pokemon.abilities[0]!= null && pokemon.abilities[0].ability.name.length>0 && <div className="cuerpo--articulo__extraInfo__habilidad__datos__habilidad1">{pokemon.abilities[0].ability.name}</div>
                            }
                            {
                                pokemon.abilities[1]!= null && pokemon.abilities[1].ability.name.length>0 && <div className="cuerpo--articulo__extraInfo__habilidad__datos__habilidad1">{pokemon.abilities[1].ability.name}</div>
                            }
                            {
                                pokemon.abilities[2]!= null && pokemon.abilities[2].ability.name.length>0 && <div className="cuerpo--articulo__extraInfo__habilidad__datos__habilidad1">{pokemon.abilities[2].ability.name}</div>
                            }
                            {
                                pokemon.abilities[3]!= null && pokemon.abilities[3].ability.name.length>0 && <div className="cuerpo--articulo__extraInfo__habilidad__datos__habilidad1">{pokemon.abilities[3].ability.name}</div>
                            }
                        </div>
                    </div>

                    


                    <div className="cuerpo--articulo__extraInfo__tipo">
                        <div className="cuerpo--articulo__extraInfo__tipo__titulo">Tipo </div>
                        <div className="cuerpo--articulo__extraInfo__tipo__contenido">
                            {
                                pokemon.types[0].type.name=="bug" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={bug}/>
                            }
                            {
                                pokemon.types[0].type.name=="dark" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={dark}/>
                            }
                            {
                                pokemon.types[0].type.name=="dragon" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={dragon}/>
                            }
                            {
                                pokemon.types[0].type.name=="electric" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={electric}/>
                            }
                            {
                                pokemon.types[0].type.name=="fairy" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={fairy}/>
                            }
                            {
                                pokemon.types[0].type.name=="fighting" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={fighting}/>
                            }
                            {
                                pokemon.types[0].type.name=="fire" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={fire}/>
                            }
                            {
                                pokemon.types[0].type.name=="flying" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={flying}/>
                            }
                            {
                                pokemon.types[0].type.name=="ghost" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={ghost}/>
                            }
                            {
                                pokemon.types[0].type.name=="grass" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={grass}/>
                            }
                            {
                                pokemon.types[0].type.name=="ground" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={ground}/>
                            }
                            {
                                pokemon.types[0].type.name=="ice" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={ice}/>
                            }
                            {
                                pokemon.types[0].type.name=="normal" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={normal}/>
                            }
                            {
                                pokemon.types[0].type.name=="poison" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={poison}/>
                            }
                            {
                                pokemon.types[0].type.name=="psychic" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={psychic}/>
                            }
                            {
                                pokemon.types[0].type.name=="rock" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={rock}/>
                            }
                            {
                                pokemon.types[0].type.name=="steel" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={steel}/>
                            }
                            {
                                pokemon.types[0].type.name=="water" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={water}/>
                            }
                            


                            {
                                pokemon.types[1]!= null && pokemon.types[1].type.name.length>0 && pokemon.types[1].type.name=="bug" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={bug}/>
                            }
                            {
                                pokemon.types[1]!= null && pokemon.types[1].type.name.length>0 && pokemon.types[1].type.name=="dark" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={dark}/>
                            }
                            {
                                pokemon.types[1]!= null && pokemon.types[1].type.name.length>0 && pokemon.types[1].type.name=="dragon" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={dragon}/>
                            }
                            {
                                pokemon.types[1]!= null && pokemon.types[1].type.name.length>0 && pokemon.types[1].type.name=="electric" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={electric}/>
                            }
                            {
                                pokemon.types[1]!= null && pokemon.types[1].type.name.length>0 && pokemon.types[1].type.name=="fairy" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={fairy}/>
                            }
                            {
                                pokemon.types[1]!= null && pokemon.types[1].type.name.length>0 && pokemon.types[1].type.name=="fighting" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={fighting}/>
                            }
                            {
                                pokemon.types[1]!= null && pokemon.types[1].type.name.length>0 && pokemon.types[1].type.name=="fire" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={fire}/>
                            }
                            {
                                pokemon.types[1]!= null && pokemon.types[1].type.name.length>0 && pokemon.types[1].type.name=="flying" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={flying}/>
                            }
                            {
                                pokemon.types[1]!= null && pokemon.types[1].type.name.length>0 && pokemon.types[1].type.name=="ghost" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={ghost}/>
                            }
                            {
                                pokemon.types[1]!= null && pokemon.types[1].type.name.length>0 && pokemon.types[1].type.name=="grass" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={grass}/>
                            }
                            {
                                pokemon.types[1]!= null && pokemon.types[1].type.name.length>0 && pokemon.types[1].type.name=="ground" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={ground}/>
                            }
                            {
                                pokemon.types[1]!= null && pokemon.types[1].type.name.length>0 && pokemon.types[1].type.name=="ice" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={ice}/>
                            }
                            {
                                pokemon.types[1]!= null && pokemon.types[1].type.name.length>0 && pokemon.types[1].type.name=="normal" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={normal}/>
                            }
                            {
                                pokemon.types[1]!= null && pokemon.types[1].type.name.length>0 && pokemon.types[1].type.name=="poison" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={poison}/>
                            }
                            {
                                pokemon.types[1]!= null && pokemon.types[1].type.name.length>0 && pokemon.types[1].type.name=="psychic" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={psychic}/>
                            }
                            {
                                pokemon.types[1]!= null && pokemon.types[1].type.name.length>0 && pokemon.types[1].type.name=="rock" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={rock}/>
                            }
                            {
                                pokemon.types[1]!= null && pokemon.types[1].type.name.length>0 && pokemon.types[1].type.name=="steel" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={steel}/>
                            }
                            {
                                pokemon.types[1]!= null && pokemon.types[1].type.name.length>0 && pokemon.types[1].type.name=="water" && <img className="cuerpo--articulo__extraInfo__tipo__contenido__imagen" src={water}/>
                            }
                        </div>
                    </div>
                </section>
            </div>
            }
        </main>
    

  );    
}

export default Pokemon;