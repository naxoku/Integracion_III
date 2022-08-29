import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


import Users from "./componentes/Users";
import  Principal  from "./componentes/Principal";

function App() {
  return (

  <Router>
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/login" element={<Users/>} />
      </Routes>
  </Router>

    
  );
}

export default App;
