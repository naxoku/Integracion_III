import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Users from "./componentes/Users";
import  Principal  from "./componentes/Principal";
import Navbar from './componentes/Navbar';
import Proyecto from "./componentes/Proyecto";
import ConfPerfil from "./componentes/ConfPerfil";

function App() {
    return (
        <Router>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Principal/>}/>
                    <Route path="/login" element={<Users/>} />
                    {/* <Route path="/Navbar" element={<Navbar/>}/> */}

                    {/* Acá va el editor de texto, pero hay que arreglarlo porque está algo bug*/}
                    <Route path="/proyecto" element={<Proyecto/>}/> 

                    {/* Acá está el componente de perfil de configuración del perfil de usuario */}
                    <Route path="/configuracion" element={<ConfPerfil/>}/>
                </Routes>
        </Router>
    );
}

export default App;
