import React from "react";
import classes from "./SideDrawer.css";
import Logo from "../../Logo/Logo";
import Navigationitems from "../Navigationitems/Navigationitems";
import Aux from "../../../hoc/Auxx/Aux";
import BackDrop from "../../UI/Backdrop/Backdrop";

const sidedrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <Navigationitems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};

export default sidedrawer;
