import React from "react";
import "./Results.css";

export default function Meaning(props) {
  console.log(props.data);
  return (
    <div>
      <h3>{props.data.partOfSpeech}</h3>
    </div>
  );
}
