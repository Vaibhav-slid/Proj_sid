import React, { useEffect, useState } from "react";
import "./SplashScreen.css";
import Logo from "../../assets/logo.png";

const SplashScreen = () => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
    }, 3000); // Wait for 3 seconds before starting fade-out

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${isFadingOut ? "fade-out" : ""}`}>
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="splash-logo" />
      </div>
      <div className="splash-text-container">
        <h2 className="splash-text">Dr. Siddhartha Choubey</h2>
      </div>
    </div>
  );
};

export default SplashScreen;
