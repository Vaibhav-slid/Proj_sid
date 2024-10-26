import React from "react";
import "./Home.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ImageSlider from "../common/ImageSlider";
import CurvyBox from "../common/CurvyBox";
function Home() {
  const imageStock = [
    "https://via.placeholder.com/800x300?text=Image+3",
    "https://via.placeholder.com/800x300?text=Image+3",
    "https://via.placeholder.com/800x300?text=Image+3",
  ];
  return (
    <div className="home">
      <Navbar />
      <div className="body">
        <div className="namecard-container">
          <div className="namecard-info">
            <h1>𝑫𝒓.‎‎‎‎‎‎‎‎‎‎‎‎‎‎‏‏‎ ‎𝑺𝒊𝒅𝒅𝒉𝒂𝒓𝒕𝒉𝒂 𝑪𝒉𝒐𝒖𝒃𝒆𝒚</h1>
            <h5 style={{ alignItems: "start" }}>
              Head Of Department | Computer Science & Engg | SSTC Bhilai, India.
            </h5>
          </div>
          <div style={{ alignSelf: "flex-end" }}>
            <span
              onClick={() => alert("sorry no files attached")}
              className="namecard-links"
            >
              Profile
            </span>
            <span> | </span>
            <span
              onClick={() => alert("sorry no files attached")}
              className="namecard-links"
            >
              Resume
            </span>
          </div>
        </div>
      </div>
      <ImageSlider images={imageStock} />
      <div style={{ height: "100vh" }} />
      <CurvyBox backgroundColor={'red'} />
      <div className="experiment"></div>
      <Footer />
    </div>
  );
}

export default Home;
