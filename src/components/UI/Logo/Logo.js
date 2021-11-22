import React from 'react';
import './Logo.css'
import burgerLogo from '../../../assets/images/burger_logo.png';

const Logo = () => {
    return (
        <div className="Logo">
            <img src={burgerLogo} alt="BurgerApp"/>
        </div>
    );
};

export default Logo;