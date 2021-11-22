import React from 'react';
import './CheckoutSummary.css';
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ingredients, cancel, next}) => {
  return (
    <div className="CheckoutSummary">
      <h1>We hope it tastes well!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={ingredients}/>
      </div>
      <Button type="Danger" onClick={cancel}>CANCEL</Button>
      <Button type="Success" onClick={next}>CONTINUE</Button>
    </div>
  );
};

export default CheckoutSummary;