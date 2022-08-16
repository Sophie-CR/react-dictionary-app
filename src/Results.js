import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="results">
        <h2 className="result-word">{props.data.word}</h2>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div>
              <div key={index}>
                <Meaning data={meaning} />
              </div>
              <div>
                <Synonyms data={meaning} />
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
