import "./App.css";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
// import routes

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
