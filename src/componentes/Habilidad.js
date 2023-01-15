import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import '../hojas-de-estilo/componentes/Habilidad.sass';
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

function Habilidad() {
    const location = useLocation()
    const { name } = location.state;
    let nombre_nuevo=name;
    if(nombre_nuevo!=null){
        nombre_nuevo = nombre_nuevo.charAt(0).toUpperCase() + nombre_nuevo.slice(1);
    }
    const url = "https://pokeapi.co/api/v2/ability/"+name;
    const [habilidad, setHabilidad] = useState(null)
    useEffect(() => {
        obtenerDatos();
      }, [])
    const obtenerDatos =  async () => {
      const data = await fetch(url);
      const habilidad= await data.json();
      setHabilidad(habilidad);
      
    }


    
    
   
  return (
    
    <main class="cuerpo cuerpo--articulo--habilidad">
    <section class="cuerpo--articulo--habilidad__titulo">
        {nombre_nuevo}
    </section>

    <section class="cuerpo--articulo--habilidad__informacion">
        <header class="cuerpo--articulo--habilidad__informacion__titulo">Descripción</header>

        {
            console.log(habilidad) && habilidad!=null && habilidad.language.name=="es" && <content class="cuerpo--articulo--habilidad__informacion__descripcion">{habilidad.flavor_text_entries.flavor_text}</content>
        }
        
    </section>      

</main>
    

  );    
}

export default Habilidad;