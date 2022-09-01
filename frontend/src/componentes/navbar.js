import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {  
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link to="/Principal">
        <img src='./kowloon.png' width="50"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/Principal" >Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Users">Usuarios</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
          </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar;