import React from 'react'

import logocc from '../assets/images/logocc.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo">
            <img src={logocc} alt="" />
        </span>
        <h2>Conviértete en el programador de iOS que siempre has querido ser.</h2>
    </header>
)

export default Header
