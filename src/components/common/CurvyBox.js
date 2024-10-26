import React from "react";
import "./CurvyBox.css";
function CurvyBox({ backgroundColor, children }) {
  return (
    <div className="curvybox-container">
      <div
        className="curvybox__body"
        style={{ backgroundColor: backgroundColor }}
      >
        {children}
      </div>
    </div>
  );
}

export default CurvyBox;
