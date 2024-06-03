import Bio from "/media/hp/107 GB Volume1/WebDev/30ProjectsToMasterWebDev/01__Portfolio/portfolio/src/Pages/Bio/Bio.js";
import Home from "/media/hp/107 GB Volume1/WebDev/30ProjectsToMasterWebDev/01__Portfolio/portfolio/src/Pages/Home/Home.js";
import "./App.css";
import { Routes, Route } from "react-router-dom"
import Contact from "./Pages/ContactForm/ContactForm";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="bio" element={ <Bio/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
