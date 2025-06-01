import Products from "../../components/tarjetaMenu/readProducts";
import TarjetaMenu from "../../components/tarjetaMenu/tarjeta_menu";

const Menu = () =>{

    return(
        <main>
            <h2>Conoce nuestro menú</h2>
            <ul>
                <li>Comida</li>
                <li>Bebidas</li>
                <li>Postres</li>
            </ul>
            
            <Products url = "./public/data/menu.json" />
        </main>
    );
}

export {Menu};