import React, {useState, useEffect} from 'react';
import '../hojas-de-estilo/layout/Portada.sass';
import Logo from '../images/logo.svg';
import Barra_buscadora from './Barra_buscadora';
/**
 * Componente que representa la portada
 *
 * @component
 * @example
 * return (
 *   <Inicio/>
 * )
 */
function Inicio({  }) {
  const [efectoActivado, setEfectoActivado] = useState(false)
   /**
   * función que al ser llamado provoca un efecto
   */
  const efecto = () => {
    setEfectoActivado(true)
  }
  return (
    <main className="cuerpo cuerpo--fondo">
            <img className={efectoActivado ? 'cuerpo__logo--efecto' : "cuerpo__logo"} onDoubleClick={efecto} src={Logo}/>
            <h1 className="cuerpo__titulo">Blastinfo</h1>
            <h2 className="cuerpo__subtitulo">Busca a tus Pokémon favoritos</h2>
            <Barra_buscadora encabezado={false}/>
            
        </main>
  );    
}

export default Inicio;