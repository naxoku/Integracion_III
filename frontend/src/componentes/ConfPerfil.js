import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import {checkIfIsLoggedIn, getLoggedInUserId}  from "../utils";
import axios from 'axios'; 

const API = process.env.REACT_APP_API;

const Perfil = () => {

     // Para modificar y guardar variables
    const [usuario, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setPwd] = useState("");
    const [instagram, setIg] = useState("");
    const [facebook, setFb] = useState("");
    const [twitter, setTw] = useState("");
    const [descripcion, setDesc] = useState("");
    const [historial, setHistorial] = useState("");
    const [redes, setRedes] = useState("");

    const cadenaABooleano = cadena => cadena === "True";

    const [nuevoUsuario, setnNombre] = useState("");
    const [nuevaFoto, setnFoto] = useState("");
    const [nuevoCorreo, setnCorreo] = useState("");
    const [nuevaContrasena, setnPwd] = useState("");
    const [nuevoIg, setnIg] = useState("");
    const [nuevoFb, setnFb] = useState("");
    const [nuevoTw, setnTw] = useState("");
    const [nuevaDesc, setnDesc] = useState("");
    const [nmostrarHistorial,setnMostrarHistorial] = useState("");
    const [nmostrarRedes, setnMostrarRedes] = useState("");
    const refhistorial = useRef();
    const redesSociales = useRef();

    const idUser = getLoggedInUserId();
    const logeado = checkIfIsLoggedIn();

    const deleteUser = async (e) => {
        const userResponse = window.confirm("¿Estás seguro de que quieres eliminar tu cuenta?");
        if (userResponse) {

            await axios.delete(`${API}/users/${idUser}`,{
                idUser
            });

            window.location= "/registro";
            
        }
    };
    
    // Obtener la información del usuario
    const getUser = async () => {

        const res = await axios.get(`${API}/users/${idUser}`, {
            mode: "no-cors",
            });
       
        const data = res.data;
        
        setNombre(data['name']);
        setIg(data['instagram'])
        setCorreo(data['email']);
        setPwd(data['password']);
        setFb(data['facebook']);
        setTw(data['twitter']);
        setDesc(data['biografia']);
        setHistorial(data['mostrarHistorial']);
        setRedes(data['mostrarRedes']);

    
    };


    // mostrar/esconder historial de lectura
    async function mhistorial(e, isChecked) {
        e.preventDefault();
         // const isChecked = refhistorial.current.checked;

        if (isChecked){
        setnMostrarHistorial("True");
        await axios.put(`${API}/users/historial/${idUser}`, {
             nmostrarHistorial
         });
 
        }else{

            setnMostrarHistorial("False");
            await axios.put(`${API}/users/historial/${idUser}`, {
                     nmostrarHistorial
             });
        }
      
    }

    // mostrar/esconder redes sociales
    async function mredes(e) {
        e.preventDefault();
        const isChecked = redesSociales.current.checked;
    
        if (isChecked){
        setnMostrarRedes("True");   
        await axios.put(`${API}/users/redes/${idUser}`, {
             nmostrarRedes
         });
        }else{

            setnMostrarRedes("False");
            await axios.put(`${API}/users/redes/${idUser}`, {
                     nmostrarRedes
             });
        }
      
    }

    // Editar algo del usuario
    const editFb = async () => {
        
        await axios.put(`${API}/users/facebook/${idUser}`, {
                nuevoFb
            });
        window.location = "/configuracion";
        };
    const editTw = async () => {
        
        await axios.put(`${API}/users/twitter/${idUser}`, {
                    nuevoTw
                });
        window.location = "/configuracion";
        };
    const editIg = async () => {
        
        await axios.put(`${API}/users/instagram/${idUser}`, {
                    nuevoIg
            });
        window.location = "/configuracion";
        };



    const editNombre = async () => {
    
        await axios.put(`${API}/users/nombre/${idUser}`, {
                    nuevoUsuario
                });
        window.location = "/configuracion";
        };
    const editCorreo = async () => {
        
        await axios.put(`${API}/users/correo/${idUser}`, {
                                nuevoCorreo
            });
        window.location = "/configuracion";
        };
    const editPw = async () => {

        await axios.put(`${API}/users/password/${idUser}`, {
                                   nuevaContrasena
            });
        window.location = "/configuracion";
            };
    const editDesc = async () => {
        
        await axios.put(`${API}/users/biografia/${idUser}`, {
                            nuevaDesc
                        });
        window.location = "/configuracion";
            };

    

    // mostrar datos actuales del usuario al cargar la pagina
    useEffect(() => {
      getUser();

      if(cadenaABooleano(historial)){
        refhistorial.current.checked = true ;
    }else{
        refhistorial.current.checked = false ;
        }
  
    if(cadenaABooleano(redes)){
        redesSociales.current.checked = true ;
    }else{
        redesSociales.current.checked = false ;
        }
    
 
        });
        
    
    return (

        <div className='container-md mt-2'>

        {logeado && <>
    
            <div className='row'>
                <div className='col-sm'>
                    <h4>Configuración de la cuenta</h4>

                    <h6>Nombre de usuario</h6>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder={usuario} aria-describedby="button-addon2" disabled/>
                        {/* Boton del Modal */}
                        <button type="button" class="btn bg-primary text-white" 
                        data-bs-toggle="modal" 
                        data-bs-target="#modalUsuario"
                        data-bs-whatever="@mdo">
                            Editar</button>
                    </div>
                    <h6>Correo electrónico</h6>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder={correo} aria-describedby="button-addon2" disabled/>
                        <button type="button" class="btn bg-primary text-white"  
                        data-bs-toggle="modal" 
                        data-bs-target="#modalCorreo"
                        data-bs-whatever="@mdo">
                            Editar</button>
                    </div>
                    <h6>Contraseña</h6>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Contraseña" value={contrasena} aria-describedby="button-addon2" disabled/>
                        <button type="button" class="btn bg-primary text-white"  
                        data-bs-toggle="modal" 
                        data-bs-target="#modalContraseña"
                        data-bs-whatever="@mdo">
                            Editar</button>
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
                            Editar</button>
                    </div>
                    <h6>Twitter:</h6>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control" placeholder={twitter} aria-describedby="button-addon2" disabled/>
                        <button type="button" class="btn bg-primary text-white" 
                        data-bs-toggle="modal" 
                        data-bs-target="#modalTwitter"
                        data-bs-whatever="@mdo">
                            Editar</button>
                    </div>
                    <h6>Facebook:</h6>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control" placeholder={facebook} aria-describedby="button-addon2" disabled/>
                        <button type="button" class="btn bg-primary text-white" 
                        data-bs-toggle="modal" 
                        data-bs-target="#modalFacebook"
                        data-bs-whatever="@mdo">
                            Editar</button>
                    </div>

                    <h4>Configuración de privacidad</h4>
                    <br></br>

                    <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" value="" ref={refhistorial} checked={cadenaABooleano(historial)}  onChange={(e) => mhistorial(e)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Mostrar el historial de lectura al público</label>
   </div>
                    <br></br>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" ref={redesSociales} role="switch" id="flexSwitchCheckDefault" checked={cadenaABooleano(redes)} onChange={(e) => mredes(e)}/>
                        <label class="form-check-label" for="flexSwitchCheckDefault">Mostrar redes sociales al público</label>
                    </div>
                    
                </div>
                
                {/* Columna derecha */}
                <div className='col-sm'>
                    <h4>Presentación al público</h4>

                    <h6>Foto de perfil</h6>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                              < img src={API+"/img/"+idUser} class="img-fluid rounded-start" alt="fotoPerfil"/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{usuario}</h5>
                                    <p class="card-text">{descripcion}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <h6>Cambiar foto de perfil</h6>
                        <form action={API+"/users/img/"+idUser} method='POST' enctype="multipart/form-data"  class="input-group">
                            
                            <input type="file" name='file' class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                            <button class="btn bg-primary text-white" type="submit" value="Upload"  id="inputGroupFileAddon04"> Subir</button>  
                        </form>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label"><h6>Editar biografía</h6></label>
                        <textarea class="form-control" placeholder="Escribe tu biografía..." id="exampleFormControlTextarea1" rows="5" onChange={(e) => setnDesc(e.target.value)}></textarea>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-primary me-md-2" type="button" onClick={(e) => editDesc(nuevaDesc)}>Actualizar</button>
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
                                    <input onChange={(e) => setnNombre(e.target.value)} type="text" class="form-control" id="recipient-name"/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary" onClick={(e) => editNombre(nuevoUsuario)}>Guardar</button>
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
                                    <input onChange={(e) => setnCorreo(e.target.value)}  type="email" class="form-control" id="recipient-name"/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary" onClick={(e) => editCorreo(nuevoCorreo)}>Guardar</button>
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
                                    <input type="password" class="form-control" placeholder="Contraseña" value={contrasena} aria-describedby="button-addon2" disabled/>
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Contraseña nueva</label>
                                    <input onChange={(e) => setnPwd(e.target.value)}  type="password" class="form-control" id="recipient-name"/>
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Repetir contraseña</label>
                                    <input type="password" class="form-control" id="recipient-name"/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary" onClick={(e) => editPw(nuevaContrasena)}>Guardar</button>
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
                                    <input type="text" class="form-control" placeholder={instagram} value={instagram} aria-describedby="button-addon2" disabled/>
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Cambiar usuario de Instagram</label>
                                    <input type="text" class="form-control" id="recipient-name"  onChange={(e) => setnIg(e.target.value)}/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary"  onClick={(e) => editIg(nuevoIg)}>Guardar</button>
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
                                    <input type="text" class="form-control" id="recipient-name" onChange={(e) => setnTw(e.target.value)}/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary" onClick={(e) => editTw(nuevoTw)}>Guardar</button>
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
                                    <input type="text" class="form-control" id="recipient-name" onChange={(e) => setnFb(e.target.value)}/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary" onClick={(e) => editFb(nuevoFb)}>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div>
               <button onClick={(e) => deleteUser(e)}>eliminar la cuenta</button> 
            </div>
    
                
         </>}

      

    </div>

    )

        }

export default Perfil;