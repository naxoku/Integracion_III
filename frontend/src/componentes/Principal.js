import React from 'react'

export const Principal = () => {
    return (
        <div>
            <div className='container-md mt-3'>
                <div class="card">
                    <div class="card-header">
                        Bienvenida
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Bienvenido a "Biblioteca Kowloon"</h5>
                        <p class="card-text">
                            Biblioteca Kowloon es un proyecto realizado para el ramo de "Taller de Integración III". Empieza buscando
                            los libros que más te interesen o también prueba a crear tus propios textos y comparte con tus amigos tus 
                            obras literarias.
                        </p>
                    </div>
                </div>
            </div>

            <div class="container-md">
                <h4 class="fw-bold mt-3">Lo más popular</h4>
                <div class="p-4 mb-4 bg-light border rounded-4">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {/* Libro 1 */}
                        <div class="col">
                            <div class="card h-100">
                                <img src="pan.png" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Oui oui madam!</h5>
                                    <p class="card-text">Comedia moderna sobre una pareja bien dispareja.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Comedia</span>
                                        <span class="badge text-bg-secondary m-1">Romance</span>
                                        <span class="badge text-bg-secondary m-1">Novela</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 2 */}
                        <div class="col">
                            <div class="card h-100">
                                <img src="portada2.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Siempre a tu lado</h5>
                                    <p class="card-text">Basada en la historia real del fiel perro japonés Hachikō.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Emocional</span>
                                        <span class="badge text-bg-secondary m-1">Drama</span>
                                        <span class="badge text-bg-secondary m-1">Hechos reales</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 3 */}
                        <div class="col">
                            <div class="card h-100">
                                <img src="portada3.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Libro del nuevo conductor</h5>
                                    <p class="card-text">Preguntas y respuestas del examen de conducción licencia clase B.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Utilidad</span>
                                        <span class="badge text-bg-secondary m-1">Estudio</span>
                                        <span class="badge text-bg-secondary m-1">Instructico</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Publicaciones recientes */}
                <h4 class="fw-bold mt-3">Publicaciones recientes</h4>
                <div class="p-4 mb-4 bg-light border rounded-4">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {/* Libro 1 */}
                        <div class="col">
                            <div class="card h-100">
                                <img src="pan.png" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Oui oui madam!</h5>
                                    <p class="card-text">Comedia moderna sobre una pareja bien dispareja.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Comedia</span>
                                        <span class="badge text-bg-secondary m-1">Romance</span>
                                        <span class="badge text-bg-secondary m-1">Novela</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 2 */}
                        <div class="col">
                            <div class="card h-100">
                                <img src="portada2.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Siempre a tu lado</h5>
                                    <p class="card-text">Basada en la historia real del fiel perro japonés Hachikō.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Emocional</span>
                                        <span class="badge text-bg-secondary m-1">Drama</span>
                                        <span class="badge text-bg-secondary m-1">Hechos reales</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 3 */}
                        <div class="col">
                            <div class="card h-100">
                                <img src="portada3.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Libro del nuevo conductor</h5>
                                    <p class="card-text">Preguntas y respuestas del examen de conducción licencia clase B.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Utilidad</span>
                                        <span class="badge text-bg-secondary m-1">Estudio</span>
                                        <span class="badge text-bg-secondary m-1">Instructico</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recomendaciones aleatorias */}
                <h4 class="fw-bold mt-3">Recomendaciones aleatorias</h4>
                <div class="p-4 mb-4 bg-light border rounded-4">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {/* Libro 1 */}
                        <div class="col">
                            <div class="card h-100">
                                <img src="pan.png" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Oui oui madam!</h5>
                                    <p class="card-text">Comedia moderna sobre una pareja bien dispareja.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Comedia</span>
                                        <span class="badge text-bg-secondary m-1">Romance</span>
                                        <span class="badge text-bg-secondary m-1">Novela</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 2 */}
                        <div class="col">
                            <div class="card h-100">
                                <img src="portada2.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Siempre a tu lado</h5>
                                    <p class="card-text">Basada en la historia real del fiel perro japonés Hachikō.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Emocional</span>
                                        <span class="badge text-bg-secondary m-1">Drama</span>
                                        <span class="badge text-bg-secondary m-1">Hechos reales</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>
                        {/* Libro 3 */}
                        <div class="col">
                            <div class="card h-100">
                                <img src="portada3.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Libro del nuevo conductor</h5>
                                    <p class="card-text">Preguntas y respuestas del examen de conducción licencia clase B.</p>
                                    <div>
                                        <span class="badge text-bg-secondary m-1">Utilidad</span>
                                        <span class="badge text-bg-secondary m-1">Estudio</span>
                                        <span class="badge text-bg-secondary m-1">Instructico</span>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Subido por: Ignacio</small>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Principal;