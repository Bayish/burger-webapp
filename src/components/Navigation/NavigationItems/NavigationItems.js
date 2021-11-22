import React from 'react';
import './Navigation.css'
import NavigationItem from "../NavigationItem/NavigationItem";

const NavigationItems = () => {
    return (
        <div className="NavigationItems">
            <NavigationItem to='/' exact>Burger</NavigationItem>
            <NavigationItem to='/orders' >Orders</NavigationItem>
        </div>
    );
};

export default NavigationItems;