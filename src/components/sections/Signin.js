import React from 'react';
import Link from 'gatsby-link';

export default () => (
  <div className="signin">
    <header className="major">
      <h1>
        Stop Wating.<br/>
        Start Building.
      </h1>
    </header>
    <footer className="major">
      <ul className="actions">
        <li><Link to="/generic" className="button">Contáctanos</Link></li>
        <li><Link to="/generic" className="button special">Inscríbete</Link></li>
      </ul>
    </footer>
  </div>
);