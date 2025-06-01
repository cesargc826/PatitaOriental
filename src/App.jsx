
import TarjetaMenu from "./components/tarjetaMenu/tarjeta_menu.jsx";
import Footer from "./components/footer/footer.jsx";
import "./home.css";
import Header from "./components/header/header.jsx";
import { Menu } from "./pages/menu/menu.jsx";
import Home from "./home.jsx";
import About from "./pages/about/about.jsx";

function App() {
  let component;
  switch (window.location.pathname){
    /* 
    Se realiza el case para cambiar de paginas en este caso el case agarra el href de la etiqueta a para referencia y 
    el component realiza la llamada del componente.
    */
    case "/index.html":
      component =  <Home />;
      break;
    case "/menu":
      component = <Menu />;
      break;
    case "/about":
        component = <About />
        break;
  }
  
  return (
    <>
      <Header />
      {component}
      <Footer />
    </>
  );
}

export default App;