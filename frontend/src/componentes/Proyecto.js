import React from 'react'
import { checkIfIsLoggedIn } from '../utils';
import Editor from "./Editor";

const logeado = checkIfIsLoggedIn();

const Proyecto = () => {
    return (
      <div className='container-md border-danger'>
      {logeado ? <>
  

           <div>
             <h3>Agrega categoría a tu proyecto: </h3>
             
           </div> 
           <div>
             <h3>Agrega etiquetas a tu proyecto: </h3>
             
           </div>
           <Editor/>
       
        </>:<>
        
        <h1>Debes tener una cuenta para crear un proyecto</h1>
        
        </>}
        </div>
    )
}

export default Proyecto