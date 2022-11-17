import React from "react"
import { useState, useEffect } from 'react';
import axios from 'axios';


const API = process.env.REACT_APP_API;


class Biblioteca extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
    
        }
    }
    
    async getBooks(){
        
        const res = await axios.get(API+"/users/Libros", {
            mode: "no-cors"
        });
        
        const data = res.data;
        console.log(data)

        this.setState({libros : data});   
    };    

    componentDidMount(){
        this.getBooks();
    }

    render(){
        return (
            <div className="container-md">
                {/* Maqueta filtrado */}
                <div class="p-4 mt-4 mb-4 bg-light border rounded-4">
                    <h4>Filtrar contenido</h4>
                    <div class="form-check form-check-inline">
                        <div class="input-group mb-3">
                            <label class="input-group-text" for="inputGroupSelect01">Alfabéticamente</label>
                            <select class="form-select" id="inputGroupSelect01">
                                <option selected>Escoger...</option>
                                <option value="1">A-Z</option>
                                <option value="2">Z-A</option>
                                <option value="3">Sin ordenar</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-check form-check-inline">
                        <div class="input-group mb-3">
                            <label class="input-group-text" for="inputGroupSelect01">Autor / Creador</label>
                            <select class="form-select" id="inputGroupSelect02">
                                <option selected>Escoger...</option>
                                <option value="1">A-Z</option>
                                <option value="2">Z-A</option>
                                <option value="3">Sin ordenar</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-check form-check-inline">
                        <div class="input-group mb-3">
                            <label class="input-group-text" for="inputGroupSelect01">Categoría</label>
                            <select class="form-select" id="inputGroupSelect03">
                                <option selected>Escoger...</option>
                                <option value="1">Romance</option>
                                <option value="2">Misterio</option>
                                <option value="3">Novela</option>
                                <option value="4">Terror</option>
                                <option value="5">Fantasía</option>
                                <option value="6">Infantil</option>
                                <option value="7">Sin ordenar</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-check form-check-inline">
                        <div class="input-group mb-3">
                            <label class="input-group-text" for="inputGroupSelect04">Antigüedad</label>
                            <select class="form-select" id="inputGroupSelect03">
                                <option selected>Escoger...</option>
                                <option value="1">Más recientes</option>
                                <option value="2">Más antigüos</option>
                                <option value="3">Sin ordenar</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-check form-check-inline">
                        <button className="btn btn-primary">Filtrar</button>
                    </div>
                    
                </div>
                
    
                {/* Maqueta biblioteca */}
               {/* Maqueta biblioteca */}
               <div class="p-4 mb-4 bg-light border rounded-4">
                    <div class="row row-cols-1 row-cols-md-5 g-4">
                        
                    {this.state.libros ? 
                        <> 
                        {
                            this.state.libros.map((libro)=>(
                                <div class="col d-flex justify-content-center">
                                    <div class="card h-100 cardSize">
                                        <div class="d-flex justify-content-center">
                                            <img src= {libro.img} class="card-img-top imgSize" alt="portada.png"/>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">{libro.Titulo}</h5>
                                            <p class="card-text">{libro.descripcion}</p>
                                            <div>
                                                {libro.etiquetas && 
                                                <>
                                                    {libro.etiquetas.split(",").map((index) => (
                                                        <span class="badge text-bg-secondary me-1">{index}</span>
                                                    ))
                                                    }
                                                </>}
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <p>Autor: {libro.nombreAutor}</p>
                                            <button onClick={(e) => this.redireccionar(libro._id)}>Ver más</button>
                                        </div>
                                    </div>
                                </div>                         
                            )
                            )
                        }   
                        </>
                        :
                        <>                  
                            <p> No se han encontrado libros</p>
                        </>
                    }

                    </div>
                </div>
                     
                    </div>
            
        )
    }


}


export default Biblioteca;