import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={props.img} alt={props.desc} />
        <div className="card-body">
          <h5 className="card-title">{props.object.name}</h5>
          <p className="card-text">
            <p>Género: {props.object.gender}</p>
            <p>Especie: {props.object.species}</p>
            <p>Planeta: {props.object.homeworld}</p>
            <p>Nave: {props.object.starships}</p>
          </p>
          <Link to={"/detalles/" + props.i}>
            <a className="btn btn-primary">Mas info</a>
          </Link>
          <a href={props.fav} className="btn btn-primary">
            ⭐
          </a>
        </div>
      </div>
    </div>
  );
};
