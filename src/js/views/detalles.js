import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export function Detalles() {
  const { id } = useParams();
  const {store, actions} = useContext(Context)

  return (
    <div className="container">
      <h1>Detalles {store.personajes[id]?.name}</h1>
    </div>
  );
}

