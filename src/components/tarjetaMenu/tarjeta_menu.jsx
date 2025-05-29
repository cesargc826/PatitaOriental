import './tarjeta_menu.css'
const TarjetaMenu = () => {
    return (
       
        <div className="contenedor-tarjeta-menu">
             <br></br>
              <br></br>
            <div className="contenedor-producto">
                <img srcSet="../../public/images/imagen-menu-1.png" alt="imagen de comida" />
                <div className="contenedor-info-producto">
                    <h1 className="titulo-comida">DUMPLINGS</h1>
                    <h3 className="precio-comida">$300.00</h3>
                    <p className="descripcion-comida">
                        Diversidad y sabor, con platos que van desde guisos y carnes a la parrilla hasta fideos y dulces.
                    </p>
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