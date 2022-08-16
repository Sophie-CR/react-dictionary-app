import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.data);
  return (
    <div className="meaning">
      <h3>
        <em>{props.data.partOfSpeech}</em>
      </h3>
      {props.data.definitions.map(function (definition, index) {
        return (
          <div key={index} className="definition">
            <div>
              <span>{index + 1}: </span>
              {definition.definition}
            </div>
            <div>
              <em>{definition.example}</em>
            </div>
          </div>
        );
      })}
    </div>
  );
}
