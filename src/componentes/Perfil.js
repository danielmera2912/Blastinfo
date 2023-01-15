import React from 'react';
import '../hojas-de-estilo/componentes/Perfil.sass';
import Avatar from "../images/icons/avatar.png";
function Perfil({ }) {

  return (

    <main class="cuerpo cuerpo--perfil">
    <section class="cuerpo--perfil__avatar">
        <img class="cuerpo--perfil__avatar__imagen" src={Avatar}/>
        <a href="#" class="cuerpo--perfil__avatar__editar">
            Editar Perfil
        </a>
    </section>

    <section class="cuerpo--perfil__nombre">
            <div class="cuerpo--perfil__nombre__pregunta">Nombre</div>
            <div class="cuerpo--perfil__nombre__respuesta">Juan Perez</div>
    </section>

    <section class="cuerpo--perfil__nick">
        <div class="cuerpo--perfil__nick__pregunta">Nick</div>
        <div class="cuerpo--perfil__nick__respuesta">Juanpe</div>
    </section>

    <section class="cuerpo--perfil__pkmFavorito">
        <div class="cuerpo--perfil__pkmFavorito__pregunta">Pokémon favorito</div>
        <div class="cuerpo--perfil__pkmFavorito__respuesta">Infernape</div>
    </section>

    <section class="cuerpo--perfil__descripcion">
        <header class="cuerpo--perfil__descripcion__titulo">Descripción</header>
        <content class="cuerpo--perfil__descripcion__contenido">Soy un chico muy fan de Pokémon y me encanta comprarme los nuevos videojuegos que salen,
            desde pequeño pequeño empecé a comprarme los juegos empezando por el pokemon rojo
            ya después me compré el zafiro y ya en la epoca de la ds dude entre comprarme el perla o el diamante
            pero finalmente me compre el perla y tenia un chimchar que termino siendo un infernape
            y por ese motivo infernape es mi pokemon favorito</content>
    </section>
</main>


  );    
}

export default Perfil;