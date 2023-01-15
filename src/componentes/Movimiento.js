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

function Movimiento() {
    const location = useLocation()
    const { name } = location.state;
    let nombre_nuevo=name;
    if(nombre_nuevo!=null){
        nombre_nuevo = nombre_nuevo.charAt(0).toUpperCase() + nombre_nuevo.slice(1);
    }
    const url = "https://pokeapi.co/api/v2/move/"+name;
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
    
    <main class="cuerpo cuerpo--articulo--movimiento">
            <section class="cuerpo--articulo--movimiento__titulo">
                {nombre_nuevo}
            </section>
            {/* flavor_text_entries.flavor_text */}
            <section class="cuerpo--articulo--movimiento__informacion">
                <header class="cuerpo--articulo--movimiento__informacion__titulo">Descripción</header>
                <content class="cuerpo--articulo--movimiento__informacion__datos">
                    <img class="cuerpo--articulo--movimiento__informacion__datos__generacion" src="assets/images/Generaciones/primera_generacion.png"/>
                    <img class="cuerpo--articulo--movimiento__informacion__datos__movimiento" src="assets/images/Movimientos/Tipo_especial.gif"/>
                    <img class="cuerpo--articulo--movimiento__informacion__datos__tipo" src="assets/images/Tipos/Normal_Pokemon.svg"/>
                </content>
                <content class="cuerpo--articulo--movimiento__informacion__descripcion">El usuario copia la especie, el peso, el tipo, la habilidad, las estadísticas calculadas (excepto HP) y los movimientos del objetivo. Todos los movimientos copiados tendrán 5 PP restantes. Los IV se copian con el propósito de poder oculto, pero las estadísticas no se vuelven a calcular.
                    La banda de elección, la bufanda de elección y las especificaciones de elección permanecen vigentes y el usuario debe seleccionar un nuevo movimiento.
                    Este movimiento no puede ser copiado por un movimiento de espejo, ni forzado por un bis.</content>
            </section>
        
    </main>
    

  );    
}

export default Movimiento;