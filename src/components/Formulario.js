import React, { useState } from "react";
import Error from "./Error";



const Formulario = ({guardarBusqueda}) => {

    // Creando el State de validar el formulario

    const [termino, guardarTermino ] = useState('');

    // State para mostrar el error cuando no se llena el formulario
    const [error, guardarError] = useState(false)



    // const handleChange = (e) => {
    //     // Leer lo que el usuario escribe

    //     guardarTermino ({
    //         ...termino,
    //         [e.target.name] : e.target.value
    //     })


    // }

    // funcion de validar el formulario 

    function validarTermino (e){
       
        // Evitamos ir al inicio
        e.preventDefault();

        // Condicional para validar el formulario
        if(termino === '') {
            guardarError(true)

            return;
        }

        guardarError(false)

        // Pasar la información al componente principal

        guardarBusqueda(termino);
    }



    return ( 

        <form
            onSubmit={validarTermino}
        >
            
            
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, Ej. Deportes o Videojuegos..."
                        onChange={e => guardarTermino (e.target.value)}
                    />
                </div>

                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar imágenes"
                    
                    />

                </div>
            </div>

            {error ? <Error mensaje="Coloca un término válido"/> : null}
        </form>
    
    );
}
 
export default Formulario;