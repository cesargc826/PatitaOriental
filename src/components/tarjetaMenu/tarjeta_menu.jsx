import './tarjeta_menu.css'
const TarjetaMenu = ({nombre,precio,descripcion,imagen}) => {
    return (
       
        <div className="contenedor-tarjeta-menu">
             <br></br>
              <br></br>
            <div className="contenedor-producto">
                <img src={imagen} alt={`imagen de ${nombre}`} />
                <div className="contenedor-info-producto">
                    <h1 className="titulo-comida">{nombre}</h1>
                    <h3 className="precio-comida">${precio}.00</h3>
                    <p className="descripcion-comida">{descripcion}</p>
                </div>
            </div>
            <div className="contenedor-botones-menu">
                <img className='icono-resta' srcSet="../../public/images/icono-menos.svg" alt="icono menos" />
                <h2 className='añadir-comida'>Añadir</h2>
                <img  className='icono-suma' srcSet="../../public/images/icono-mas.svg" alt="icono mas" />
                <img className='icono-corazon-rojo' srcSet="../../public/images/icono-corazon-rojo.svg" alt="icono corazon" />
            </div>
        </div>
    );
}

export default TarjetaMenu;