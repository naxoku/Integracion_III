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
           setError("Hubo un problema al ingresar, por favor intente nuevamente")
        } catch (e){
            console.error(e);
            setError("El usuario y/o la contraseña son incorrecto(s)")
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!editing) {
            const res = await fetch(`${API}/users`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  email,
                  edad,
                  password,
                }),
            });
            await res.json();
        } else {
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
        }
        await getUsers();
        
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
        
        <div className="row">
        
            <div className="col-md-4">
                <div className="m-3">
                    <h4>Iniciar sesión</h4>
                </div>
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
                    <button className="container-fluid btn btn-primary btn-block m-1">
                        { "Iniciar sesion"}
                    </button>
                </form>
            </div>
        
      
            <div className="col-md-4">
                <div className="m-3">
                    <h4>Crear cuenta de usuario</h4>
                </div>
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
            </div>
        
        </div>
    );  
};  
    
export default Users;