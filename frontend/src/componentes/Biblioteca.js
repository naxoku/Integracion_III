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
                <div class="p-4 mt-4 mb-4 bg-light border rounded-4">
                    <h4 className="d-flex">Biblioteca</h4>
                    <div class="row row-cols-2 row-cols-md-4 g-4">
                        {/* Libro 1 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="pan.png" class="card-img-top imgSize" alt="..."/>
                                </div>
    
                                <div class="card-body">
                                    <h5 class="card-title">Oui oui madam!</h5>
                                    <p class="card-text">Comedia moderna sobre una pareja bien dispareja.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Comedia</span>
                                        <span class="badge text-bg-secondary m-1">Romance</span>
                                        <span class="badge text-bg-secondary m-1">Novela</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 2 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="portada2.jpg" class="card-img-top imgSize" alt="..."/>
                                </div>
    
                                <div class="card-body">
                                    <h5 class="card-title">Siempre a tu lado</h5>
                                    <p class="card-text">Basada en la historia real del fiel perro japonés Hachikō.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Emocional</span>
                                        <span class="badge text-bg-secondary m-1">Drama</span>
                                        <span class="badge text-bg-secondary m-1">Hechos reales</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                        <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 3 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="portada3.jpg" class="card-img-top imgSize" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Libro del nuevo conductor</h5>
                                    <p class="card-text">Preguntas y respuestas del examen de conducción licencia clase B.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Utilidad</span>
                                        <span class="badge text-bg-secondary m-1">Estudio</span>
                                        <span class="badge text-bg-secondary m-1">Instructico</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                        <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 4 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="pan.png" class="card-img-top imgSize" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Oui oui madam!</h5>
                                    <p class="card-text">Comedia moderna sobre una pareja bien dispareja.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Comedia</span>
                                        <span class="badge text-bg-secondary m-1">Romance</span>
                                        <span class="badge text-bg-secondary m-1">Novela</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                        <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 5 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="portada2.jpg" class="card-img-top imgSize" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Siempre a tu lado</h5>
                                    <p class="card-text">Basada en la historia real del fiel perro japonés Hachikō.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Emocional</span>
                                        <span class="badge text-bg-secondary m-1">Drama</span>
                                        <span class="badge text-bg-secondary m-1">Hechos reales</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                        <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 1 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="pan.png" class="card-img-top imgSize" alt="..."/>
                                </div>
            
                                <div class="card-body">
                                    <h5 class="card-title">Oui oui madam!</h5>
                                    <p class="card-text">Comedia moderna sobre una pareja bien dispareja.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Comedia</span>
                                        <span class="badge text-bg-secondary m-1">Romance</span>
                                        <span class="badge text-bg-secondary m-1">Novela</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 2 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="portada2.jpg" class="card-img-top imgSize" alt="..."/>
                                </div>
                                
                                <div class="card-body">
                                    <h5 class="card-title">Siempre a tu lado</h5>
                                    <p class="card-text">Basada en la historia real del fiel perro japonés Hachikō.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Emocional</span>
                                        <span class="badge text-bg-secondary m-1">Drama</span>
                                        <span class="badge text-bg-secondary m-1">Hechos reales</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                        <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 3 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="portada3.jpg" class="card-img-top imgSize" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Libro del nuevo conductor</h5>
                                    <p class="card-text">Preguntas y respuestas del examen de conducción licencia clase B.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Utilidad</span>
                                        <span class="badge text-bg-secondary m-1">Estudio</span>
                                        <span class="badge text-bg-secondary m-1">Instructico</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                        <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 4 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="pan.png" class="card-img-top imgSize" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Oui oui madam!</h5>
                                    <p class="card-text">Comedia moderna sobre una pareja bien dispareja.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Comedia</span>
                                        <span class="badge text-bg-secondary m-1">Romance</span>
                                        <span class="badge text-bg-secondary m-1">Novela</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                        <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 5 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="portada2.jpg" class="card-img-top imgSize" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Siempre a tu lado</h5>
                                    <p class="card-text">Basada en la historia real del fiel perro japonés Hachikō.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Emocional</span>
                                        <span class="badge text-bg-secondary m-1">Drama</span>
                                        <span class="badge text-bg-secondary m-1">Hechos reales</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                        <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 1 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="pan.png" class="card-img-top imgSize" alt="..."/>
                                </div>
            
                                <div class="card-body">
                                    <h5 class="card-title">Oui oui madam!</h5>
                                    <p class="card-text">Comedia moderna sobre una pareja bien dispareja.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Comedia</span>
                                        <span class="badge text-bg-secondary m-1">Romance</span>
                                        <span class="badge text-bg-secondary m-1">Novela</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 2 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="portada2.jpg" class="card-img-top imgSize" alt="..."/>
                                </div>
                                
                                <div class="card-body">
                                    <h5 class="card-title">Siempre a tu lado</h5>
                                    <p class="card-text">Basada en la historia real del fiel perro japonés Hachikō.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Emocional</span>
                                        <span class="badge text-bg-secondary m-1">Drama</span>
                                        <span class="badge text-bg-secondary m-1">Hechos reales</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                        <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 3 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="portada3.jpg" class="card-img-top imgSize" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Libro del nuevo conductor</h5>
                                    <p class="card-text">Preguntas y respuestas del examen de conducción licencia clase B.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Utilidad</span>
                                        <span class="badge text-bg-secondary m-1">Estudio</span>
                                        <span class="badge text-bg-secondary m-1">Instructico</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                        <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 4 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="pan.png" class="card-img-top imgSize" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Oui oui madam!</h5>
                                    <p class="card-text">Comedia moderna sobre una pareja bien dispareja.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Comedia</span>
                                        <span class="badge text-bg-secondary m-1">Romance</span>
                                        <span class="badge text-bg-secondary m-1">Novela</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                        <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 5 */}
                        <div class="col d-flex justify-content-center">
                            <div class="card h-100 cardSize">
                                <div class="d-flex justify-content-center">
                                    <img src="portada2.jpg" class="card-img-top imgSize" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Siempre a tu lado</h5>
                                    <p class="card-text">Basada en la historia real del fiel perro japonés Hachikō.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Emocional</span>
                                        <span class="badge text-bg-secondary m-1">Drama</span>
                                        <span class="badge text-bg-secondary m-1">Hechos reales</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                        <small>Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }


}


export default Biblioteca;