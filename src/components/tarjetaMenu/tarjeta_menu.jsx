import './tarjeta_menu.css';
import { useState } from 'react';

const TarjetaMenu = ({ nombre, precio, descripcion, imagen }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = (maxValue) => {
    if (count < maxValue) setCount(count + 1);
  };

  const handleDecrement = (minValue) => {
    if (count > minValue) setCount(count - 1);
  };

  return (
    <div className="contenedor-tarjeta-menu">
      <div className="contenedor-producto">
        <img src={imagen} alt={`imagen de ${nombre}`} />
        <div className="contenedor-info-producto">
          <h2 className="titulo-comida">{nombre}</h2>
          <p className="precio-comida">${precio}.00</p>
          <p className="descripcion-comida">{descripcion}</p>
        </div>
      </div>

      <div className="contenedor-botones-menu">
        <img
          className="icono-resta"
          src="/images/icono-menos.svg"
          alt="icono menos"
          onClick={() => handleDecrement(1)}
        />
        <h3 className="añadir-comida">Añadir</h3>
        <img
          className="icono-suma"
          src="/images/icono-mas.svg"
          alt="icono más"
          onClick={() => handleIncrement(10)}
        />
        <img
          className="icono-corazon-rojo"
          src="/images/icono-corazon-rojo.svg"
          alt="icono corazón"
        />
      </div>
    </div>
  );
};

export default TarjetaMenu;
