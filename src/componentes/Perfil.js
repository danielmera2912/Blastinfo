import React, {useState, useEffect} from 'react';
import '../hojas-de-estilo/componentes/Perfil.sass';
import Avatar from "../images/icons/avatar.png";
import Modificar from './sesion/Modificar';
/**
 * Componente que representa el perfil
 *
 * @component
 * @example
 * return (
 *   <Perfil nombreUser={nombreUser} correoUser={correoUser} fechaUser={fechaUser} descripcionUser={descripcionUser}/>
 * )
 */
function Perfil({ }) {
    const [abierto, setAbierto] = useState(false)
    const [nombreUser, setNombreUser] = useState("JuanPerez")
    const [correoUser, setCorreoUser] = useState("juanpe@gmail.com")
    const [fechaUser, setFechaUser] = useState("2007-09-29")
    const [descripcionUser, setDescripcionUser] = useState("Soy un chico muy fan de Pokémon y me encanta comprarme los nuevos videojuegos que salen, desde pequeño pequeño empecé a comprarme los juegos empezando por el pokemon rojo")
     /**
     * función que cambia el valor de abierto
     */
    const abrir_registrar = () => {
        setAbierto(true)
      }
  return (

    <main class="cuerpo cuerpo--perfil">
    <section class="cuerpo--perfil__avatar">
        <img class="cuerpo--perfil__avatar__imagen" src={Avatar}/>
        <a onClick={abrir_registrar} class="cuerpo--perfil__avatar__editar">
            Editar Perfil
        </a>
    </section>

    <section class="cuerpo--perfil__nombre">
            <div class="cuerpo--perfil__nombre__pregunta">Nombre de Usuario</div>
            <div class="cuerpo--perfil__nombre__respuesta">{nombreUser}</div>
    </section>

    <section class="cuerpo--perfil__nick">
        <div class="cuerpo--perfil__nick__pregunta">Correo Electrónico</div>
        <div class="cuerpo--perfil__nick__respuesta">{correoUser}</div>
    </section>

    <section class="cuerpo--perfil__pkmFavorito">
        <div class="cuerpo--perfil__pkmFavorito__pregunta">Fecha de nacimiento</div>
        <div class="cuerpo--perfil__pkmFavorito__respuesta">{fechaUser}</div>
    </section>

    <section class="cuerpo--perfil__descripcion">
        <header class="cuerpo--perfil__descripcion__titulo">Descripción</header>
        <content class="cuerpo--perfil__descripcion__contenido">{descripcionUser}</content>
    </section>
    <Modificar abierto={abierto} setAbierto={setAbierto} nombreUser={nombreUser} correoUser={correoUser} fechaUser={fechaUser} descripcionUser={descripcionUser}/>
</main>


  );    
}

export default Perfil;