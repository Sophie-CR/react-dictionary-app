import React from "react";
import "./Phonetics.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  if (props.data.audio) {
    return (
      <div className="phonetics mt-3 mb-1">
        <div>
          <ReactAudioPlayer
            className="audio-player"
            src={props.data.audio}
            autoPlay={false}
            controls={true}
          />
        </div>
        <div>{props.data.text}</div>
      </div>
    );
  } else {
    return null;
  }
}
