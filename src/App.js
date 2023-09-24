
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
         
      <BrowserRouter>  
      <NavBar />
        <Banner/>
         <Skills />
         <Projects />
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
