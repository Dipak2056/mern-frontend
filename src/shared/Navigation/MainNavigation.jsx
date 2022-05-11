import React from "react";

import { Link } from "react-router-dom";
import { Mainheader } from "./Mainheader";

import "./MainNavigation.css";

export const MainNavigation = (props) => {
  return (
    <Mainheader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">Your Places</Link>
      </h1>
      <nav>...</nav>
    </Mainheader>
  );
};
