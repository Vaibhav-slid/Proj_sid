import React from "react";
import "./ContentSection.css";
import SliderComponent from "../SliderComponent";

export default function ContentSection({
  backgroundColor,
  title,
  tagLine,
  description,
  data,
  sliderBool,
  align,
  aspectRatio,
}) {
  var animationType = "fade";
  sliderBool ??= true;
  console.log(data);
  return (
    <div
      className="contentsection"
      style={{
        "--background-color": backgroundColor,
        "--align": align,
        "--aspect-ratio": aspectRatio,
      }}
    >
      <div>
        <div className="contentsection-title" children={title} />
        <div className="contentsection-tagline" children={tagLine} />
      </div>
      <div className="contentsection-alignment">
        <div>
          {sliderBool ? (
            <SliderComponent items={data} animationType={animationType} />
          ) : (
            <div className="contentsection-content"></div>
          )}
        </div>
        <div className="contentsection-description" children={description} />
      </div>
    </div>
  );
}
