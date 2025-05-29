import { useState } from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div class="header-container">
        {/* <!-- Logo a la izquierda --> */}
        <a href="index.html" class="logo">
          <img
            src="./images/PatitaOriental_Azul_Horizontal.png"
            alt="Logo Patita Oriental"
          ></img>
        </a>

        {/* <!-- Menú al centro --> */}
        <nav>
          <ul class="navegacion">
            <li>
              <a href="#">Menú</a>
            </li>
            <li>
              <a href="#">Menú Temático</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Sobre Nosotros</a>
            </li>
          </ul>
        </nav>

        {/* <!-- Iconos a la derecha --> */}
        <div class="iconos">
          <a href="#">
            <img src="./images/LogoUsr.jpeg" alt="Perfil"></img>
          </a>
          <a href="#">
            <img src="./images/LogoLove.jpeg" alt="Favoritos"></img>
          </a>
          <a href="#">
            <img src="./images/LogoCart.jpeg" alt="Carrito"></img>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
