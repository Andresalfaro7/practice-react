import logo from './logo.svg';
import './App.css';
import Navbar from "./components/partials/Navbar";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/router/Router";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
