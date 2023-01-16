import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import '../hojas-de-estilo/componentes/Movimiento.sass';
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


import fisico from "../images/Movimientos/Tipo_fisico.gif";
import especial from "../images/Movimientos/Tipo_especial.gif";
import estado from "../images/Movimientos/Tipo_estado.gif";

function Movimiento() {
    const location = useLocation()
    const { name } = location.state;
    let nombre_nuevo=name;
    if(nombre_nuevo!=null){
        nombre_nuevo = nombre_nuevo.charAt(0).toUpperCase() + nombre_nuevo.slice(1);
    }
    const url = "https://pokeapi.co/api/v2/move/"+name;
    const [movimiento, setMovimiento] = useState(null)
    useEffect(() => {
        obtenerDatos();
      }, [])
    const obtenerDatos =  async () => {
      const data = await fetch(url);
      const movimiento= await data.json();
      setMovimiento(movimiento);
      
    }


    
    
   
  return (
    
    <main className="cuerpo cuerpo--articulo--movimiento">
            <section className="cuerpo--articulo--movimiento__titulo">
                {nombre_nuevo}
            </section>
            <section className="cuerpo--articulo--movimiento__informacion">
                <header className="cuerpo--articulo--movimiento__informacion__titulo">Descripciones</header>
                <content className="cuerpo--articulo--movimiento__informacion__datos">
                      {
                        movimiento!=null && movimiento.type.name=="bug" && <img className="cuerpo--articulo--movimiento__informacion__datos__generacion" src={bug}/>
                      }
                      {
                        movimiento!=null &&  movimiento.type.name=="dark" && <img className="cuerpo--articulo--movimiento__informacion__datos__generacion" src={dark}/>
                      }
                      {
                        movimiento!=null &&  movimiento.type.name=="dragon" && <img className="cuerpo--articulo--movimiento__informacion__datos__generacion" src={dragon}/>
                      }
                      {
                         movimiento!=null && movimiento.type.name=="electric" && <img className="cuerpo--articulo--movimiento__informacion__datos__generacion" src={electric}/>
                      }
                      {
                        movimiento!=null &&  movimiento.type.name=="fairy" && <img className="cuerpo--articulo--movimiento__informacion__datos__generacion" src={fairy}/>
                      }
                      {
                        movimiento!=null &&  movimiento.type.name=="fighting" && <img className="cuerpo--articulo--movimiento__informacion__datos__generacion" src={fighting}/>
                      }
                      {
                        movimiento!=null &&  movimiento.type.name=="fire" && <img className="cuerpo--articulo--movimiento__informacion__datos__generacion" src={fire}/>
                      }
                      {
                        movimiento!=null &&  movimiento.type.name=="flying" && <img className="cuerpo--articulo--movimiento__informacion__datos__generacion" src={flying}/>
                      }
                      {
                        movimiento!=null &&  movimiento.type.name=="ghost" && <img className="cuerpo--articulo--movimiento__informacion__datos__generacion" src={ghost}/>
                      }
                      {
                        movimiento!=null &&  movimiento.type.name=="grass" && <img className="cuerpo--articulo--movimiento__informacion__datos__generacion" src={grass}/>
                      }
                      {
                        movimiento!=null &&  movimiento.type.name=="ground" && <img className="cuerpo--articulo--movimiento__informacion__datos__generacion" src={ground}/>
                      }
                      {
                        movimiento!=null &&  movimiento.type.name=="ice" && <img className="cuerpo--articulo--movimiento__informacion__datos__generacion" src={ice}/>
                      }
                      {
                        movimiento!=null &&  movimiento.type.name=="normal" && <img className="cuerpo--articulo--movimiento__informacion__datos__generacion" src={normal}/>
                      }
                      {
                        movimiento!=null &&  movimiento.type.name=="poison" && <img className="cuerpo--articulo--movimiento__informacion__datos__generacion" src={poison}/>
                      }
                      {
                        movimiento!=null &&  movimiento.type.name=="psychic" && <img className="cuerpo--articulo--movimiento__informacion__datos__generacion" src={psychic}/>
                      }
                      {
                        movimiento!=null &&  movimiento.type.name=="rock" && <img className="cuerpo--articulo--movimiento__informacion__datos__generacion" src={rock}/>
                      }
                      {
                        movimiento!=null &&  movimiento.type.name=="steel" && <img className="cuerpo--articulo--movimiento__informacion__datos__generacion" src={steel}/>
                      }
                      {
                        movimiento!=null &&  movimiento.type.name=="water" && <img className="cuerpo--articulo--movimiento__informacion__datos__generacion" src={water}/>
                      }


                      {
                        movimiento!=null && movimiento.damage_class.name=="physical" && <img className="cuerpo--articulo--movimiento__informacion__datos__movimiento" src={fisico}/>
                      }
                      {
                        movimiento!=null &&  movimiento.damage_class.name=="special" && <img className="cuerpo--articulo--movimiento__informacion__datos__movimiento" src={especial}/>
                      }
                      {
                        movimiento!=null &&  movimiento.damage_class.name=="status" && <img className="cuerpo--articulo--movimiento__informacion__datos__movimiento" src={estado}/>
                      }


                </content>
                {
                  movimiento!=null && [...movimiento.flavor_text_entries].map(item => {
                    return( 
                      item.language.name=="es" && <content className="cuerpo--articulo--movimiento__informacion__descripcion">- {item.flavor_text}</content> 
                  )}) 
                }

            </section>
        
    </main>
    

  );    
}

export default Movimiento;