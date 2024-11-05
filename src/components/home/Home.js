import React from "react";
import "./Home.css";
import Footer from "../footer/Footer";
import SliderComponent from "../common/SliderComponent";
import CurvyBox from "../common/CurvyBox";
import image1 from "../../assets/download1.jpg";
import image2 from "../../assets/download2.jpg";
import image3 from "../../assets/download3.jpg";
function Home() {
  const items = [
    { image: image1 },
    // {
    //   text: `The Computer Science Department is dedicated to providing
    //         high-quality education and research opportunities in the field of
    //         computer science and technology. The department offers a
    //         comprehensive curriculum that covers a wide range of topics,
    //         including programming, algorithms, data structures, software
    //         engineering, artificial intelligence, machine learning, and
    //         cybersecurity. Students are encouraged to engage in hands-on
    //         projects, internships, and collaborative research to apply
    //         theoretical knowledge in real-world scenarios. The department also
    //         emphasizes the importance of ethical practices in computing and
    //         promotes innovation through various workshops, seminars, and
    //         competitions.`,
    // },
    { image: image2 },
    { image: image3 },
  ];
  const imageStock = [image1, image2, image3];
  return (
    <div className="home">
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
      {/* <SliderComponent images={imageStock} transitionType={"slide"} /> */}
      {/* <div style={{ height: "100vh" }} /> */}
      <div className="info-container">
        <div className="info-box">
          <h3 style={{fontFamily: 'cursive'}}>
            The Computer Science Department is dedicated to providing
            high-quality education and research opportunities in the field of
            computer science and technology. The department offers a
            comprehensive curriculum that covers a wide range of topics,
            including programming, algorithms, data structures, software
            engineering, artificial intelligence, machine learning, and
            cybersecurity. Students are encouraged to engage in hands-on
            projects, internships, and collaborative research to apply
            theoretical knowledge in real-world scenarios. The department also
            emphasizes the importance of ethical practices in computing and
            promotes innovation through various workshops, seminars, and
            competitions.
          </h3>
        </div>
        <div className="profile-cards-box">
          {items.map((item, index) => (
            <img key={index} src={item.image} className="profile-cards" />
          ))}
        </div>
      </div>
      <CurvyBox
        backgroundImage={"../../assets/download3.jpg"}
        children={
          <SliderComponent
            images={imageStock}
            height={"500px"}
            width={"800px"}
            transitionType={"fade"}
          />
        }
      />
      <CurvyBox
        backgroundColor={"#faffeb"}
        children={<SliderComponent images={imageStock} width={"60%"} />}
      />
      <Footer />
    </div>
  );
}

export default Home;
