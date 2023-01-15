import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import Caja_pokemon from './Caja_pokemon';
import Nada_encontrado from './Nada_encontrado';
import Filtro from './Filtro';
import Paginado from './Paginado';

const Listado_pokemon = () => {
    const [filtro, setFiltro] = useState('id_descendente');
    
    const location = useLocation()
    const [pokemons, setPokemons] = useState(null)
    let { buscar } = location.state;
    if(buscar != null){
      buscar = buscar.toLowerCase();
    }
    let recuerdaFiltro = 0;
    const [paginaActual, setPaginaActual] = useState(1);
    const [paginaFinal, setPaginaFinal] = useState(true);
    useEffect(() => {
      obtenerDatos();
    }, [pokemons, filtro])

    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1600";
    const { identidad } = location.state;
    
    const obtenerDatos =  async () => {
      const data = await fetch(url);
      const pokemons= await data.json();
      setPokemons(pokemons);
      
    }
    
    const cambiarPaginaActual = (num) => {
      
      setPaginaActual(paginaActual+num);
  }
  const paginaAnterior = () => {
    if(paginaActual!=1){
      cambiarPaginaActual(-1);
    }
  }
  const paginaSiguiente = () => {
    
    if(pokemons!= null && paginaActual<pokemons.count/8){
      cambiarPaginaActual(+1);
    }else{
      setPaginaFinal(false);
    }
    
  }
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
        identidad=="pokemon" && hayContenido==false && <Nada_encontrado/> 
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