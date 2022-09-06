import React from 'react'

const Perfil = () => {
    let usuario = "Usuario89";
    let correo = "test@example.com";
    let contraseña = "Password"
    let instagram = "Usuario89_edo"
    let facebook = "Nombre Genérico"
    let twitter = "Usuario89_edo"

    return (
        <div className='container-md mt-2'>
            <div className='row'>
                <div className='col'>
                    <h4>Configuración de la cuenta</h4>

                    <h6>Nombre de usuario</h6>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder={usuario} aria-describedby="button-addon2" disabled/>
                        {/* Boton del Modal */}
                        <button type="button" class="btn bg-primary text-white" 
                        data-bs-toggle="modal" 
                        data-bs-target="#modalUsuario"
                        data-bs-whatever="@mdo">
                            Edit</button>
                    </div>
                    <h6>Correo electrónico</h6>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder={correo} aria-describedby="button-addon2" disabled/>
                        <button type="button" class="btn bg-primary text-white"  
                        data-bs-toggle="modal" 
                        data-bs-target="#modalCorreo"
                        data-bs-whatever="@mdo">
                            Edit</button>
                    </div>
                    <h6>Contraseña</h6>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Contraseña" value={contraseña} aria-describedby="button-addon2" disabled/>
                        <button type="button" class="btn bg-primary text-white"  
                        data-bs-toggle="modal" 
                        data-bs-target="#modalContraseña"
                        data-bs-whatever="@mdo">
                            Edit</button>
                    </div>

                    <h4>Redes sociales</h4>

                    <h6>Instagram</h6>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control" placeholder={instagram} aria-describedby="button-addon2" disabled/>
                        <button type="button" class="btn bg-primary text-white" 
                        data-bs-toggle="modal" 
                        data-bs-target="#modalInstagram"
                        data-bs-whatever="@mdo">
                            Edit</button>
                    </div>
                    <h6>Twitter:</h6>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control" placeholder={twitter} aria-describedby="button-addon2" disabled/>
                        <button type="button" class="btn bg-primary text-white" 
                        data-bs-toggle="modal" 
                        data-bs-target="#modalTwitter"
                        data-bs-whatever="@mdo">
                            Edit</button>
                    </div>
                    <h6>Facebook:</h6>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control" placeholder={facebook} aria-describedby="button-addon2" disabled/>
                        <button type="button" class="btn bg-primary text-white" 
                        data-bs-toggle="modal" 
                        data-bs-target="#modalFacebook"
                        data-bs-whatever="@mdo">
                            Edit</button>
                    </div>
                </div>
                
                <div className='col'>
                    <h4>Presentación al público</h4>

                    <h6>Foto de perfil</h6>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                              < img src="pan.png" class="img-fluid rounded-start" alt="fotoPerfil"/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{usuario}</h5>
                                    <p class="card-text">Acá es donde se previsualizará la biografía que cada usuario querrá colocar en su perfil.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <h6>Cambiar foto de perfil</h6>
                        <div class="input-group">
                            <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                            <button class="btn bg-primary text-white" type="button" id="inputGroupFileAddon04">Subir</button>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label"><h6>Editar biografía</h6></label>
                        <textarea class="form-control" placeholder="Escribe tu biografía..." id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-primary me-md-2" type="button">Actualizar</button>
                        <button class="btn btn-primary me-md-2" type="button">Borrar</button>
                    </div>
                </div>
            </div>

            {/* Modal usuario */}
            <div class="modal fade" id="modalUsuario" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cambiar nombre de usuario</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Usuario actual</label>
                                    <input type="text" class="form-control" id="recipient-name" placeholder={usuario} disabled/>
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Usuario nuevo</label>
                                    <input type="text" class="form-control" id="recipient-name"/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal correo */}
            <div class="modal fade" id="modalCorreo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cambiar correo electrónico</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Correo actual</label>
                                    <input type="email" class="form-control" id="recipient-name" placeholder={correo} disabled/>
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Correo nuevo</label>
                                    <input type="email" class="form-control" id="recipient-name"/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal contraseña */}
            <div class="modal fade" id="modalContraseña" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cambiar contraseña</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-1">
                                    <label for="recipient-name" class="col-form-label">Contraseña actual</label>
                                    <input type="password" class="form-control" placeholder="Contraseña" value={contraseña} aria-describedby="button-addon2" disabled/>
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Contraseña nueva</label>
                                    <input type="password" class="form-control" id="recipient-name"/>
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Repetir contraseña</label>
                                    <input type="password" class="form-control" id="recipient-name"/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Instagram */}
            <div class="modal fade" id="modalInstagram" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Redes sociales</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-1">
                                    <label for="recipient-name" class="col-form-label">Usuario de Instagram</label>
                                    <input type="text" class="form-control" placeholder="Contraseña" value={instagram} aria-describedby="button-addon2" disabled/>
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Cambiar usuario de Instagram</label>
                                    <input type="text" class="form-control" id="recipient-name"/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Twitter */}
            <div class="modal fade" id="modalTwitter" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Redes sociales</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-1">
                                    <label for="recipient-name" class="col-form-label">Usuario de Twitter</label>
                                    <input type="text" class="form-control" placeholder="Contraseña" value={twitter} aria-describedby="button-addon2" disabled/>
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Cambiar usuario de Twitter</label>
                                    <input type="text" class="form-control" id="recipient-name"/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Facebook */}
            <div class="modal fade" id="modalFacebook" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Redes sociales</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-1">
                                    <label for="recipient-name" class="col-form-label">Perfil de Facebook</label>
                                    <input type="text" class="form-control" placeholder="Contraseña" value={facebook} aria-describedby="button-addon2" disabled/>
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Cambiar perfil de Facebook</label>
                                    <input type="text" class="form-control" id="recipient-name"/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil;