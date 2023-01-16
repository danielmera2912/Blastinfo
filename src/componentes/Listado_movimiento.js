import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import Caja_movimiento from './Caja_movimiento';
import Filtro from './Filtro';
import Paginado from './Paginado';
import Nada_encontrado from './Nada_encontrado';
const Listado_movimiento = () => {
  const location = useLocation()
  const [pokemons, setPokemons] = useState(null)
  const [filtro, setFiltro] = useState('id_descendente');
  let recuerdaFiltro = 0;
  const [paginaActual, setPaginaActual] = useState(1);
  const [paginaFinal, setPaginaFinal] = useState(true);
  let { buscar } = location.state;
    if(buscar != null){
      buscar = buscar.toLowerCase();
    }
  useEffect(() => {
    obtenerDatos();
  }, [filtro])
  const { url } = location.state;
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
    <section className="cuerpo__listado cuerpo__listado--movimiento">

    {

      buscar == null && identidad=='movimiento' && filtro=="id_descendente" && pokemons != null && pokemons.results.length > 0 && [...pokemons.results].splice((paginaActual-1)*8,8).map(item => { 
        return( 
          <Caja_movimiento key={item.name} name={item.name}/>
      )}) 
      }
    {

      buscar == null && identidad=='movimiento' && filtro=="id_ascendente" && pokemons != null && pokemons.results.length > 0 && [...pokemons.results].reverse().splice((paginaActual-1)*8,8).map(item => { 
        return( 
          <Caja_movimiento key={item.name} name={item.name}/>
      )}) 
      }

      {

      buscar == null &&  identidad=='movimiento' && recuerdaFiltro==0 && filtro=="nombre_descendente" && pokemons != null && pokemons.results.length > 0 && [...pokemons.results].sort((a, b) => {
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
      buscar == null &&  identidad=='movimiento' && recuerdaFiltro==0 && filtro=="nombre_ascendente" && pokemons != null && pokemons.results.length > 0 && [...pokemons.results].sort((a, b) => {
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
      buscar != null && identidad=='pokemon' && pokemons != null && pokemons.results.length > 0 && [...pokemons.results.filter(function(item) { return item.name === buscar; })].splice((paginaActual-1)*8,8).map(item => { 
        return( 
          <Caja_movimiento key={item.name} name={item.name}/>
      )}) 
      }

{
        identidad=="pokemon" && buscar.length<1 && filtro=="id_descendente" && pokemons != null && pokemons.results.length > 0 && [...pokemons.results].splice((paginaActual-1)*8,8).map(item => {
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