import React from 'react';

import pier from '../../assets/images/pier.png';
import daiku from '../../assets/images/daiku.png';

export default () => (
  <div className="professors">
    <header className="major">
      <h2>Profesores</h2>
    </header>
    <div className="columnsProfessor">
      <div className="professor">
        <span className="image"><img src={pier} alt="" /></span>
        <div className="content">
          <h2>Pierluigi Cifani</h2>
          <p>
            Especializado en crear apps nativas de iOS desde 2011.<br/>
            Desde hace un año trabaja como freelance realizando auditorías, mejoras y coaching a los equipos de compañías detrás de apps como Oysho, Privalia, LiveScore entre otras.<br/>
            Cree en la capacidad de la gente de mejorar y los resultados (por ahora) le dan la razón.<br/>
          </p>
        </div>
      </div>
      <div className="professor">
        <span className="image"><img src={daiku} alt="" /></span>
        <div className="content">
          <h2>Jordi Serra</h2>
          <p>
            Desarrollador de apps desde 2010 en Visual Engineering.<br/>
            Ha desarrollado apps principalmente en iOS, pero también en Android y React.<br/>
            Cree fírmemente que el código se escribe para las personas, no para las máquinas<br/>
          </p>
        </div>
      </div>
    </div>
  </div>
);
