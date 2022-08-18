import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.data) {
    return (
      <div className="row" id="images">
        {props.data.map(function (photo, index) {
          return (
            <div className="col-sm-4">
              <a href={photo.url} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  alt={photo.alt}
                  key={index}
                  className="img-fluid pexels-image"
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
