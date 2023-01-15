import React from 'react';
import '../hojas-de-estilo/layout/Contacto.sass';
function Contacto({  }) {
  return (

         <form className="cuerpo cuerpo--contacto">
            
            <section className="cuerpo--contacto__titulo">
                Contacto
            </section>
            <section className="cuerpo--contacto__datos">
                    <input className="cuerpo--contacto__datos__nombre" type="text" placeholder="Nombre..."/> 
                    <input className="cuerpo--contacto__datos__correo" type="text" placeholder="Correo electrónico..."/> 
                    <textarea className="cuerpo--contacto__datos__descripcion"></textarea>
            </section>
            <button className="cuerpo cuerpo--contacto__enviar">Enviar</button>
        </form>   


  );    
}

export default Contacto;