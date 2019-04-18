import React from "react";

import ClearIcon from "@material-ui/icons/ClearTwoTone";
import Fab from "@material-ui/core/Fab";

const matbuttonCancel = props => (
  <Fab color="secondary" aria-label="Cancel">
    <ClearIcon onClick={props.clicked} />
  </Fab>
);

export default matbuttonCancel;
