import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Contact from "./Pages/Contact";
import AboutMe from "./Pages/AboutMe";
import Galery from "./Pages/Galery";
import Ubicacion from "./Pages/Ubicacion";


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/AboutMe">About Me</Link>
              </li>
              <li>
                <Link to="/Galery">Galery</Link>
              </li>
              <li>
                <Link to="/Ubicacion">Ubicacion</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/AboutMe" element={<AboutMe/>}></Route>
            <Route path="/Galery" element={<Galery/>}></Route>
            <Route path="/Ubicacion" element={<Ubicacion/>}></Route>
          </Routes>
        </Router>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
