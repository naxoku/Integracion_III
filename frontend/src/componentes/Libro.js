import React, {useState, useEffect} from 'react'

import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import { useParams } from 'react-router-dom';

function Libro() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    let { nombreLibro } = useParams();
    const nombrelibro = {nombreLibro}.nombreLibro;

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }
    
    function changePage(offSet){
        setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }
    
    function changePageBack(){
        changePage(-1)
    }
    
    function changePageNext(){
        changePage(1)
    }
    
    // Obtiene el ancho del div del libro    
    let [valor, setValor] = useState("");

    window.addEventListener("resize", function(){
        let divSize = document.getElementById("documento");
        setValor(divSize.offsetWidth);
        // console.log(valor);
    });
  
    return (
        <div className='container-md'>
            <div class="p-4 mt-3 mb-4 bg-light border rounded-4">
                <center>
                    <div id='documento'>
                        <Document
                            file={{url : "http://localhost:5000/file/"+nombrelibro}}
                            onLoadSuccess={onDocumentLoadSuccess}
                            >
                            <Page 
                                pageNumber={pageNumber}
                                width={valor}
                                
                            />
                        </Document>
                    </div>
                    

                    <div>
                        <div className='mt-3'>
                            <p> Página {pageNumber} de {numPages}</p>
                        </div>
                        
                        <button 
                            type="button"
                            disabled={pageNumber <= 1}
                            onClick={changePageBack}
                            className="btn btn-primary m-1"
                        >
                            Anterior
                        </button>
                        <button
                            type="button"
                            disabled={pageNumber >= numPages}
                            onClick={changePageNext}
                            className="btn btn-primary m-1"
                        >
                            Siguiente
                        </button>
                    </div>
                </center>
            </div>
        </div>
    );
}
export default Libro;