import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Users from "./componentes/Users";
import  Principal  from "./componentes/Principal";
import Navbar from './componentes/Navbar';

function App() {
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
