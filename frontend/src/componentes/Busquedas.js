import React, { useState } from "react"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Redirect from "react";

const API = process.env.REACT_APP_API;

class Tabla extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
    
        }
    }

    async filtrar(busqueda){
 
        const res = await fetch(`${API}/users`);
        const data = await res.json();
        var resultadosBusqueda = data.filter((elemento)=>{  

        if (elemento.name.toString().toLowerCase().includes(busqueda.toLowerCase()) || elemento.email.toString().toLowerCase().includes(busqueda.toLowerCase())) {
            return elemento;

        }else{
            return 0;

        }});
    
        this.setState({usuarios : resultadosBusqueda});
    }

    redir(search){
        window.location= "../perfil/"+search;
    }

    componentDidMount(){
        this.filtrar(this.props.busqueda);
    }

    render(){
        return(
            <div className='container-md'>
                <h2 class="fw-bold mt-3">Resultados relacionados a "{this.props.busqueda}"</h2>
                <div>
                    <h4>Usuarios encontrados:</h4>
                    {this.state.usuarios ? 
                        <> {
                            this.state.usuarios.map((usuario, index)=>(
                            <div class="p-4 mb-4 bg-light border rounded-4" onClick={() => this.redir(usuario.name)}>
                                <div className="row">
                                    <div className="col-sm-1">
                                        <img src= {API+"/img/"+usuario._id} height="150" width="150" class="img-fluid rounded-1" alt="fotoPerfil"/>
                                    </div>
                                    <div className="col">
                                        <h3>{usuario.name}</h3>
                                        <p>{usuario.biografia}</p>
                                    </div>
                                </div>
                            </div>
                            ))
                        }   
                        </>
                        :
                        <>                  
                            <p> No se encontraron usuarios</p>
                        </>
                    }
               </div>
                
               <h4>Libros encontrados:</h4>
            </div>
        );
    }
}

export const Busquedas = () => {

    const API = process.env.REACT_APP_API;
    const imagen = process.env.imagen;
    const { buscado } = useParams();
    const busqueda1 = {buscado}.buscado;

    return (
        <div className='container-md border-danger'>
            <Tabla busqueda={busqueda1} />
        </div>
    )
}

export default Busquedas;