import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['what', 'contents', 'professors', 'where', 'signin'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="what">
                    <a href="#">¿Qué es?</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="contents">
                    <a href="#">Contenido</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="professors">
                    <a href="#">Profesores</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="where">
                    <a href="#">Dónde</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="signin">
                    <a href="#">Inscríbete</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
