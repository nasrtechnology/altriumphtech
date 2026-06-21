import './App.css';
import './template/main-style.css';
import "./assets/css/icon.min.css";
import "./assets/css/navbar.css";
import Header from "./template/Header";
import Home from "./template/Home";
import Footer from './template/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import About from "./template/About";
import Contact from "./template/Contact";
import Projects from "./template/Projects";
import Pricing from "./template/Pricing";
import Team from "./template/Team";
import Services from "./template/Services";


function App() {
  return (
     <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />
        <Route
          path="/pricing"
          element={<Pricing />}
        />
        <Route
          path="/services"
          element={<Services />}
        />
         <Route
          path="/team"
          element={<Team />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
