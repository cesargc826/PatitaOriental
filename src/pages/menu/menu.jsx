import Products from "../../components/tarjetaMenu/readProducts";
import './menu.css';

const Menu = () => {
  return (
    <main>
      <h2 className="menu-title">Conoce nuestro menú</h2>
      <ul className="filtros">
        <li><a className="filtro-btn" href="#comidas">Comida</a></li>
        <li><a className="filtro-btn" href="#bebidas">Bebidas</a></li>
        <li><a className="filtro-btn" href="#postres">Postres</a></li>
      </ul>
      <Products url="/data/menu.json" />
    </main>
  );
};

export { Menu };
