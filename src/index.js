import ReactDOM from "react-dom";
import App from "/media/hp/107 GB Volume1/WebDev/Projects/portfolio/src/App.js";
import "/media/hp/107 GB Volume1/WebDev/Projects/portfolio/src/index.css";
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <BrowserRouter><App /> </BrowserRouter> );

