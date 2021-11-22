import React from 'react';
import './OrderItem.css';

const OrderItem = ({ingredients, customer, price}) => {
    const ingredientOutput = Object.keys(ingredients).map(type => (
        <span key={type}>{type} ({ingredients[type]})</span>
    ))
    const customerOutput = Object.keys(customer).map(field => (
        <span key={field}><strong>{field}</strong>: {customer[field]}</span>
    ))

    // if (Math.random() > 0.7) throw new Error('Well, This happened')
    return (
        <div className="OrderItem">
            <p>Ingredients: {ingredientOutput}</p>
            <p>Customer: {customerOutput}</p>
            <p>Price: <strong>{price} KGZ</strong></p>
        </div>
    );
};

export default OrderItem;