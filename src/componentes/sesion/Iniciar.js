import React, {useState, useEffect} from 'react';
import '../../hojas-de-estilo/sesion/Iniciar.sass';
import '../../hojas-de-estilo/sesion/Registrar.sass';
import '../../hojas-de-estilo/sesion/AccesoPerfil.sass';
import Cerrar from "../../images/icons/cerrar.svg";
import Avatar from "../../images/icons/avatar.png";
/**
 * Componente que representa iniciar sesión, registrar sesión y la caja para acceder al perfil
 *
 * @component
 * @example
 * const props.activado = true
 * const props.setActivado(false) = function => props.activado=false 
 * const props.activado2 = true
 * const props.setActivado2(false) = function => props.activado2=false 
 * const props.activado = true
 * const props.setActivado3(false) = function => props.activado3=false 
 * const props.sesionActivada = true
 * const props.setsesionActivada(false) = function => props.sesionActivada=false 
 * return (
 *   <Iniciar textUser={textUser} textPass={textPass} textCorreo={textCorreo} textFecha={textFecha}/>
 * )
 */
function Iniciar(props) {
  /**
  * Expresión Regular del nombre del Usuario
  */
  const expresionUsuario = /^[a-zA-Z]((\.|_|-)?[a-zA-Z0-9]+){3}$/
  /**
  * Expresión Regular de la contraseña Usuario
  */
  const expresionPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
  /**
  * Expresión Regular del correo del Usuario
  */
  const expresionCorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
  const [error, setError] = useState(null)
  const [errorRegistro, setErrorRegistro] = useState(null)
  const [validacion, setValidacion] = useState(true)
  const [validacionRegistro, setValidacionRegistro] = useState(true)
  const [check, setCheck] = useState(false)
  const [textUser, setTextUser] = useState(localStorage.getItem("usuario"))
  const [textPass, setTextPass] = useState(localStorage.getItem("pass"))
  const [textCorreo, setTextCorreo] = useState("")
  const [textFecha, setTextFecha] = useState("")
  const [textUserRegistro, setTextUserRegistro] = useState("")
  const [textPassRegistro, setTextPassRegistro] = useState("")
  /**
   * establece un cambio de texto para el nombre del Usuario
   * @param   {string} e  nuevo nombre para el nombre del Usuario
   */
  const cambiarTextoUsuario = (e) => {
    setTextUser(e.target.value);
  }
  /**
   * establece un cambio de texto para la contraseña del Usuario
   * @param   {string} e  nueva contraseña para el Usuario
   */
  const cambiarTextoPass = (e) => {
    setTextPass(e.target.value);
  }
  /**
   * establece un cambio de texto para el correo del Usuario
   * @param   {string} e  nuevo correo para el Usuario
   */
  const cambiarTextoCorreo = (e) => {
    setTextCorreo(e.target.value);
  }
  /**
   * establece un cambio de texto para el nombre del Usuario en el registro
   * @param   {string} e  nuevo nombre para el Usuario en el registro
   */
  const cambiarTextoUsuarioRegistro = (e) => {
    setTextUserRegistro(e.target.value);
  }
  /**
   * establece un cambio de texto para la contraseña del Usuario en el registro
   * @param   {string} e  nueva contraseña para el Usuario en el registro
   */
  const cambiarTextoPassRegistro = (e) => {
    setTextPassRegistro(e.target.value);
  }
  /**
   * establece un cambio de texto para la fecha del Usuario
   * @param   {string} e  nueva fecha para el Usuario
   */
  const cambiarTextoFecha = (e) => {
    setTextFecha(e.target.value);
  }
  /**
   * establece un cambio de check para recordar los datos del usuario en iniciar sesión
   * @param   {string} e  nuevo check para recordar los datos de iniciar sesión
   */
  const cambiarCheck = (e) => {
    setCheck(e.target.checked);
  }
  /**
   * cierra la caja de iniciar sesión
   */
  const cerrar_iniciar = () => {
    props.setActivado(false);
  }
  /**
   * abre la caja de iniciar sesión
   */
  const abrir_iniciar = () => {
    props.setActivado(true);
  }
  /**
   * cierra la caja de registrar sesión
   */
  const cerrar_registrar = () => {
    props.setActivado2(false);
  }
  /**
   * abre la caja de registrar sesión
   */
  const abrir_registrar = () => {
    props.setActivado2(true);
  }
  /**
   * cierra la caja de perfil de usuaruio
   */
  const cerrar_perfil = () => {
    props.setActivado3(false);
  }
  /**
   * abre la caja de perfil de usuaruio
   */
  const abrir_perfil = () => {
    props.setActivado3(true);
    console.log("perfil abierto")
    localStorage.setItem("conexion",true)
  }
  /**
   * cierra la sesión del usuario, mandando false en conexión para la localStorage
   */
  const cerrar_sesion = () => {
    localStorage.setItem("conexion",false)
  }
  /**
   * establece el inicio de sesión si todos los datos han sido correctos y validados mediante las expresiones regulares
   */
  const iniciarSesion = () => {
    if(expresionUsuario.test(textUser)){
      if(expresionPass.test(textPass)){
        abrir_perfil();
        cerrar_iniciar();
        if(check){
          localStorage.setItem("usuario",textUser)
          localStorage.setItem("pass", textPass)
        }
        
        
      }else{
        setValidacion(false);
        setError("Contraseña incorrecta, necesitas tener entre 8 a 16 caracteres, al menos un dígito, mayúscula y minúscula.")
      }  
    }   
    else{
      setValidacion(false);
      setError("Usuario incorrecto")
    }
  }
  /**
   * función que llama a abrir_registrar y cerrar_sesion
   */
  const registrarSesion = () => {
    abrir_registrar();
    cerrar_iniciar();
  }
  /**
   * establece el registro de sesión si todos los datos han sido correctos y validados mediante las expresiones regulares
   */
  const ir_iniciarSesion = () => {
    let fecha = new Date();
    let anio = fecha.getFullYear();
    let fechaUser = textFecha.substr(0,4)
    let edadUsuario = anio-fechaUser;
    if(expresionUsuario.test(textUserRegistro)){
      if(expresionCorreo.test(textCorreo)){
        if(expresionPass.test(textPassRegistro)){
          if(edadUsuario>13 && edadUsuario <= 120){
            abrir_iniciar();
            cerrar_registrar();
            alert("Registrado correctamente")
          }else{
            setValidacionRegistro(false);
          setErrorRegistro("Fecha incorrecta, comprueba que hayas puesto una fecha de nacimiento válida y además, ser mayor de 13 años.")
          }
          
        }else{
          setValidacionRegistro(false);
          setErrorRegistro("Contraseña incorrecta, necesitas tener entre 8 a 16 caracteres, al menos un dígito, mayúscula y minúscula.")
        }
      }else{
        setValidacionRegistro(false);
        setErrorRegistro("Correo electronico incorrecto, necesitas tener un patrón correcto, como: usuario@gmail.com")
      }
    }else{
      setValidacionRegistro(false);
      setErrorRegistro("Usuario incorrecto")
    }
    
  }
  /**
   * función que llama a abrir_iniciar y cerrar_registrar
   */
  const ir_iniciarSesion2 = () => {   
    abrir_iniciar();
    cerrar_registrar();
  }
  return (
    <div>
    {
      props.activado==true && 
      <div>
      <div class="fondo" onClick={cerrar_iniciar}></div>
       <form className="iniciar_sesion">
      <a href="#" onClick={cerrar_iniciar}><img className="iniciar_sesion__cerrar" src={Cerrar}/></a>
      <tittle className="iniciar_sesion__titulo">Iniciar sesión</tittle>
      
      <section className="iniciar_sesion__caja">
          <div className={validacion ? 'iniciar_sesion__caja__informativo1' : "iniciar_sesion__caja__informativo1--visible"} >{error}</div>
          <input className="iniciar_sesion__caja__elemento" onChange={cambiarTextoUsuario} value={textUser} type="text" placeholder="Usuario..."/> 
          <input className="iniciar_sesion__caja__elemento" onChange={cambiarTextoPass} value={textPass} type="password" placeholder="Contraseña..."/> 
          <label className="iniciar_sesion__caja__recordar"><input onChange={cambiarCheck} type="checkbox" id="check" value="check" checked={check}/> Recordar Cuenta</label>
      </section>
      <section className="iniciar_sesion__boton">
          <a className="iniciar_sesion__boton__opcion iniciar_sesion__boton__opcion--entrar" onClick={iniciarSesion}>Entrar</a>
          <p>o</p>
          <a className="iniciar_sesion__boton__opcion iniciar_sesion__boton__opcion--registrar" onClick={registrarSesion}>Regístrate</a>
      </section>
  </form>
  </div>
    }

    {
      props.activado2==true && <div>
        <div className="fondo" onClick={cerrar_registrar}></div>
        <form className="registrar">
            <a href="#" onClick={cerrar_registrar}><img className="registrar__cerrar" src={Cerrar}/></a>
            <tittle className="registrar__titulo">Registrar</tittle>
            <section className="registrar__caja">
            <div className={validacionRegistro ? 'registrar__caja__informativo1' : "registrar__caja__informativo1--visible"} >{errorRegistro}</div>
                <input className="registrar__caja__elemento" onChange={cambiarTextoUsuarioRegistro} value={textUserRegistro} type="text" placeholder="Usuario..."/>
                <input className="registrar__caja__elemento" onChange={cambiarTextoCorreo} value={textCorreo} type="email" placeholder="Correo electrónico..."/> 
                <input className="registrar__caja__elemento" onChange={cambiarTextoPassRegistro} value={textPassRegistro} type="password" placeholder="Contraseña..."/> 
                <input className="registrar__caja__elemento" onChange={cambiarTextoFecha} value={textFecha} type="date"/>
            </section>
            <section className="registrar__boton">
                <a className="registrar__boton__opcion registrar__boton__opcion--registrar" onClick={ir_iniciarSesion}>Registrar</a>
                <p>o</p>
                <input type="submit" value="Identíficate aquí" className="registrar__boton__opcion registrar__boton__opcion--iniciar" onClick={ir_iniciarSesion2}/>
            </section>
        </form>
      </div>
    }

    {
      props.activado3==true && <div>
        <div className="fondo" onClick={cerrar_perfil}></div>
        <div className="perfil">
            <a href="#" onClick={cerrar_perfil}><img className="perfil__cerrar" src={Cerrar}/></a>
            <tittle className="perfil__titulo">Perfil</tittle>
            <section className="perfil__avatar">
                <img className="perfil__avatar__imagen" src={Avatar}/>
            </section>
            <form className="perfil__boton">
                <a href="/blastinfo/perfil" className="perfil__boton__opcion">Acceder al perfil</a>
                <a href="/blastinfo" onClick={cerrar_sesion} className="perfil__boton__opcion">Cerrar sesión</a>
            </form>
        </div>
      </div>
    }
    </div>
    
    


  );    
}

export default Iniciar;