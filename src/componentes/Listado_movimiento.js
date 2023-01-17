import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import Caja_movimiento from './Caja_movimiento';
import Filtro from './Filtro';
import Paginado from './Paginado';
import Nada_encontrado from './Nada_encontrado';
/**
 * Componente que representa la lista de movimientos
 *
 * @component
 * @example
 * return (
 *   <Listado_movimiento/>
 * )
 */
const Listado_movimiento = () => {
  /**
   * name Location
   */
  const location = useLocation()
  const [movimientos, setMovimientos] = useState(null)
  const [filtro, setFiltro] = useState('id_descendente');
  /**
   * elemento contador que impide que se recargue varias veces una proyección de lista, para evitar ralentizaciones
   */
  let recuerdaFiltro = 0;
  const [paginaActual, setPaginaActual] = useState(1);
  const [paginaFinal, setPaginaFinal] = useState(true);
  /**
   * elemento buscar, identifica si llega a este componente desde la barra buscadora o desde el encabezado
   */
  let { buscar } = location.state;
    if(buscar != null){
      buscar = buscar.toLowerCase();
    }
  /**
   * useEffect provoca la llamada de obtenerDatos cada vez que se reinicia la página, o detecte un cambio en el componente filtro
   */
  useEffect(() => {
    obtenerDatos();
  }, [filtro])
  /**
   * url de la API llamando a todos los Pokémon
   */
  const { url } = location.state;
  /**
   * la identidad identifica de que tipo es el elemento
   */
  const { identidad } = location.state;
  /**
   * obtenerDatos guarda el array de los movimientos con los resultados de la API
   */
  const obtenerDatos =  async () => {
    const data = await fetch(url);
    const movimientos= await data.json();
    setMovimientos(movimientos);
    
  }
  /**
   * cambia el valor del cambiarPaginaActual para cambiar el número de página del paginado
   * @param   {int} num  se mandará un número para cambiar el número del paginado
   */
  const cambiarPaginaActual = (num) => {
    
    setPaginaActual(paginaActual+num);
  }
  /**
   * paginaAnterior retrocede una página en caso de que sea diferente de 1
   */
  const paginaAnterior = () => {
    if(paginaActual!=1){
      cambiarPaginaActual(-1);
    }
  }
  /**
   * paginaSiguiente avanza una página en caso de que no sea el número total de pokemon dividido entre 8, que es lo que forma la última página
   */
  const paginaSiguiente = () => {
    
    if(movimientos!= null && paginaActual<movimientos.count/8){
      cambiarPaginaActual(+1);
    }else{
      setPaginaFinal(false);
    }
    
  }
  /**
   * elemento para identificar si encuentra contenido según la búsqueda del usuario a través del componente buscador
   */
  let hayContenido;
    if(identidad=="pokemon"){
      if(movimientos!=null){
        if([...movimientos.results.filter(function(item) { return item.name === buscar; })].length==0){
          hayContenido = false;
        }
      }
      
    }  
  return(
    
  <main className="cuerpo cuerpo--listado">
    <Filtro setFiltro={setFiltro}/>
    <section className="cuerpo__listado cuerpo__listado--movimiento">

    {

      buscar == null && identidad=='movimiento' && filtro=="id_descendente" && movimientos != null && movimientos.results.length > 0 && [...movimientos.results].splice((paginaActual-1)*8,8).map(item => { 
        return( 
          <Caja_movimiento key={item.name} name={item.name}/>
      )}) 
      }
    {

      buscar == null && identidad=='movimiento' && filtro=="id_ascendente" && movimientos != null && movimientos.results.length > 0 && [...movimientos.results].reverse().splice((paginaActual-1)*8,8).map(item => { 
        return( 
          <Caja_movimiento key={item.name} name={item.name}/>
      )}) 
      }

      {

      buscar == null &&  identidad=='movimiento' && recuerdaFiltro==0 && filtro=="nombre_descendente" && movimientos != null && movimientos.results.length > 0 && [...movimientos.results].sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase(); 
        recuerdaFiltro++;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }).splice((paginaActual-1)*8,8).map(item => {
        return( 
          <Caja_movimiento key={item.name} name={item.name}/>
      )}) 
      }


      {
      buscar == null &&  identidad=='movimiento' && recuerdaFiltro==0 && filtro=="nombre_ascendente" && movimientos != null && movimientos.results.length > 0 && [...movimientos.results].sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase(); 
        recuerdaFiltro++;
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      }).splice((paginaActual-1)*8,8).map(item => {
        return( 
          <Caja_movimiento key={item.name} name={item.name}/>
      )}) 
      }


      {
      buscar != null && identidad=='pokemon' && movimientos != null && movimientos.results.length > 0 && [...movimientos.results.filter(function(item) { return item.name === buscar; })].splice((paginaActual-1)*8,8).map(item => { 
        return( 
          <Caja_movimiento key={item.name} name={item.name}/>
      )}) 
      }

{
        identidad=="pokemon" && buscar.length<1 && filtro=="id_descendente" && movimientos != null && movimientos.results.length > 0 && [...movimientos.results].splice((paginaActual-1)*8,8).map(item => {
          return( 
            <Caja_movimiento key={item.name} name={item.name}/>
        )}) 
      }
      {
        identidad=="pokemon" && hayContenido==false && buscar.length>=1 && <Nada_encontrado/> 
      }
    </section>
    <Paginado paginaAct={paginaActual} paginaAnterior={paginaAnterior} paginaSiguiente={paginaSiguiente} paginaFinal={paginaFinal} ident={identidad}/>
  </main>
  )
};
export default Listado_movimiento;