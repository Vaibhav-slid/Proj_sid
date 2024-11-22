import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Research from "./components/pages/Research";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import WorkShop from "./components/pages/WorkShop";
import Webinar from "./components/pages/Webinar";
import SplashScreen from "./components/splash/SplashScreen";
import UpcomingEvents from "./components/common/upcomingEvents/UpcomingEvents";

function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/research" element={<Research />} />
      <Route path="/publications" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/workshop" element={<WorkShop />} />
      <Route path="/webinar" element={<Webinar />} />
      <Route path="/upcomingevents" element={<UpcomingEvents />} />
    </Routes>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isSplashScreenShown = sessionStorage.getItem("isSplashScreenShown");

    if (isSplashScreenShown) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("isSplashScreenShown", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="App">
      {isLoading && <SplashScreen />}
      {!isLoading && (
        <>
          <Navbar />
          <AppRouting />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
