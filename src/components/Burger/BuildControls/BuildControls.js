import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "meat", type: "meat" },
  { label: "Cheese", type: "cheese" }
];

// can ignore this thing
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

const buildControls = props => (
  <div className={classes.buildControls}>
    <p>
      Total price : <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <Button
      color="secondary"
      disabled={!props.purchase}
      className={classes.OrderButton}
      onClick={props.onpurchase}
    >
      {props.isAuth ? "ORDER NOW" : "SIGNIN FOR ORDER"}
    </Button>
    <Fab color="primary" aria-label="Add" className={classes.fab}>
      <AddIcon />
    </Fab>
  </div>
);

export default withStyles(styles)(buildControls);
