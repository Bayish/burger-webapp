import React from 'react';
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  return (
    <>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {Object.keys(props.ingredients).map(type => (
          <li key={type}>
            <span style={{textTransform: 'capitalize'}}>
              {type}
            </span>: {props.ingredients[type]}
          </li>
        ))}
      </ul>
      <p><strong>Total Price: {props.totalPrice} KGS</strong></p>
      <p>Continue to checkout?</p>
      <Button type="Danger" onClick={props.onCancel}>CANCEL</Button>
      <Button type="Success" onClick={props.onContinue}>CONTINUE</Button>
    </>
  );
};

export default OrderSummary;