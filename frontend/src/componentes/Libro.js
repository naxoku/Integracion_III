import React, {useState} from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
function Libro() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }

  return (
    <div className='container-md'>
        <div class="p-4 mt-4 mb-4 bg-light border rounded-4">
            <h4>Autor</h4>
            {/* <header className="App-header">
                <Document file={{url : "http://localhost:5000/file/Material_Referencial_1.pdf"}} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page height="600" pageNumber={pageNumber} />
                </Document>
                <p> Page {pageNumber} of {numPages}</p>
                { 
                    pageNumber > 1 && 
                    <button onClick={changePageBack}>Previous Page</button>
                }
                {
                    pageNumber < numPages &&
                    <button onClick={changePageNext}>Next Page</button>
                }
            </header> */}
            <center>
                <div>
                    <Document file={{url : "http://localhost:5000/file/Material_Referencial_1.pdf"}} onLoadSuccess={onDocumentLoadSuccess}> {
                        Array.from(
                            new Array(numPages),
                            (el,index) => (
                                <Page 
                                    key={`page_${index+1}`}
                                    pageNumber={index+1}
                                />
                            )
                        )}
                    </Document>
                </div>
            </center>
        </div>
    </div>
    
  );
}

export default Libro;