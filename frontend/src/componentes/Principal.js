import React from 'react'

export const Principal = () => {
    return (
        <div>
            <div className='container-md'>
                <h1 class="mt-2">Bienvenido a nuestra biblioteca virtual</h1>
            </div>

            {/* Cajas de recomendación */}
            <div class="container-md">
                <h4 class="fw-bold mt-3">Lo más popular</h4>
                <div class="p-4 mb-4 bg-light border rounded-4">
                    <div class="container-md">
                        <div class="card mb-3">
                            <div class="row">
                                <div class="col-md-2">
                                  <a href="/Libro"><img src="pan.png" class="img-fluid rounded-start" alt="fotoPerfil"/></a>
                                </div>
                                <div class="col-md-2">
                                  <a href="/configuracion"><img src="pan.png" class="img-fluid rounded-start" alt="fotoPerfil"/></a>
                                </div>
                                <div class="col-md-2">
                                  <a href="/configuracion"><img src="pan.png" class="img-fluid rounded-start" alt="fotoPerfil"/></a>
                                </div>
                                <div class="col-md-2">
                                  <a href="/configuracion"><img src="pan.png" class="img-fluid rounded-start" alt="fotoPerfil"/></a>
                                </div>
                                <div class="col-md-2">
                                  <a href="/configuracion"><img src="pan.png" class="img-fluid rounded-start" alt="fotoPerfil"/></a>
                                </div>
                                <div class="col-md-2">
                                  <a href="/configuracion"><img src="pan.png" class="img-fluid rounded-start" alt="fotoPerfil"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 class="fw-bold mt-3">Publicaciones recientes</h4>
                <div class="p-4 mb-4 bg-light border rounded-4">
                    <div class="container-fluid py-5">
                        <p>Libro acá</p>
                    </div>
                </div>
                <h4 class="fw-bold mt-3">Recomendaciones aleatorias</h4>
                <div class="p-4 mb-4 bg-light border rounded-4">
                    <div class="container-fluid py-5">
                        <p>Libro acá</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Principal;