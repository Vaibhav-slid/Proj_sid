import "./App.css";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Research from "./components/pages/Research";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
