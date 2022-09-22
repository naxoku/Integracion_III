import React, { useState, useEffect, useRef } from "react";
import {removeToken}  from "../utils";
import {setToken}  from "../utils";
import axios from "axios";

const API = process.env.REACT_APP_API;

function Users() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [edad, setEdad] = useState("");
    const [password2, setPassword2] = useState("");
    const [email2, setEmail2] = useState("");
    
    const [editing, setEditing] = useState(false);
    const [id, setId] = useState("");

    const [error, setError] = useState("");
    const [error2, setError2] = useState("");
    
    const nameInput = useRef(null);
    const edadInput = useRef(null);
    
    let [users, setUsers] = useState([]);

    const login = async (e) => {
        e.preventDefault();
        removeToken();
        try {
         const response = await axios.post(`${API}/users/login`,{
            email2,
            password2
         });

           if (response.status === 200){
            console.log(response.data.token);
            setToken(response.data.token);
            window.location = "/";
            return null;
           }

        } catch (e){
            setError("El usuario y/o la contraseña son incorrecto(s)")
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API}/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });
            const data = await res.json();
            console.log(data);
            setEditing(false);
            setId("");
        }catch(e){
            setError2("Correo ya existe")
        }
        
        setName("");
        setEmail("");
        setEdad("");
        setPassword("");
        nameInput.current.focus();
    };  
    
    const getUsers = async () => {
        const res = await fetch(`${API}/users`);
        const data = await res.json();
        setUsers(data);
    };

    const deleteUser = async (id) => {
        const userResponse = window.confirm("Are you sure you want to delete it?");
        if (userResponse) {
            const res = await fetch(`${API}/users/${id}`, {
                method: "DELETE",
            });
            
            const data = await res.json();
            console.log(data);
            await getUsers();
        }
    };


    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container-md mt-2">
            <div className="row justify-content-center container">

                {/* Columna login */}
                <div className="col-sm-5">

                    <h4>Iniciar sesión</h4>
                    <form method = "POST" onSubmit={login} className="card card-body">
                        
                        <div className="form-group">
                            <input
                                type="email"
                                onChange={(e) => setEmail2(e.target.value)}
                                value={email2}
                                className="form-control m-1"
                                placeholder="Correo electrónico"
                                name={email2}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                onChange={(e) => setPassword2(e.target.value)}
                                value={password2}
                                className="form-control m-1"
                                placeholder="Contraseña"
                                name={password2}
                                     />
                                 </div>
        
                        <div>{error}</div>
                        
                        <button className="container-fluid btn btn-primary btn-block m-1">
                            { "Iniciar sesion"}
                        </button>
                    </form>
                    <div>
                        <h6 className="text-center text-secondary">¿No tienes una cuenta? <a href="/login">Crea una aquí</a></h6>
                    </div>
                </div>
                
                <div> <hr></hr> </div>

                {/* Columna register */}
                <div className="col-sm-5">
                    <h4>Crear cuenta de usuario</h4>
                    <form onSubmit={handleSubmit} className="card card-body">
                        <div className="form-group">
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                className="form-control m-1"
                                placeholder="Nombre de usuario"
                                ref={nameInput}
                                autoFocus
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                onChange={(e) => setEdad(e.target.value)}
                                value={edad}
                                className="form-control m-1"
                                min="0" 
                                max="100"
                                placeholder="Edad"
                                ref={edadInput}
                                autoFocus
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="form-control m-1"
                                placeholder="Correo electrónico"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                className="form-control m-1"
                                placeholder="Contraseña"
                            />
                        </div>
                        <button className="container-fluid btn btn-primary btn-block m-1">
                            {editing ? "Update" : "Create"}
                        </button>
                    </form>
                    <div>
                        <h6 className="text-center text-secondary">¿Ya tienes una cuenta? <a href="/">Inicia sesión</a></h6>
                    </div>
<<<<<<< Updated upstream
                </div>
=======
                    <div className="form-group">
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="form-control m-1"
                            placeholder="Contraseña"
                        />
                    </div>
                    <div>{error2}</div>
                    <button className="container-fluid btn btn-primary btn-block m-1">
                        {editing ? "Update" : "Create"}
                    </button>
                </form>
>>>>>>> Stashed changes
            </div>
        </div>
        
    );  
};  
    
export default Users;