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
    data?.length > 0 &&
    data?.map((item, index) => (
      <div
        key={index}
        className="contentsection"
        style={{
          "--background-color": data[index]?.backgroundColor,
          "--align": data[index]?.align,
          "--aspect-ratio": data[index]?.aspectRatio,
        }}
      >
        <div>
          <div className="contentsection-title" children={data[index]?.title} />
          <div
            className="contentsection-tagline"
            children={data[index]?.tagLine}
          />
        </div>
        <div className="contentsection-alignment">
          <div>
            {sliderBool ? (
              <SliderComponent items={data} animationType={animationType} />
            ) : (
              <div className="contentsection-content"></div>
            )}
          </div>
          <div
            className="contentsection-description"
            children={data[index]?.description}
          />
        </div>
      </div>
    ))
  );
}
