import React from "react";
import "./Results.css";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="results">
        <h2 className="result-word">{props.data.word}</h2>
        {props.data.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics data={phonetic} />
            </div>
          );
        })}
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
