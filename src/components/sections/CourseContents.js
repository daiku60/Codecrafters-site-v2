import React from 'react';
import Link from 'gatsby-link'

export default () => (
  <div>
    <header className="major">
      <h2>Contenido</h2>
      <p>Estos son los temas que consideramos primordiales para escribir apps modernas para iOS 11. Explicaremos a fondo las bases teóricas y como aplicarlas en la app que desarrollaremos en clase.</p>
    </header>
    <ul className="features">
      <li>
        <span className="icon major style1 fa-mobile"></span>
        <h3>Bootstrapping</h3>
        <p>Todo lo necesario para arrancar una app: gestor de dependencias, customización de UI, integración continúa y un largo etcétera.</p>
      </li>
      <li>
        <span className="icon major style4 fa-expand"></span>
        <h3>Autolayout y Size Classes</h3>
        <p>Con pantallas que van desde 4’ a 12.9’ y con contenido flexible, nunca ha sido tan importante escribir buen layout.</p>
      </li>
      <li>
        <span className="icon major style2 fa-spinner"></span>
        <h3>Stateful View Controllers</h3>
        <p>Con esta técnica, será más fácil manejar la complejidad en un ViewController en escenarios donde los datos se obtienen de forma asíncrona.</p>
      </li>
      <li>
        <span className="icon major style3 fa-cloud-download"></span>
        <h3>Networking Avanzado</h3>
        <p>Usaremos capacidades de Swift, como extensiones de protocolos, genéricos y enums para tener una capa de networking mas legible.</p>
      </li>
      <li>
        <span className="icon major style5 fa-gift"></span>
        <h3>Promises</h3>
        <p>En esta sección aprenderás una técnica para eliminar bugs producidos por threading y poder realizar una serie de peticiones a la web antes de presentarle el resultado al usuario.</p>
      </li>
      <li>
        <span className="icon major style3 fa-file-text-o"></span>
        <h3>Formularios</h3>
        <p>Que levante la mano a quién le guste hacerlos. ¿Nadie? Eso pensaba 😄. No pasa nada, aprenderemos cómo hacerlos de forma sencilla y totalmente desacoplada de la vista y testeado.</p>
      </li>
      <li>
        <span className="icon major style1 fa-database"></span>
        <h3>Core Data</h3>
        <p>Entenderemos cómo diseñar nuestro stack de CoreData para conseguir un rendimiento excelente.</p>
      </li>
      <li>
        <span className="icon major style3 fa-check-square-o"></span>
        <h3>Tests</h3>
        <p>Aprenderemos a estructurar el código para realizar tests que de verdad le den valor a tu proyecto. Cubriremos tanto Unit Tests, como Snaphosts y UI Tests.</p>
      </li>
      <li>
        <span className="icon major style4 fa-black-tie"></span>
        <h3>Soft Skills</h3>
        <p>Todo proyecto requiere habilidades de gestión y humanas. Repasaremos las principales prácticas para ser un lider efectivo en un entorno de desarrollo.</p>
      </li>
    </ul>
    <footer className="major">
      <ul className="actions">
        <li><Link to="/generic" className="button">Learn More</Link></li>
      </ul>
    </footer>
  </div>
);
