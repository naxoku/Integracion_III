import React, { useState } from "react"
import { useParams } from "react-router-dom";
import { useEffect } from "react";


export const Busquedas = () => {

 
    const API = process.env.REACT_APP_API;
    const imagen = process.env.imagen;
    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const { buscado } = useParams();
    const busqueda = {buscado}.buscado;


    const peticionUsuarios = async () => {
       const res = await fetch(`${API}/users`);
       const data = await res.json();
       setTablaUsuarios(data);
    };

    const filtrar=(busqueda)=>{
      var resultadosBusqueda = tablaUsuarios.filter((elemento)=>{
   
        if(elemento.name.toString().toLowerCase().includes(busqueda.toLowerCase())
        || elemento.email.toString().toLowerCase().includes(busqueda.toLowerCase())
        ){
          return elemento;
        }else{return 0}
      });
      setUsuarios(resultadosBusqueda);
    }

    const redir = (search) => {
		
        window.location= "../perfil/"+search;
    }

    
     useEffect(()=>{
       peticionUsuarios();    
       filtrar(busqueda);
       },[busqueda,tablaUsuarios])

    return (
        <div className='container-md border-danger'>
            <h4 class="fw-bold mt-3">Resultados relacionados a {busqueda}</h4>
             
               <div>
                   <h2>Usuarios/Autores</h2>  
                          
                            {usuarios && 
                                usuarios.map((usuario, index)=>(
                            

                            <div class="p-4 mb-4 bg-light border rounded-4" onClick={e => e.preventDefault() || redir(usuario.name)}>
                             
                                <img src="http://localhost:3000/pan.png" height="100" width="100" class="img-fluid rounded-start" alt="fotoPerfil"/>
                                <h3>{usuario.name}</h3>
                                <p>{usuario.biografia}</p>
                            </div>
                          ))}

       
                
                    <div>
                    {!usuarios &&
                        <p> No hay usuarios relacionados a tu busqueda</p>
                        }
                    </div>
               </div>
               <h2>Libros</h2>

        </div>
     
    )
}

export default Busquedas;