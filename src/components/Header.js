import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>CodeCrafters.io</h1>
        <p>Conviértete en el programador de iOS que siempre has querido ser.</p>
    </header>
)

export default Header
