import React from "react";
import "./CurvyInfoCard.css";
import image from "../../../assets/download2.jpg";
const CurvyInfoCard = ({ data }) => {
  return (
    data?.length > 0 &&
    data?.map((item, index) => (
      <div
        key={index}
        className={`container ${index % 2 === 0 ? "image-left" : "text-left"}`}
      >
        <div className="image-section">
          <div
            className={`absolute-box ${
              index % 2 === 0 ? "left-curve" : "right-curve"
            }`}
          ></div>
          <img src={data[index]?.image || image} alt="" />
        </div>
        <div className="text-section">
          <h2 className="text-section-title">{data[index]?.title}</h2>
          <p>
            {data[index]?.text ||
              `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`}
          </p>
          <a href={data[index]?.link}>
            <div className="button">Find out more & Start today</div>
          </a>
        </div>
      </div>
    ))
  );
};

export default CurvyInfoCard;
