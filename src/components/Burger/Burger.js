import React from 'react';
import './Burger.css';
import Ingredient from "./Ingredient/Ingredient";

const Burger = ({ingredients}) => {
  const ingList = [];

  Object.keys(ingredients).forEach(type => {
    const amount = ingredients[type];
    for (let i = 0; i < amount; i++) {
      ingList.push(<Ingredient key={type + i} type={type} />);
    }
  });

  return (
    <div className="Burger">
      <Ingredient type="bread-top"/>
      {ingList.length > 0 ? ingList : <p>Please add ingredients</p>}
      <Ingredient type="bread-bottom"/>
    </div>
  )
};

export default Burger;