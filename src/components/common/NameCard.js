import React from "react";
import "./NameCard.css";

export default function NameCard({ title, description, links }) {
  return (
    <div className="namecard-container">
      <div className="namecard-info">
        <h1>{title}</h1>
        <h5 style={{ alignItems: "start" }}>{description}</h5>
      </div>
      <div style={{ alignSelf: "flex-end" }}>
        {Array.isArray(links) &&
          links.length > 0 &&
          links
            ?.map((item, index) => (
              <span
                key={index}
                onClick={() => alert("sorry no files attached")}
                className="namecard-links"
              >
                {JSON.stringify(item)}
              </span>
            ))
            .join(" | ")}
      </div>
    </div>
  );
}
