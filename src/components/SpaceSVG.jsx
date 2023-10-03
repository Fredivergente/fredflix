import React from 'react';

const SpaceSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1920 1080">
      {/* Definición de una estrella */}
      <symbol id="star">
        <path
          fill="#FFF"
          d="M23.372 7.983c.358-1.154 1.319-1.949 2.532-2.173l3.117-.566c.443-.077.852.274 1.021.706l1.23 3.334a5.576 5.576 0 0 0 1.43 1.652l3.29 2.64c.467.376.599 1.061.287 1.606l-1.045 1.65c-.341.538-1.053.729-1.642.474l-3.576-1.765a5.447 5.447 0 0 0-1.425.502l-1.617 1.017c-.392.245-.895.181-1.235-.152l-2.432-2.288c-.457-.43-.58-1.166-.248-1.728l1.275-1.887c.295-.438.301-1.003.019-1.432l-1.27-3.18a1.69 1.69 0 0 1 .16-1.566z"
        />
      </symbol>

      {/* Patrón de estrellas */}
      <pattern
        id="starsPattern"
        x="0"
        y="0"
        width="100"
        height="100"
        patternUnits="userSpaceOnUse"
      >
        <rect width="100%" height="100%" fill="#ccd313" />
        <use href="#star" x="5" y="5" />
        <use href="#star" x="20" y="30" />
        <use href="#star" x="80" y="50" />
        {/* Puedes agregar más estrellas ajustando las coordenadas (x, y) */}
      </pattern>

      {/* Rectángulo que utilizará el patrón */}
      <rect width="100%" height="100%" fill="url(#starsPattern)" />
    </svg>
  );
};

export default SpaceSVG;
