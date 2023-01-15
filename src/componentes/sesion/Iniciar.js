import React, {useState, useEffect} from 'react';
import '../../hojas-de-estilo/sesion/Iniciar.sass';
import '../../hojas-de-estilo/sesion/Registrar.sass';
import '../../hojas-de-estilo/sesion/AccesoPerfil.sass';
import Cerrar from "../../images/icons/cerrar.svg";
import Avatar from "../../images/icons/avatar.png";
function Iniciar(props) {
  const cerrar_iniciar = () => {
    props.setActivado(false);
  }
  const abrir_iniciar = () => {
    props.setActivado(true);
  }
  

  const cerrar_registrar = () => {
    props.setActivado2(false);
  }
  const abrir_registrar = () => {
    props.setActivado2(true);
  }
  

  const cerrar_perfil = () => {
    props.setActivado3(false);
  }
  const abrir_perfil = () => {
    props.setActivado3(true);
  }

  const iniciarSesion = () => {
    abrir_perfil();
    cerrar_iniciar();
    props.setSesionIniciada(true)
  }

  const registrarSesion = () => {
    abrir_registrar();
    cerrar_iniciar();
  }

  const ir_iniciarSesion = () => {
    abrir_iniciar();
    cerrar_registrar();
  }
  return (
    <div>
       
    {
      props.activado==true && props.sesionIniciada==false && 
      <div>
      <div class="fondo" onClick={cerrar_iniciar}></div>
       <form className="iniciar_sesion">
      <a href="#" onClick={cerrar_iniciar}><img className="iniciar_sesion__cerrar" src={Cerrar}/></a>
      <tittle className="iniciar_sesion__titulo">Iniciar sesión</tittle>
      
      <section className="iniciar_sesion__caja">
          <input className="iniciar_sesion__caja__elemento" type="text" placeholder="Usuario..."/> 
          <input className="iniciar_sesion__caja__elemento" type="text" placeholder="Contraseña..."/> 
      </section>
      <section className="iniciar_sesion__boton">
          <button className="iniciar_sesion__boton__opcion iniciar_sesion__boton__opcion--entrar" onClick={iniciarSesion}>Entrar</button>
          <p>o</p>
          <button className="iniciar_sesion__boton__opcion iniciar_sesion__boton__opcion--registrar" onClick={registrarSesion}>Regístrate</button>
      </section>
  </form>
  </div>
    }

    {
      props.activado2==true && <div>
        <div class="fondo" onClick={cerrar_registrar}></div>
        <form class="registrar">
            <a href="#" onClick={cerrar_registrar}><img class="registrar__cerrar" src={Cerrar}/></a>
            <tittle class="registrar__titulo">Registrar</tittle>
            <section class="registrar__caja">
                <input class="registrar__caja__elemento" type="text" placeholder="Usuario..."/>
                <input class="registrar__caja__elemento" type="text" placeholder="Correo electrónico..."/> 
                <input class="registrar__caja__elemento" type="text" placeholder="Contraseña..."/> 
            </section>
            <section class="registrar__boton">
                <button class="registrar__boton__opcion registrar__boton__opcion--registrar" onClick={ir_iniciarSesion}>Registrar</button>
                <p>o</p>
                <button class="registrar__boton__opcion registrar__boton__opcion--iniciar" onClick={ir_iniciarSesion}>Identíficate aquí</button>
            </section>
        </form>
      </div>
    }

    {
      props.activado3==true && props.sesionIniciada==true && <div>
        <div class="fondo" onClick={cerrar_perfil}></div>
        <div class="perfil">
            <a href="#" onClick={cerrar_perfil}><img class="perfil__cerrar" src={Cerrar}/></a>
            <tittle class="perfil__titulo">Perfil</tittle>
            <section class="perfil__avatar">
                <img class="perfil__avatar__imagen" src={Avatar}/>
            </section>
            <form class="perfil__boton">
                <a href="/perfil" class="perfil__boton__opcion">Acceder al perfil</a>
                <a href="/" class="perfil__boton__opcion">Cerrar sesión</a>
            </form>
        </div>
      </div>
    }
    </div>
    
    


  );    
}

export default Iniciar;