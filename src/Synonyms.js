import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.data.length > 0) {
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
