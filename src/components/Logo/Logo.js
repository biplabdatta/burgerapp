import React from "react";
import Burgerlogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={Burgerlogo} alt="BipBurger" />
  </div>
);

export default logo;
