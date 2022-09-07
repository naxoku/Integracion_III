import React from 'react';
import { Link } from 'react-router-dom';
import { checkIfIsLoggedIn, removeToken } from '../utils';


export const Navbar = () => {

    const logeado = checkIfIsLoggedIn();
	const cerrarSesion = () => {
		removeToken();
		window.location = "/login";
	}

	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light border">
  				<div class="container-md">
					{/* Logo del Navbar */}
					<div>
						<Link to="/">
							<img className='me-2' src='./libroIcon.png' width="50" alt='PageLogo.png'/>
						</Link>
					</div>
					<h4 className='mt-2 me-2'>Biblioteca Kowloon</h4>
					
					{/* Botón responsive design */}
  				  	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  				  	  	<span class="navbar-toggler-icon"></span>
  				  	</button>

					{/* Lista de botones en el navbar */}
  				  	<div class="collapse navbar-collapse" id="navbarSupportedContent">
  				  	  	<ul class="navbar-nav me-auto mb-lg-0">
							<li class="d-flex m-1">
                            	<a href="/" class="btn btn-primary container-md " role="button" aria-current="page">
                                Página principal</a>
                        	</li>
							<li class="d-flex m-1">
                            	<a href="/" class="btn btn-primary container-md" role="button" aria-current="page">
                                Biblioteca</a>
                        	</li>
							<li class="d-flex m-1">
                            	<a href="/" class="btn btn-primary container-md" role="button" aria-current="page">
                                Repositorio</a>
                        	</li>
							<li class="d-flex m-1">
                            	<a href="/login" class="btn btn-primary container-md" role="button" aria-current="page">
                                Iniciar sesión</a>
                        	</li>
							{logeado && (
							  <li class="nav-item me-3">
                            	<a onClick= {cerrarSesion} href="/login" class="btn btn-primary" role="button" aria-current="page">
                                Cerrar sesión</a>
                        	  </li>
                            )}

							{!logeado && (
							  <li class="nav-item me-3">
                            	<a href="/login" class="btn btn-primary" role="button" aria-current="page">
                                Iniciar sesión</a>
                        	  </li>
                            )}
  				  	  	</ul>
  				  	  	<form class="d-flex m-1">
  				  	  	  	<input class="form-control me-2" type="search" placeholder="Ingrese una búsqueda..." aria-label="Search"/>
  				  	  	  	<button class="btn btn-primary" type="submit">Buscar</button>
  				  	  	</form>
  				  	</div>
  				</div>
			</nav>
		</div>
	)
}

export default Navbar;