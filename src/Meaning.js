import React from "react";
import "./Results.css";

export default function Meaning(props) {
  console.log(props.data);
  return (
    <div className="meaning">
      <h3>{props.data.partOfSpeech}</h3>
      {props.data.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>{definition.definition}</div>
            <div>{definition.example}</div>
          </div>
        );
      })}
    </div>
  );
}
