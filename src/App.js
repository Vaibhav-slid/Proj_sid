import "./App.css";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Research from "./components/pages/Research";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/research" element={<Research />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouting />
      <Footer />
    </div>
  );
}

export default App;
