import React from "react";
import classes from "./Navigationitems.css";
import NavigationItem from "./Navigationitem/Navigationitem";

const navigationitems = props => (
  <ul className={classes.Navigationitems}>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>

    {props.isAuthenticated ? (
      <NavigationItem link="/orders"> ORDERS</NavigationItem>
    ) : null}
    {props.isAuthenticated ? (
      <NavigationItem link="/logout"> Logout</NavigationItem>
    ) : (
      <NavigationItem link="/auth"> Login</NavigationItem>
    )}
  </ul>
);

export default navigationitems;
