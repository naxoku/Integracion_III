import React from "react"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 


const API = process.env.REACT_APP_API;

function Biblioteca ()  {
    const [libro, setBook] = useState("");
    let { ellibro } = useParams();
    const libroo = {ellibro}.ellibro;
    const getBook = () => {
        const res = axios.get(`${API}/Libros/${idUser}`, {
            mode: "no-cors",
            });   
    
    const data = res.data 
    setBook(data["libro"])
};
//useEffect(() => {
  //  getBook();
//});
    return (
        <table className="table table-striped">
            <thead>
                    <tr>
                    <th scope="col">#
                    </th>
                    
                  
                    <th scope="col">Libro</th>
                    <td>{libro}</td>
                    
                   
                    <th scope="col">Autor</th>
                   
                    
                    <th scope="col">Perfil</th>
                    </tr>
                    <th>
                    
                    </th>
                
            </thead>
        </table>
    )
    }

export default Biblioteca;