import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Personajes = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPersonajes();
  }, []);
  return (
    <div className="row">
      <div className="banner">
        <img
          src="https://www.newera.mx/blog/wp-content/uploads/2020/05/star-wars-adivina-cual-personaje-dijo-frase-banner.jpg"
          height="250"
        />
        <h1>Personajes</h1>

        <div className="container">
          <div className="row">
            <ul>
              {store.personajes.map(function (objeto, i) {
                return (
                  <div key={i}>
                    <Card object={objeto} i={i} />
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
