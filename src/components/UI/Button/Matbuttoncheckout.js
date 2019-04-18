import React from "react";
import Checkout from "@material-ui/icons/CheckCircleOutlineSharp";
import Fab from "@material-ui/core/Fab";

const matbuttonCheckout = props => (
  <Fab color="primary" aria-label="Checkout">
    <Checkout onClick={props.clicked} />
  </Fab>
);

export default matbuttonCheckout;
