import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={this.props.data.site.siteMetadata.title} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="what" className="main">
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
          </section>

          <section id="contents" className="main special">
            <header className="major">
              <h2>Contenido</h2>
              <p>Estos son los temas que consideramos primordiales para escribir apps modernas para iOS 11. Explicaremos a fondo las bases teóricas y como aplicarlas en la app que desarrollaremos en clase.</p>
            </header>
            <ul className="features">
              <li>
                <span className="icon major fa-mobile"></span>
                <h3>Bootstrapping</h3>
                <p>Todo lo necesario para arrancar una app: gestor de dependencias, customización de UI, integración continúa y un largo etcétera.</p>
              </li>
              <li>
                <span className="icon major fa-expand"></span>
                <h3>Autolayout y Size Classes</h3>
                <p>Con pantallas que van desde 4’ a 12.9’ y con contenido flexible, nunca ha sido tan importante escribir buen layout.</p>
              </li>
              <li>
                <span className="icon major fa-spinner"></span>
                <h3>Stateful View Controllers</h3>
                <p>Con esta técnica, será más fácil manejar la complejidad en un ViewController en escenarios donde los datos se obtienen de forma asíncrona.</p>
              </li>
              <li>
                <span className="icon major fa-cloud-download"></span>
                <h3>Networking Avanzado</h3>
                <p>Usaremos capacidades de Swift, como extensiones de protocolos, genéricos y enums para tener una capa de networking mas legible.</p>
              </li>
              <li>
                <span className="icon major fa-gift"></span>
                <h3>Promises</h3>
                <p>En esta sección aprenderás una técnica para eliminar bugs producidos por threading y poder realizar una serie de peticiones a la web antes de presentarle el resultado al usuario.</p>
              </li>
              <li>
                <span className="icon major fa-file-text-o"></span>
                <h3>Formularios</h3>
                <p>Levante la mano a quién le guste hacerlos. ¿Nadie? Eso pensaba 😄. No pasa nada, aprenderemos cómo hacerlos de forma sencilla y totalmente desacoplada de la vista y testeado.</p>
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
          </section>

          <section id="professors" className="main special">
            <header className="major">
              <h2>Ipsum consequat</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="where" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
