import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { checkIfIsLoggedIn, getToken } from '../utils';

const logeado = checkIfIsLoggedIn();

const InfoLibro = () => {
    
    const [nuevoComentario, setComentario] = useState("");
    const [Titulo, setTitulo] = useState("");
    const [etiquetas, setEtiquetas] = useState("");
    const [autor, setAutor] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [filename, setFileName] = useState("");
    const [ID, setID] = useState("");
    let { idLibro } = useParams();
    const idlibro = {idLibro}.idLibro;

    const agregarComentario = async (nuevoComentario,idlibro) => {

        if(checkIfIsLoggedIn()){
    
        if(nuevoComentario){
          await axios.post(`/users/comentarios/libro/${idlibro}`,{nuevoComentario}, {  
            headers : {
                authorization : `Bearer ${getToken()}`
            },
            mode: "no-cors",
           }); 
        }
        }else{
            window.confirm("Para añadir un comentario debes estar logueado");
        }
    }

    const obtenerLibro = async (idlibro) => {

        const libro = await axios.get(`/users/Libros/${idlibro}`, {  
            mode: "no-cors"
           }); 
    
        setID(libro.data['_id']['$oid']);
        setTitulo(libro.data['Titulo']);
        setEtiquetas(libro.data['etiquetas'].split(","));
        setAutor(libro.data['autor']);  
        setDescripcion(libro.data['descripcion']);    
        setFileName(libro.data['filename']);     

    }
    
    useEffect(() => {
        obtenerLibro(idlibro);
    });

           
    return (
        <div className='container-md'>
            <div class="p-4 mt-4 mb-4 bg-light border rounded-4">
                <div class="card carouselSize">
                    <div class="row g-0 d-flex justify-content-center">
                        <div class="col-sm-5 d-flex justify-content-center">
                            <img src="portada.png" class="rounded imgSize" alt="portadaLibro"/>
                        </div>
                        <div class="col-md-5">
                            <div className='card-body'>
                                <h5 class="card-title">{Titulo}</h5>
                                <p class="card-text">{descripcion}</p>
                                <div>
                                    <h5 className='card-title'>Etiquetas</h5>
                                    {etiquetas && <>
                                      
                                          {etiquetas.map((index) => (

                                 <span class="badge text-bg-secondary me-1">{index}</span>
                                           )
                                           )
                                            }

                                    </>}
                                </div>

                                {/* Calificación del libro */}
                                <div>
                                    <h5 className='card-title mb-1 mt-1'>Calificación: [valor] <i class="bi bi-star"></i></h5>
                                    {logeado && (
                                        <> 
                                            <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off"/>
                                            <label class="btn btn-secondary btn-sm me-1" for="option1"><i class="bi bi-star"></i></label>

                                            <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
                                            <label class="btn btn-secondary btn-sm me-1" for="option2"><i class="bi bi-star"></i></label>

                                            <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off"/>
                                            <label class="btn btn-secondary btn-sm me-1" for="option3"><i class="bi bi-star"></i></label>

                                            <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off"/>
                                            <label class="btn btn-secondary btn-sm me-1" for="option4"><i class="bi bi-star"></i></label>

                                            <input type="radio" class="btn-check" name="options" id="option5" autocomplete="off"/>
                                            <label class="btn btn-secondary btn-sm me-1" for="option5"><i class="bi bi-star"></i></label>
                                        </>
                                    )}

                                    {!logeado && (
                                        <>
                                            <h6>Necesitas una cuenta para poder calificar</h6>
                                            <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" disabled/>
                                            <label class="btn btn-secondary btn-sm me-1" for="option1"><i class="bi bi-star"></i></label>

                                            <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" disabled/>
                                            <label class="btn btn-secondary btn-sm me-1" for="option2"><i class="bi bi-star"></i></label>

                                            <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled/>
                                            <label class="btn btn-secondary btn-sm me-1" for="option3"><i class="bi bi-star"></i></label>

                                            <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" disabled/>
                                            <label class="btn btn-secondary btn-sm me-1" for="option4"><i class="bi bi-star"></i></label>

                                            <input type="radio" class="btn-check" name="options" id="option5" autocomplete="off" disabled/>
                                            <label class="btn btn-secondary btn-sm me-1" for="option5"><i class="bi bi-star"></i></label>
                                        </>
                                    )}

                                </div>
                                <div>
                                    <button className='btn btn-primary mt-3' >Leer el libro</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-3">
                    {logeado && (
                        <>
                            <h4>Haz un comentario</h4>
                            <textarea class="form-control" id="validationTextarea" placeholder="Haz un comentario..." onChange={(e) => setComentario(e.target.value)} required></textarea>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button class="btn btn-primary me-md-2" type="button" onClick={(e) => agregarComentario(nuevoComentario,idlibro)}>Comentar</button>
                        </div>
                        </>
                    )}

                    {!logeado && (
                        <>
                            <h4>Haz un comentario</h4>
                            <textarea class="form-control" id="validationTextarea" placeholder="Necesitas una cuenta para poder comentar" required disabled></textarea>
                        </>
                    )}
                    
                </div>
                <div class="mt-3">
                    <h4>Comentarios</h4>
                    {/* Si hay comentarios, mostrarlos. En caso de que no hayan mostrar esto. */}
                    <label>No hay comentarios de momento...</label>
                </div>
            </div>
        </div>
    )
}

export default InfoLibro