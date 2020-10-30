import React from "react";
import {  NavLink } from "react-router-dom";

const navbar = (props) => {
  return (
      <div>
        <NavLink exact to="/">Accueil</NavLink>
        <NavLink exact to="/localize">Localisation</NavLink>
        <NavLink  exact to="/contact">Contact</NavLink>
      </div>
  );
};

export default navbar;
