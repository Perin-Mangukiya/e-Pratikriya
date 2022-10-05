import './App.css';
import NavBar from './Components/NavBar'
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
