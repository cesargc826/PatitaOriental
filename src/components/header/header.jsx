import { useState } from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div >
        <div className="container-fluid header-container">
        {/* <!-- Logo a la izquierda --> */}
        <a href="index.html" className="logo navbar-brand">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
           </button>
          <img id="logo-header"
            srcSet="./images/PatitaOriental_Azul_Horizontal.png"
            alt="Logo Patita Oriental" 
          ></img>
        </a>

        {/* <!-- Menú al centro --> */}
        <nav>
          <ul>
            <li className="nav-item navegacion">
              <a href="/menu">Menú</a>
            </li >
            <li className="nav-item navegacion">
              <a href="/menu2">Menú Temático</a>
            </li>
            <li className="nav-item navegacion">
              <a href="/contacto">Contacto</a>
            </li>
            <li className="nav-item navegacion">
              <a href="/about">Sobre Nosotros</a>
            </li>
          </ul>
        </nav>

        {/* <!-- Iconos a la derecha --> */}
        <div>
          <a href="#">
            <img srcSet="./images/LogoUsr.jpeg" alt="Perfil" className="iconos nav-item"></img>
          </a>
          <a href="#">
            <img srcSet="./images/LogoLove.jpeg" alt="Favoritos" className="iconos nav-item"></img>
          </a>
          <a href="#">
            <img srcSet="./images/LogoCart.jpeg" alt="Carrito" className="iconos nav-item"></img>
          </a>
        </div>
      </div>
      </div>
    </header>
    
  );
};

export default Header;
