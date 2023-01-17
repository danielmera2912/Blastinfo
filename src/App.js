import './App.css';
import Encabezado from './componentes/layout/Encabezado';
import Pie from './componentes/layout/Pie';
import Listado_pokemon from './componentes/Listado_pokemon.js';
import Listado_habilidad from './componentes/Listado_habilidad.js';
import Listado_movimiento from './componentes/Listado_movimiento.js';
import Contacto from './componentes/Contacto.js';
import Inicio from "./componentes/Inicio";
import Pagina404 from './componentes/Pagina404';
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import Perfil from './componentes/Perfil';
import Pokemon from './componentes/Pokemon';
import Movimiento from './componentes/Movimiento';
import Habilidad from './componentes/Habilidad';
/**
 * Componente que representa la APP, contiene el encabezado, rutas, y pie.
 *
 * @component
 * @example
 * return (
 *   <App/>
 * )
 */
function App() {
  return (
    <div className="App">
      <Router>
        <Encabezado/>
      
        <Routes>
            <Route path="/blastinfo" element={<Inicio/>}/>
            <Route path="/blastinfo/listado_pokemon" element={<Listado_pokemon/>}/>
            <Route path="/blastinfo/listado_movimiento" element={<Listado_movimiento/>}/>
            <Route path="/blastinfo/listado_habilidad" element={<Listado_habilidad/>}/>
            <Route path="/blastinfo/contacto" element={<Contacto/>}/>
            <Route path="/blastinfo/perfil" element={<Perfil/>}/>
            <Route path="*" element={<Pagina404/>}/>
            <Route path="/blastinfo/pokemon" element={<Pokemon/>}/>
            <Route path="/blastinfo/movimiento" element={<Movimiento/>}/>
            <Route path="/blastinfo/habilidad" element={<Habilidad/>}/>
        </Routes>
      </Router>
      <Pie/>
    </div>
  );
}

export default App;
