import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="synonyms">
        <h4>Synonyms:</h4>
        {props.data.map(function (synonym, index) {
          return (
            <span key={index} className="synonym">
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
