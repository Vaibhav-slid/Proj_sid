import React from "react";
import NameCard from "../common/NameCard";
import "./WorkShop.css";
import ContentSection from "../common/contentSection/ContentSection";
import { items } from "../home/Home";
export default function WorkShop() {
  return (
    <div className="workshop">
      <NameCard
        title={"Workshop"}
        description={
          "hi folks out there lets catch up at some event like the ones listed below"
        }
      />
      <ContentSection
        title={"Seminar on AI"}
        tagLine={"conducted a seminar on Ai and DeepLearning in IIT kharagpur"}
        data={items}
        description={
          "hi folks out there lets catch up at some event like the ones listed below"
        }
      />
    </div>
  );
}
