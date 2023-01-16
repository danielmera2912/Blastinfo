import React, {useState, useEffect} from 'react';
import '../hojas-de-estilo/layout/Contacto.sass';
function Contacto({  }) {
  const expresionNombre = /^[a-zA-Z]+$/
  const expresionCorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
  const expresionDescripcion = /^[\s\S]{1,25}$/
  const [errorRegistro, setErrorRegistro] = useState(null)
  const [validacionRegistro, setValidacionRegistro] = useState(true)
  const [textCorreo, setTextCorreo] = useState("")
  const [textNombre, setTextNombre] = useState("")
  const [textDescripcion, setTextDescripcion] = useState("")
  const cambiarTextoCorreo = (e) => {
    setTextCorreo(e.target.value);
  }
  const cambiarTextoNombre = (e) => {
    setTextNombre(e.target.value);
  }
  const cambiarTextoDescripcion = (e) => {
    setTextDescripcion(e.target.value);
  }
  const validar = () => {
    if(expresionNombre.test(textNombre)){
      if(expresionCorreo.test(textCorreo)){
          if(expresionDescripcion.test(textDescripcion)){
              alert("¡Gracias por contactar con nosotros! Te responderemos por el correo introducido en el formulario de la forma más rápida posible.")
            }else{
              setValidacionRegistro(false);
              setErrorRegistro("Escribe al menos un carácter y menos de 25.")
            }
          }else{
            setValidacionRegistro(false);
            setErrorRegistro("Correo electronico incorrecto, necesitas tener un patrón correcto, como: usuario@gmail.com")
          }
      }else{
        setValidacionRegistro(false);
        setErrorRegistro("Nombre incorrecto, escribe al menos un caracter")
      }
    }
    
  
  return (

         <form className="cuerpo cuerpo--contacto">
            
            <section className="cuerpo--contacto__titulo">
                Contacto
            </section>
            <section className="cuerpo--contacto__datos">
            <div className={validacionRegistro ? 'cuerpo--contacto__datos__informativo1' : "cuerpo--contacto__datos__informativo1--visible"} >{errorRegistro}</div>
                    <input onChange={cambiarTextoNombre} value={textNombre} className="cuerpo--contacto__datos__nombre" type="text" placeholder="Nombre..."/> 
                    <input onChange={cambiarTextoCorreo} value={textCorreo} className="cuerpo--contacto__datos__correo" type="text" placeholder="Correo electrónico..."/> 
                    <textarea onChange={cambiarTextoDescripcion} value={textDescripcion} className="cuerpo--contacto__datos__descripcion"></textarea>
            </section>
            <a onClick={validar} className="cuerpo cuerpo--contacto__enviar">Enviar</a>
        </form>   


  );    
}

export default Contacto;