import React from "react";
import { Link } from "react-router-dom";

export const NavbarSW = () => {
    return (
<ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" href="https://3000-4geeksacade-reacthellow-zks93i79zz0.ws-us41.gitpod.io/personajes#">Personajes</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" href="https://3000-4geeksacade-reacthellow-zks93i79zz0.ws-us41.gitpod.io/naves#">Naves</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" href="https://3000-4geeksacade-reacthellow-zks93i79zz0.ws-us41.gitpod.io/planetas#">Planetas</a>
  </li>


</ul>
    )
}