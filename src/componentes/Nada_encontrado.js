import React from 'react';
import '../hojas-de-estilo/componentes/Nada_encontrado.sass';
/**
 * Componente que representa en una lista cuando no se encuentra nada y se informa al usuario
 *
 * @component
 * @example
 * return (
 *   <Nada_encontrado/>
 * )
 */
function Nada_encontrado({  }) {
  return (
    <div class="cuerpo__no_resultados">
        No se ha introducido un nombre válido para esta sección, vuelve a intentarlo. 
        (Necesitas escribir el nombre correctamente y completo de lo que buscas)  

    </div>
  );    
}

export default Nada_encontrado;