import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Mainheader } from "./Mainheader";
import { NavLinks } from "./NavLinks";
import { SideDrawer } from "./SideDrawer";
import "./MainNavigation.css";
import { Backdrop } from "../components/UIElements/Backdrop";

export const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      {drawerIsOpen && (
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
          hello
        </SideDrawer>
      )}
      <Mainheader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </Mainheader>
    </>
  );
};
