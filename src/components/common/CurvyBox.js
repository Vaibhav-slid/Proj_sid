import React from "react";
import "./CurvyBox.css";
function CurvyBox({ backgroundColor, children, backgroundImage }) {
  console.log(backgroundImage)
  return (
    <div className="curvybox-container">
      <div
        className="curvybox__body"
        style={{
          "--curvybox-background": backgroundColor,
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default CurvyBox;
