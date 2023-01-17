import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import Caja_pokemon from './Caja_pokemon';
import Nada_encontrado from './Nada_encontrado';
import Filtro from './Filtro';
import Paginado from './Paginado';
/**
 * Componente que representa la lista de Pokémon
 *
 * @component
 * @example
 * return (
 *   <Listado_pokemon/>
 * )
 */
const Listado_pokemon = () => {
    const [filtro, setFiltro] = useState('id_descendente');
     /**
     * name Location
     */
    const location = useLocation()
    const [pokemons, setPokemons] = useState(null)
     /**
     * elemento buscar, identifica si llega a este componente desde la barra buscadora o desde el encabezado
     */
    let { buscar } = location.state;
    if(buscar != null){
      buscar = buscar.toLowerCase();
    }
    /**
     * elemento contador que impide que se recargue varias veces una proyección de lista, para evitar ralentizaciones
     */
    let recuerdaFiltro = 0;
    const [paginaActual, setPaginaActual] = useState(1);
    const [paginaFinal, setPaginaFinal] = useState(true);
    /**
     * useEffect provoca la llamada de obtenerDatos cada vez que se reinicia la página, o detecte un cambio en el componente filtro
     * o los Pokémon
     */
    useEffect(() => {
      obtenerDatos();
    }, [pokemons, filtro])
    /**
     * url de la API llamando a todos los Pokémon
     */
    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1500";
    /**
     * la identidad identifica de que tipo es el elemento
     */
    const { identidad } = location.state;
    /**
     * obtenerDatos guarda el array de los Pokémon con los resultados de la API
     */
    const obtenerDatos =  async () => {
      const data = await fetch(url);
      const pokemons= await data.json();
      setPokemons(pokemons);
      
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
      
      if(pokemons!= null && paginaActual<pokemons.count/8){
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
      if(pokemons!=null){
        if([...pokemons.results.filter(function(item) { return item.name === buscar; })].length==0){
          hayContenido = false;
        }
      }
      
    }
    return(
      
    <main className="cuerpo cuerpo--listado">
      <Filtro setFiltro={setFiltro}/>
      <section className="cuerpo__listado">
      {
        identidad=="pokemon" && pokemons != null && pokemons.results.length > 0 && [...pokemons.results.filter(function(item) { return item.name === buscar; })].splice((paginaActual-1)*8,8).map(item => {
          return( 
            
            <Caja_pokemon key={item.name} name={item.name} front={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+item.url.split('/')[item.url.split('/').length-2]+".png"} back={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"+item.url.split('/')[item.url.split('/').length-2]+".png"}/>
        )}) 
      }
      {
        identidad=="todo" && filtro=="id_ascendente" && pokemons != null && pokemons.results.length > 0 && [...pokemons.results].reverse().splice((paginaActual-1)*8,8).map(item => {
          return( 
            <Caja_pokemon key={item.name} name={item.name} front={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+item.url.split('/')[item.url.split('/').length-2]+".png"} back={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"+item.url.split('/')[item.url.split('/').length-2]+".png"}/>
        )}) 
      }
      {
        identidad=="todo" && filtro=="id_descendente" && pokemons != null && pokemons.results.length > 0 && [...pokemons.results].splice((paginaActual-1)*8,8).map(item => {
          return( 
            <Caja_pokemon key={item.name} name={item.name} front={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+item.url.split('/')[item.url.split('/').length-2]+".png"} back={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"+item.url.split('/')[item.url.split('/').length-2]+".png"}/>
        )}) 
      }
       {
        identidad=="pokemon" && buscar.length<1 && filtro=="id_descendente" && pokemons != null && pokemons.results.length > 0 && [...pokemons.results].splice((paginaActual-1)*8,8).map(item => {
          return( 
            <Caja_pokemon key={item.name} name={item.name} front={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+item.url.split('/')[item.url.split('/').length-2]+".png"} back={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"+item.url.split('/')[item.url.split('/').length-2]+".png"}/>
        )}) 
      }
      {
        identidad=="pokemon" && hayContenido==false && buscar.length>=1 && <Nada_encontrado/> 
      }
    
      {
        pokemons != null && recuerdaFiltro==0 && filtro=="nombre_descendente" && identidad=="todo" && pokemons.results.length > 0 && 
        [...pokemons.results].sort((a, b) => {
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
            <Caja_pokemon key={item.name} name={item.name} front={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+item.url.split('/')[item.url.split('/').length-2]+".png"} back={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"+item.url.split('/')[item.url.split('/').length-2]+".png"}/>
        )}) 
      }

      {
        pokemons != null && recuerdaFiltro==0 && filtro=="nombre_ascendente" && identidad=="todo" && pokemons.results.length > 0 && 
        [...pokemons.results].sort((a, b) => {
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
            <Caja_pokemon key={item.name} name={item.name} front={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+item.url.split('/')[item.url.split('/').length-2]+".png"} back={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"+item.url.split('/')[item.url.split('/').length-2]+".png"}/>
        )}) 
      }

      </section>
      <Paginado paginaAct={paginaActual} paginaAnterior={paginaAnterior} paginaSiguiente={paginaSiguiente} paginaFinal={paginaFinal} ident={identidad}/>
    </main>
    )
  };

export default Listado_pokemon;