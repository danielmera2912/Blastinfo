import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import '../hojas-de-estilo/componentes/Habilidad.sass';

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
    
    <main className="cuerpo cuerpo--articulo--habilidad">
    <section className="cuerpo--articulo--habilidad__titulo">
        {nombre_nuevo}
    </section>

    <section className="cuerpo--articulo--habilidad__informacion">
        <header className="cuerpo--articulo--habilidad__informacion__titulo">Descripciones</header>

        {
          habilidad!=null && [...habilidad.flavor_text_entries].map(item => {
            return( 
              item.language.name=="es" && <content className="cuerpo--articulo--habilidad__informacion__descripcion">- {item.flavor_text}</content> 
          )}) 
        }
        
    </section>      

</main>
    

  );    
}

export default Habilidad;