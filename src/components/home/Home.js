import React from "react";
import "./Home.css";
import SliderComponent from "../common/SliderComponent";
import CurvyBox from "../common/CurvyBox";
import image1 from "../../assets/download1.jpg";
import image2 from "../../assets/download2.jpg";
import image3 from "../../assets/download3.jpg";
import personImage from "../../assets/personImage.jpg";
import NameCard from "../common/NameCard";
import CurvyInfoCard from "../common/infoCard/CurvyInfoCard";
import ContentSection from "../common/contentSection/ContentSection";
import { text } from "@fortawesome/fontawesome-svg-core";

export const items = [
  { image: image1 },
  {
    text: `The Computer Science Department is dedicated to providing
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
            competitions.`,
  },
  { image: image2 },
  { image: image3 },
];

// const coursesData = [
//   {
//     title: "Artificial Intelligence",
//     image: image2,
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     title: "Artificial Intelligence",
//     image: image2,
//     text: "some other time please",
//   },
//   {
//     title: "Artificial Intelligence",
//     image: image2,
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     title: "Artificial Intelligence",
//     image: image2,
//     text: "some other time please",
//   },
//   {
//     title: "Artificial Intelligence",
//     image: image2,
//     text: "some other time please",
//   },
//   {
//     title: "Artificial Intelligence",
//     image: image2,
//     text: "some other time please",
//   },
// ];

const courseObj = {
  title: "Artificial Intelligence",
  image: image2,
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};

const coursesData = new Array(4).fill(courseObj);
function Home() {
  const personImg = [
    { image: personImage },
    { image: personImage },
    { image: personImage },
  ];
  const imageStock = [image1, image2, image3];
  return (
    <div className="home">
      <div className="body">
        {/* <div className="namecard-container">
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
        </div> */}
        <NameCard
          title={"𝑫𝒓.‎‎‎‎‎‎‎‎‎‎‎‎‎‎‏‏‎ ‎𝑺𝒊𝒅𝒅𝒉𝒂𝒓𝒕𝒉𝒂 𝑪𝒉𝒐𝒖𝒃𝒆𝒚"}
          description={
            "Head of Department | Computer Science & Engg | SSTC Bhilai"
          }
          links={[
            { label: "Profiles", link: "" },
            { label: "Resume", link: "" },
          ]}
        />
      </div>
      {/* <SliderComponent images={imageStock} transitionType={"slide"} /> */}
      {/* <div style={{ height: "100vh" }} /> */}
      {/* <div className="info-container">
        <div className="info-box">
          <h3 style={{ fontFamily: "cursive" }}>
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
            <img
              key={index}
              src={item.image}
              alt="user-image"
              className="profile-cards"
            />
          ))}
        </div>
      </div> */}
      {/* <CurvyBox
        backgroundImage={"../../assets/download3.jpg"}
        children={
          <SliderComponent
            images={imageStock}
            height={"500px"}
            width={"800px"}
            transitionType={"fade"}
          />
        }
      /> */}
      <CurvyBox
        backgroundColor={"whitesmoke"}
        children={
          <SliderComponent
            items={imageStock}
            width={"60%"}
            transitionType={"fade"}
          />
        }
      />

      <div
        className="home__image-container"
        style={{ backgroundImage: `url(${"../../assets/websiteBG.jpg"})` }}
      >
        <SliderComponent items={imageStock} height={"450px"} width={"90%"} />
      </div>
      <div
        className="home__image-container"
        style={{ backgroundImage: `url(${"../../assets/websiteBG.jpg"})` }}
      >
        <ContentSection
          title={`Lorem ipsum`}
          tagLine={`lorem ipsum sans serif`}
          data={imageStock}
          description={`iashrungsi aoiigh aga goiegrio nerg eaiogrjea gjlk elagjlk fngladfglhaoi r kndgklg aoigaeriogh kla gnl jgoiagoireglag klajgoiajrgl jargl algraeirigjlkargj liarjgljr gliajgiarjgieja g lkjarlgjaoigjoiJ 9p vS*vhdrg jkrghu erhg urgh aerhgkrh gjkhgorgher;g rgh eroigh orgh aoergh;roe gr gerhgoergoireg oerigu;u erog herg;o erhgo; uerghoreighoergherh guoerhg jaj skldgnlkadsnlk vdfjfgij ajigergoiherogheg aerkgjkdflvhaduo;uigfyadfdj adfj`}
          sliderBool={true}
        />
      </div>
      <div
        className="home__courses-container"
        style={{ flexDirection: "column" }}
      >
        <h1>≭ Courses ≭</h1>
        <CurvyInfoCard data={coursesData} />
      </div>
    </div>
  );
}

export default Home;
