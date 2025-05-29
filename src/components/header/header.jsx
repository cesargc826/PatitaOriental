import { useState } from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        {/* <!-- Logo a la izquierda --> */}
        <a href="index.html" className="logo navbar-band">
          <img
            srcSet="./images/PatitaOriental_Azul_Horizontal.png"
            alt="Logo Patita Oriental"
          ></img>
        </a>

        {/* <!-- Menú al centro --> */}
        <nav className="collapse navbar-collapse">
          <ul className="navegacion navbar-nav">
            <li className="nav-item">
              <a href="#">Menú</a>
            </li >
            <li className="nav-item">
              <a href="#">Menú Temático</a>
            </li>
            <li className="nav-item">
              <a href="#">Contacto</a>
            </li>
            <li className="nav-item">
              <a href="#">Sobre Nosotros</a>
            </li>
          </ul>
        </nav>

        {/* <!-- Iconos a la derecha --> */}
        <div className="iconos container-fluid" >
          <a href="#">
            <img srcSet="./images/LogoUsr.jpeg" alt="Perfil"></img>
          </a>
          <a href="#">
            <img srcSet="./images/LogoLove.jpeg" alt="Favoritos"></img>
          </a>
          <a href="#">
            <img srcSet="./images/LogoCart.jpeg" alt="Carrito"></img>
          </a>
        </div>
      </div>
      </div>
    </header>
    
  );
};

export default Header;
