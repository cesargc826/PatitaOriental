import { useState } from "react";
import TarjetaMenu from "./components/tarjetaMenu/tarjeta_menu.jsx";
import Footer from "./components/footer/footer.jsx";
import "./home.css";
import Header from "./components/header/header.jsx";
import { Profile } from "./pages/profile/profile.jsx";


function Home() {
  return (
    <div>
      <Header/>
      <Profile/>
      <Footer/>
    </div>
  );
}

export default Home;
