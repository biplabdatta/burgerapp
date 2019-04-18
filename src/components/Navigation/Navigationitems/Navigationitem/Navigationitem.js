import React from "react";
import classes from "./Navigationitem.css";
import { NavLink } from "react-router-dom";

const navigationitem = props => (
  <li className={classes.Navigationitem}>
    <NavLink to={props.link} activeClassName={classes.active}>
      {props.children}
    </NavLink>
  </li>
);

export default navigationitem;
