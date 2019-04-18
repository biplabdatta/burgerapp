import React, { Component } from "react";

import Button from "../../UI/Button/Button";
import MatButtonCancel from "../../UI/Button/Matbuttoncancel";
import MatButtonCheckout from "../../UI/Button/Matbuttoncheckout";

import Aux from "../../../hoc/Auxx/Auxx";

class Ordersummary extends Component {
  //this could be a functional component
  componentWillUpdate() {
    console.log("[Ordersummary] willupdate");
  }

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(ikey => {
      return (
        <li key={ikey}>
          <span style={{ textTransform: "capitalize" }}>{ikey}</span>:{" "}
          {this.props.ingredients[ikey]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your order</h3>
        <p>burger detailwith ingredients</p>
        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Total Price: {this.props.totprice.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <MatButtonCancel clicked={this.props.purchaseCanceled} />
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
        <MatButtonCheckout clicked={this.props.purchaseContinued} />
      </Aux>
    );
  }
}

export default Ordersummary;
