import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Personajes = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPersonajes();
  }, []);
  return (
    <div className="container-fluid">
      <div className="banner">
        <img
          src="https://www.newera.mx/blog/wp-content/uploads/2020/05/star-wars-adivina-cual-personaje-dijo-frase-banner.jpg"
          height="250"
        />
        <h1>Personajes</h1>

        <div className="container mt-4">
          <div className="row mt-4">
            <ul>
              {store.personajes.map(function (objeto, index) {
                return <li key={index}> objeto.name</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
