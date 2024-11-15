import React from "react";
import "./NameCard.css";

export default function NameCard({ title, description, links }) {
  return (
    <div className="namecard-container">
      <div className="namecard-info">
        <div className="namecard-info-title">{title}</div>
        <div
          className="namecard-info-description"
          style={{ alignItems: "start" }}
        >
          {description}
        </div>
      </div>
      <div style={{ alignSelf: "flex-end" }}>
        {links?.length > 0 &&
          links
            ?.map((item, index) => (
              <span
                key={index}
                onClick={() => alert("sorry no files attached")}
                className="namecard-links"
              >
                {item?.label}
              </span>
            ))
            .join(" | ")}
      </div>
    </div>
  );
}
