import React from "react";

export default () => (
  <div className="where-section">
    <header className="major">
      <h2>Preguntas frecuentes</h2>
    </header>
    <div className="content">
    <a href="https://www.google.es/maps/place/Coworking+Born+-+COR23/@41.3895433,2.1803507,15z/data=!4m2!3m1!1s0x0:0x46943d05b354a23c?sa=X&ved=2ahUKEwiMgqDEzZfdAhUPWBoKHYvdAScQ_BIwDnoECAoQCw" className="icon fa-map-marker alt major" />
      <div className="text">
        <h2>¿Dónde?</h2>
        <h4>El curso será en las instalaciones de <strong>Cor23</strong></h4>
        <h4>Carrer d'En Cortines, 23, 08003 Barcelona</h4>
      </div>
    </div>
    <div className="content">
      <span className="icon fa-calendar alt major" />
      <div className="text">
        <h2>¿Cuándo?</h2>
        <h4><strong>19, 20, 26 y 27 Octubre 2018</strong></h4>
        <h4>10h-18h</h4>
      </div>
    </div>
    <div className="content">
      <a href="http://apple.com" className="icon fa-laptop alt major" />
      <div className="text">
        <h2>¿Qué hay que llevar?</h2>
        <h4>Será necesario llevar tu <strong>MacBook</strong> y (opcionalmente) un dispositivo iOS para poder seguir las clases.</h4>
        <h4><strong>No traigas tupper</strong> — ya ponemos nosotros la comida 😉</h4>
      </div>
    </div>
  </div>
);
