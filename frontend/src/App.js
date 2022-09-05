import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Users from "./componentes/Users";
import  Principal  from "./componentes/Principal";
import Navbar from './componentes/Navbar';
import {checkIfIsLoggedIn}  from "./utils";
import {getLoggedInUserId}  from "./utils";

function App() {

    const isLoggedIn = checkIfIsLoggedIn();
    const user = getLoggedInUserId();
    

    return (
        <Router>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Principal/>}/>
                    <Route path="/login" element={<Users/>} />
                    <Route path="/Navbar" element={<Navbar/>}/>
                </Routes>
        </Router>
    );
}
    
export default App;
