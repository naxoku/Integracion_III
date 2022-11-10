import { checkIfIsLoggedIn, getLoggedInUserId } from '../utils';
import Editor from "./Editor";
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios'; 

const logeado = checkIfIsLoggedIn();
const idUser = getLoggedInUserId();
const API = process.env.REACT_APP_API;

const Proyecto = () => {
    const [nuevoPr,  setnProyecto] = useState("");
    const [nuevaDe,  setnDescripcion] = useState("");

    const [libro1,  setProyecto] = useState("");
    const [desc1,  setDescripcion] = useState("");

    const [libro2,  setProyecto2] = useState("");
    const [desc2,  setDescripcion2] = useState("");

    const [libro3,  setProyecto3] = useState("");
    const [desc3,  setDescripcion3] = useState("");

    const [descripcionPDF,  setDescripcionPDF] = useState("");
    const [etiquetasPDF,  setEtiquetasPDF] = useState("");
    const [tituloPDF,  setTituloPDF] = useState("");
    const autorPDF = getLoggedInUserId();
    const [file, setPDF] = useState();

    const getUser = async () => {

        const res = await axios.get(`${API}/users/${idUser}`, {
            mode: "no-cors",
            });
       
        const data = res.data;
        
        setProyecto(data['libro1']);
        setDescripcion(data['desc1']);

        setProyecto2(data['libro2']);
        setDescripcion2(data['desc2']);

        setProyecto3(data['libro3']);
        setDescripcion3(data['desc3']);
    };

    const editNyD = async () => {
        await axios.put(`${API}/users/nuevoproyecto/${idUser}`, {
                nuevoPr
            });
            
        await axios.put(`${API}/users/descripcionproyecto/${idUser}`, {
            nuevaDe
        });

        window.location = "/proyecto/crear";
        };

    /*const subirPDF = async (file) => {
        console.log(file)


        var re = await axios.post(`${API}/file/${descripcionPDF}/${etiquetasPDF}/${tituloPDF}/${autorPDF}`,{
              file
         },{
            mode: "no-cors",
            });

        console.log(re);

    }*/
        
    useEffect(() => {
        getUser();
    
        });

    return (
        <div className='container-md'>
            {logeado && (
                <>
                    <h2 className='mb-3'>¿Qué quieres hacer?</h2>
                    <div className='row'>

                        {/* Columna izquierda */}
                        <div className='col-sm-3'>
                            <h4>Opciones</h4>

                            {/* Botones verticales */}
                            <div class="d-flex align-items-start">
                                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Mis proyectos</button>
                                    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Crear proyecto</button>
                                    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Subir proyecto</button>
                                </div>
                            </div>                           

                        </div>

                        {/* Columna derecha */}
                        <div className='col-sm'>
                            
                            <div class="tab-content" id="v-pills-tabContent">
                                    {/* Mis proyectos */}
                                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                                        <h4>Mis proyectos</h4>
                                        <div className='p-4 mb-4 bg-light border rounded-2'>
                                            <table class="table table-hover table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Nombre proyecto</th>
                                                        <th scope="col">Descripción</th>
                                                        <th scope="col">Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                        <th scope="row">1</th>
                                                        <td>{libro1}</td>
                                                        <td>{desc1}</td>
                                                        <td className='d-flex align-content-md-center'>
                                                            <button type="button" class="btn btn-secondary me-1">
                                                                <i class="bi bi-trash"></i>
                                                            </button>
                                                            <button type="button" class="btn btn-secondary ms-1" 
                                                                    data-bs-toggle="modal" 
                                                                    data-bs-target="#modalLibro1"
                                                                    data-bs-whatever="@mdo">
                                                                <i class="bi bi-pencil"><div class="input-group mb-3"> 
                                                                </div>
                                                                </i>
                                                                
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>{libro2}</td>
                                                        <td>{desc2}</td>
                                                        <td className='d-flex align-content-md-center'>
                                                            <button type="button" class="btn btn-secondary me-1">
                                                                <i class="bi bi-trash"></i>
                                                            </button>
                                                            <button type="button" class="btn btn-secondary ms-1" 
                                                                    data-bs-toggle="modal" 
                                                                    data-bs-target="#modalLibro1"
                                                                    data-bs-whatever="@mdo">
                                                                <i class="bi bi-pencil"><div class="input-group mb-3"> 
                                                                </div>
                                                                </i>
                                                                
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>{libro3}</td>
                                                        <td>{desc3}</td>
                                                        <td className='d-flex align-content-md-center'>
                                                            <button type="button" class="btn btn-secondary me-1">
                                                                <i class="bi bi-trash"></i>
                                                            </button>
                                                            <button type="button" class="btn btn-secondary ms-1" 
                                                                    data-bs-toggle="modal" 
                                                                    data-bs-target="#modalLibro1"
                                                                    data-bs-whatever="@mdo">
                                                                <i class="bi bi-pencil"><div class="input-group mb-3"> 
                                                                </div>
                                                                </i>
                                                                
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                       {/* Modal usuario */}
                                    <div class="modal fade" id="modalLibro1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Editar informacion de Libro</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <form>
                                                        {/* Creacion de formulario y redimensionar el tamano del modal para hacer la edicion posible */}
                                                    </form>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                                    <button type="button" class="btn btn-primary" onClick={(e) => editNyD(nuevoPr)}>Guardar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Crear un proyecto */}
                                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                                        <h4>Crear un proyecto</h4>
                                        <div class="row row-cols-2 p-4 mb-4 bg-light border rounded-2">
                                            <div className='col'>
                                                <h5>Nombre del proyecto</h5>
                                            </div>
                                            <div className='col mb-3'>
                                                <input onChange={(e) => setnProyecto(e.target.value)} type="text" class="form-control" id="recipient-name" placeholder='Nombre...'/>
                                            </div>

                                            <div className='col'>
                                                <h5>Descripción del proyecto</h5>
                                            </div>
                                            <div className='col mb-3'>
                                                <textarea onChange={(e) => setnDescripcion(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Escriba aquí...'></textarea>
                                            </div>

                                            <div className='col'>
                                                <h5>Etiquetas</h5>
                                            </div>
                                            <div className='col mb-3'>
                                                <div class="input-group mb-1">
                                                    <input type="text" class="form-control" placeholder="Separar por comas..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                                                </div>
                                                <span class="badge text-bg-primary m-1">Libro</span>
                                                <span class="badge text-bg-primary m-1">Historia</span>
                                            </div>

                                            <div className='col'>
                                                <h5>Portada</h5>
                                            </div>
                                            <div className='col mb-3'>
                                                <div class="input-group mb-3">
                                                    <input type="file" class="form-control" id="inputGroupFile01"/>
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <h5>Autor</h5>
                                            </div>
                                            <div className='col mb-3'>
                                                <h6>NOMBRE DEL USUARIO</h6>
                                            </div>

                                            <div className='col'></div>
                                           
                                                <div className='col container-sm'>
                                                    <button type="button" class="btn btn-success"  onClick={(e) => editNyD(nuevoPr)}>Crear Proyecto</button>
                                                </div>

                                        </div>
                                    </div>

                                    {/* Subir un proyecto (PDF) */}
                                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                                        <h4>Subir archivo</h4>
                                        <div class="row row-cols-2 p-4 mb-4 bg-light border rounded-2">
                                            <div className='col'>
                                                <h5>Nombre del libro</h5>
                                            </div>
                                            <div className='col mb-3'>
                                                <input onChange={(e) => setTituloPDF(e.target.value)} type="text" class="form-control" id="recipient-name" placeholder='Nombre...'/>
                                            </div>

                                            <div className='col'>
                                                <h5>Descripción del libro</h5>
                                            </div>
                                            <div className='col mb-3'>
                                                <textarea onChange={(e) => setDescripcionPDF(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Escriba aquí...'></textarea>
                                            </div>

                                            <div className='col'>
                                                <h5>Etiquetas</h5>
                                            </div>
                                            <div className='col mb-3'>
                                                <div class="input-group mb-1">
                                                    <input type="text" class="form-control" placeholder="Separar por comas..." aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => setEtiquetasPDF(e.target.value)} />
                                                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                                                </div>
                                                <span class="badge text-bg-primary m-1">Libro</span>
                                                <span class="badge text-bg-primary m-1">Historia</span>
                                            </div>

                                            
                                            <div className='col'>
                                                <h5>Portada</h5>
                                            </div>
                                            <div className='col mb-3'>
                                                <div class="input-group mb-3">
                                                    <input type="file" class="form-control" id="inputGroupFile01"/>
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <h5>Autor</h5>
                                            </div>
                                            <div className='col mb-3'>
                                                <h6>NOMBRE DEL USUARIO</h6>
                                            </div>
                                        
                                            <div className='col'>
                                                <h5>Seleccionar libro</h5>
                                            </div>
                                            <form action={API+"/file/"+descripcionPDF+"/"+etiquetasPDF+"/"+tituloPDF+"/"+autorPDF} method='POST' enctype="multipart/form-data"  class="input-group">
                                            <div className='col mb-3'>
                                                <div class="input-group mb-3">
                                                    <input type="file" name="file" class="form-control" id="inputGroupFile01" enctype="multipart/form-data"/>
                                                </div>
                                            </div>
                                            <div className='col'></div>
                                            <div className='col container-sm'>
                                            
                                                <button type="submit" class="mb-3 btn btn-primary container-md" id="inputGroupFileAddon04" >Subir libro</button>
                                      
                                            </div>
                                            </form>
                                        
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </>
            )}

            {!logeado && (
                <>
                    <div class="card text-center">
                        <div class="card-header">
                            Error
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Necesitas estar logueado</h5>
                            <p class="card-text">
                                Estás intentando acceder a un sitio exclusivo para usuarios registrados.
                            </p>
                            <p>
                                Crea una cuenta para acceder a este y más beneficios.
                            </p>
                            
                                <a href="#" class="btn btn-primary mb-2">Crear cuenta</a>
                                <h6 className="text-center text-secondary">¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a></h6>
 
                        </div>
                        <div class="card-footer text-muted">
                            
                        </div>
                    </div>
                </>
            )}
        </div>
    )   
}

export default Proyecto