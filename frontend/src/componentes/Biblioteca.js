import React from "react"



const API = process.env.REACT_APP_API;

const Biblioteca= ()=>  {
   
    return (
        <table className="table table-striped">
            <thead>
                    <tr>
                    <th scope="col">#
                    </th>
                    
                  
                    <th scope="col">Libro</th>
                    
                    
                   
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