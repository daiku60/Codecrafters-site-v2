import React from 'react';
import Link from 'gatsby-link'

import pic01 from '../../assets/images/pic01.jpg';

export default () => (
  <div className="spotlight">
    <div className="content">
      <header className="major">
        <h2>¿Qué es?</h2>
      </header>
      <h3>Curso de iOS Avanzado</h3>
      <p>En 3 días aprenderás técnicas y bases teóricas que te permitirán escribir código más rápido y de mejor calidad.</p>
      <h3>¿Para quién es?</h3>
      <p>El curso está dirigido a profesionales de 1 a 3 años de experiencia en las plataformas de Apple. El contenido está enfocado a que este público pueda dar un salto adelante en su carrera.</p>
      <blockquote>Sé el desarrollador TOP que siempre soñaste ser.</blockquote>
      <ul className="actions">
        <li><Link to="/generic" className="button">Learn More</Link></li>
      </ul>
    </div>
    <span className="image"><img src={pic01} alt="" /></span>
  </div>
);
