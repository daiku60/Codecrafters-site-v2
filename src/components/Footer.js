import React from "react";
import Link from "gatsby-link";

import logo from "../assets/images/logo.svg";

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>CodeCrafters.io</h2>
      <div className="row">
        <div className="colm">
          <a href="https://goo.gl/maps/BQikX21zUN42" className="icon fa-location-arrow alt" />
          <div className="text">
            CREC Coworking Barcelona Eixample<br/>
            Gran Via de les Corts Catalanes, 672 &bull; 08010 Barcelona
          </div>
        </div>
        <div className="colm">
          <a href="tel:+34622447302" className="icon fa-phone alt" />
          <div className="text">(+34) 622 447 302</div>
        </div>
        <div className="colm">
          <a href="mailto:pcifani@blurredsoftware.com" className="icon fa-envelope alt" />
          <div className="text">pcifani@blurredsoftware.com</div>
        </div>
        <div className="colm">
          <a href="https://github.com/CodeCraftersIO" className="icon fa-github alt" />
          <div className="text">Fork us at Github</div>
        </div>
      </div>
    </section>
    <p className="copyright">
      &copy; 2018 CodeCrafters.io
    </p>
  </footer>
);

export default Footer;
