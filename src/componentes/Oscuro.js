import React from 'react';
function Oscuro({  }) {
    // al pulsar el botón del sol se realizará una función
    document.getElementById('id-sol').onclick = function(){
        // se recoge las páginas
            let body = document.getElementsByClassName('pagina')
            // por cada página, se remueve el modo "dark-mode" en caso de que estuviese añadido
            for (const elemento of body) {
            elemento.classList.remove('dark-mode')
            }
            // se realizan cambios al botón del modo oscuro
            document.getElementById('id-luna').classList.remove('active')
            this.classList.add('active')
        }
    
    // al pulsar el botón de la luna se realizará una función
    document.getElementById('id-luna').onclick = function(){
        // se recoge las páginas
        let body = document.getElementsByClassName('pagina')
        // por cada página, se añade el modo "dark-mode" en caso de que no estuviese añadido ya
        for (const elemento of body) {
        elemento.classList.add('dark-mode')
        }
        // se realizan cambios al botón del modo oscuro
        document.getElementById('id-sol').classList.remove('active')
        this.classList.add('active')
    }
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
  
export default Oscuro;
