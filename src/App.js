import React, {useEffect, useState} from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";

function App() {

  // State de la API
  const [busqueda, guardarBusqueda] = useState('');

  // State que va a comprender la imagen
  const [imagenes, guardarImagenes] = useState([]);

  // States que van a crear al Paginador

  const [pagina, guardarPagina] = useState(1);
  const [totalpaginas , guardarTotalPaginas] = useState(1);


  useEffect(() => { // Es utilizado para que actue de inmediato como el DOOM
    const validarAPI = async () => {
      if(busqueda === '') return; // Para que el buscador aparezca sin nada escrito, es decir, que no busque nada al inicio

      const imagenesPorPagina = 30;
      const key = '24449918-7d70291bbd29d5435521c9275';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${pagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits)

      // Calcular total de paginas
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      guardarTotalPaginas(calcularTotalPaginas);

      // Hacer un scroll suave cada vez que veamos las fotos
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" })
    }

    validarAPI();

  }, [busqueda, pagina]);

  // Cambiar a la Página Anterior
  const PaginaAnterior = () => {

    const nuevaPaginaActual = pagina - 1;

    if(nuevaPaginaActual === 0) return;

    guardarPagina(nuevaPaginaActual)
  }

  // Cambiar a la Página Siguiente
  
  const PaginaSiguiente = () => {

    const nuevaPaginaActual = pagina + 1;

    if(nuevaPaginaActual > totalpaginas) return;

    guardarPagina(nuevaPaginaActual)
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>

        <Formulario
          guardarBusqueda={guardarBusqueda}
        />
      </div>
      <div className="row justify-content-center botones_paginador">
        <ListadoImagenes 
          
          imagenes={imagenes} 
            
        />

        {(pagina === 1) ? null : (
          <button
          type="button"
          className="bbtn btn-info mr-1"
          onClick={PaginaAnterior}
        > &laquo; Anterior </button>
        )}

        {(pagina === totalpaginas) ? null : (
          <button
          type="button"
          className="bbtn btn-info"
          onClick={PaginaSiguiente}
        > Siguiente &raquo;</button>
        )}
      </div>
    </div>

    
  );
}

export default App;
