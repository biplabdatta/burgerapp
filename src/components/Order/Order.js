import React from "react";
import classes from "./Order.css";

const order = props => {
  const lIngredients = [];

  for (const key in props.ingredients) {
    lIngredients.push({
      name: key,
      quantity: props.ingredients[key]
    });
  }

  const IngredientsOutput = lIngredients.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={ig.name}
      >
        {ig.name} : ({ig.quantity})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      {IngredientsOutput}
      <p>
        TotalPrice : <strong>{props.totalPrice.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
