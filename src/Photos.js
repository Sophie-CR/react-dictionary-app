import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="row">
        {props.data.map(function (photo, index) {
          return (
            <div className="col-4">
              <a href={photo.url} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  alt={photo.alt}
                  key={index}
                  className="img-fluid"
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
