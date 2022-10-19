import React, { useState } from "react"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Redirect from "react";

const API = process.env.REACT_APP_API;


class Tabla extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
   
    }
  }

  async filtrar(busqueda){
 
      const res = await fetch(`${API}/users`);
      const data = await res.json();
      var resultadosBusqueda = data.filter((elemento)=>{

      if(elemento.name.toString().toLowerCase().includes(busqueda.toLowerCase())
       || elemento.email.toString().toLowerCase().includes(busqueda.toLowerCase())
      ){
          return elemento;
      }else{return 0}
      });
    
     this.setState({usuarios : resultadosBusqueda});
  }

   redir(search){
    window.location= "../perfil/"+search;
}

  componentDidMount(){
    this.filtrar(this.props.busqueda);

  }


 render(){
  return(

    <div className='container-md border-danger'>
    <h4 class="fw-bold mt-3">Resultados relacionados a "{this.props.busqueda}"</h4>
     
       <div>
           <h2>Usuarios/Autores</h2>  
                  
                    {this.state.usuarios ? <> {
                        this.state.usuarios.map((usuario, index)=>(
                    

                    <div class="p-4 mb-4 bg-light border rounded-4" onClick={() => this.redir(usuario.name)}>
                    
                        <img src= {API+"/img/"+usuario._id} height="100" width="100" class="img-fluid rounded-start" alt="fotoPerfil"/>
                        <h3>{usuario.name}</h3>
                        <p>{usuario.biografia}</p>
                    </div>
                  ))}
                  </>:<>
                  
                  <p> No hay usuarios relacionados a tu busqueda</p>
                  
                  </>
                  
                  }


        
       </div>
       <h2>Libros</h2>

</div>

  );

}

}

export const Busquedas = () => {

 
    const API = process.env.REACT_APP_API;
    const imagen = process.env.imagen;
    const { buscado } = useParams();
    const busqueda1 = {buscado}.buscado;


    return (
        <div className='container-md border-danger'>
            <Tabla busqueda={busqueda1} />
        </div>
     
    )
}

export default Busquedas;