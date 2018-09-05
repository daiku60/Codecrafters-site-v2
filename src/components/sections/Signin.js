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
        <li><a href="mailto:pcifani@theleftbit.com" className="button">Contáctanos</a></li>
        <li><Link to="#" className="button special">Inscríbete</Link></li>
      </ul>
    </footer>
  </div>
);