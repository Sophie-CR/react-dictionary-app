import React from "react";
import "./Results.css";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="results">
        <section>
          <h2 className="result-word">{props.data.word}</h2>
          {props.data.phonetics.map(function (phonetic, index) {
            return (
              <div key={index} className="phonetics-div">
                <Phonetics data={phonetic} />
              </div>
            );
          })}
        </section>
        <div>
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning data={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
