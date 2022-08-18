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
              <div key={index} className="d-flex">
                <Phonetics data={phonetic} />
              </div>
            );
          })}
          <div className="button-container">
            <a href="./#images" className="button images-link">
              Jump to images of <em>{props.data.word}</em>
            </a>
          </div>
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
