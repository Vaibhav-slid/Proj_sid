import React from "react";
import NameCard from "../common/NameCard";
import "./WorkShop.css";
import ContentSection from "../common/contentSection/ContentSection";
import { items } from "../home/Home";

const workshopData = [
    {title: 'Seminar on '}
]
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
        description={`Natural language processing (NLP)[50] allows programs to read, write and communicate in human languages such as English. Specific problems include speech recognition, speech synthesis, machine translation, information extraction, information retrieval and question answering.[51]

Early work, based on Noam Chomsky's generative grammar and semantic networks, had difficulty with word-sense disambiguation[f] unless restricted to small domains called "micro-worlds" (due to the common sense knowledge problem[29]). Margaret Masterman believed that it was meaning and not grammar that was the key to understanding languages, and that thesauri and not dictionaries should be the basis of computational language structure.

Modern deep learning techniques for NLP include word embedding (representing words, typically as vectors encoding their meaning),[52] transformers (a deep learning architecture using an attention mechanism),[53] and others.[54] In 2019, generative pre-trained transformer (or "GPT") language models began to generate coherent text,[55][56] and by 2023, these models were able to get human-level scores on the bar exam, SAT test, GRE test, and many other real-world applications.`}
      />
    </div>
  );
}
