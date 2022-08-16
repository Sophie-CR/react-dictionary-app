import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3 className="part-of-speech">
        <em>{props.data.partOfSpeech}</em>
      </h3>
      {props.data.definitions.map(function (definition, index) {
        return (
          <div key={index} className="definition">
            <div>
              <span>{index + 1}: </span>
              {definition.definition}
            </div>
            <div className="example">
              <em>{definition.example}</em>
            </div>
          </div>
        );
      })}
      <div>
        <Synonyms data={props.data.synonyms} />
      </div>
    </div>
  );
}
