import React from 'react'
import { checkIfIsLoggedIn } from '../utils';
import Editor from "./Editor";

const logeado = checkIfIsLoggedIn();

const CrearProyecto = () => {
    return (
        <div className='container-md border-danger'>
            {logeado && (
                <>
                    <Editor/>
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

export default CrearProyecto