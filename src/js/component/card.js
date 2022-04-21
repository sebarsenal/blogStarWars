import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={props.img} alt={props.desc} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href={props.url} className="btn btn-primary">
            {props.label}
          </a>
        </div>
      </div>
    </div>
  );
};
