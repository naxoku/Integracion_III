import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getLoggedInUserId } from '../utils';
const API = process.env.REACT_APP_API;

function PerfilUser() {

    // VARIABLES DE TRABAJO
    let listaLibros = ["Libro_1", "Libro_2", "Libro_3", "Libro_4", "Libro_5"];

    const [usuario, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setPwd] = useState("");
    const [instagram, setIg] = useState("");
    const [facebook, setFb] = useState("");
    const [twitter, setTw] = useState("");
    const [descripcion, setDesc] = useState("");
    const [historial, setHistorial] = useState("");
    const [redes, setRedes] = useState("");
    

    let random1 = "randomasd1"
    let random2 = "random1231"

    // Obtener la información del usuario
    let { unnombre } = useParams();
    const elnombre = {unnombre}.unnombre;

    const getUser = async () => {

        const res = await axios.get(API+"/users/a/"+elnombre, {
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


    useEffect(() => {
            getUser();
    });
              

    return (
        <div className='container-md mt-3'>
            <div className='row'>

                {/* Foto */}
                <div className='col-sm-2 mt-2'>
                    <img className='img-fluid rounded-circle border d-flex mx-auto ' src='./pan.png' width="200" alt='fotoPerfil.png'/>
                </div>

                {/* Usuario y descripción */}
                <div className='col-sm-4'>
                    <div className='mt-2'>
                        <h4> {usuario} </h4>
                    </div>
                    <div className='mt-2'>
                        <h6> {descripcion} </h6>
                    </div>
                </div>

                {/* Tabla de redes sociales */}
                <div className='col'> 
                {redes==="True" &&<>
                    <div className='mt-2'>
                        <h4>Redes sociales</h4>
                    </div>
                    <div className='mt-2'>
                        <table class="table table-borderless table-hover table-sm ">
                            <tbody>
                                <tr>
                                    <th scope="row">Facebook</th>
                                    <td>{facebook}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Twitter</th>
                                    <td>{twitter}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Instagram</th>
                                    <td>{instagram}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </>}
                </div>
       
            </div>
    

            <div className='row mt-2'>

                {/* Historial de lectura */}
                <div className='col-sm' >
                {historial==="True" &&<>
                    <h4>Historial de lectura</h4>
                    <table class="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre libro</th>
                                <th scope="col">Autor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Libro random #1</td>
                                <td>{random1}</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Libro random #2</td>
                                <td>{random2}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    </>
                  }  
                 
                </div>

                {/* Libros publicados por el usuario */}
                <div className='col-sm'>
                    <h4>Libros publicados</h4>
                    <table class="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre libro</th>
                                <th scope="col">Autor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Don Quijote de la Mancha</td>
                                <td>{usuario}</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Cien años de soledad</td>
                                <td>{usuario}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PerfilUser