import React from 'react';
import '../hojas-de-estilo/layout/Portada.sass';
import Logo from '../images/logo.svg';
import Barra_buscadora from './Barra_buscadora';
function Inicio({  }) {
  return (
    <main className="cuerpo cuerpo--fondo">
            <img className="cuerpo__logo" src={Logo}/>
            <h1 className="cuerpo__titulo">Blastinfo</h1>
            <h2 className="cuerpo__subtitulo">Busca a tus Pokémon favoritos</h2>
            <Barra_buscadora encabezado={false}/>
            
        </main>
  );    
}

export default Inicio;