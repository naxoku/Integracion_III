import React from 'react'
import { checkIfIsLoggedIn } from '../utils';
import Editor from "./Editor";

const logeado = checkIfIsLoggedIn();

const Proyecto = () => {
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
                                                        <td>Proyecto 1</td>
                                                        <td>Esto es un proyecto de prueba</td>
                                                        <td>
                                                            <button type="button" class="btn btn-secondary me-1">
                                                                <i class="bi bi-trash"></i>
                                                            </button>
                                                            <button type="button" class="btn btn-secondary ms-1">
                                                                <i class="bi bi-pencil"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Proyecto 2</td>
                                                        <td>ASDASD AS Das as</td>
                                                        <td>
                                                            <button type="button" class="btn btn-secondary me-1">
                                                                <i class="bi bi-trash"></i>
                                                            </button>
                                                            <button type="button" class="btn btn-secondary ms-1">
                                                                <i class="bi bi-pencil"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Prruebaaaaa</td>
                                                        <td>a</td>
                                                        <td>
                                                            <button type="button" class="btn btn-secondary me-1">
                                                                <i class="bi bi-trash"></i>
                                                            </button>
                                                            <button type="button" class="btn btn-secondary ms-1">
                                                                <i class="bi bi-pencil"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
                                                <input class="form-control" type="text" placeholder="Escriba aquí..." aria-label="default input example"/>
                                            </div>

                                            <div className='col'>
                                                <h5>Descripción</h5>
                                            </div>
                                            <div className='col mb-3'>
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Escriba aquí...'></textarea>
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
                                                <a href="/proyecto/crear" class="mb-3 btn btn-primary container-md" type="button" id="inputGroupFileAddon04">Crear proyecto</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subir un proyecto (PDF) */}
                                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                                        <h2>En proceso...</h2>
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