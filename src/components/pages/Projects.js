import React from "react";
export default function Projects() {
  return (
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
  );
}
