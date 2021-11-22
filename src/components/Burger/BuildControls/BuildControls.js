import React from 'react';
import './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = props => {
  return (
    <div className="BuildControls">
      <p>Current price: <strong>{props.totalPrice} KGS</strong></p>
      {Object.keys(props.ingredients).map(type => {
        return (
          <BuildControl
            key={type}
            type={type}
            disabled={props.ingredients[type] === 0}
            add={() => props.addIngredient(type)}
            remove={() => props.removeIngredient(type)}
          />
        );
      })}
      <button
        className="OrderButton"
        disabled={!props.purchasable}
        onClick={props.onOrder}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;