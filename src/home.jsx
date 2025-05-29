import { useState } from 'react'
import TarjetaMenu from './components/tarjeta_menu.jsx'
import Footer from './pages/footer/footer.jsx'
import './home.css'

function Home() {
  return (
    <div>
      <TarjetaMenu/>
      <Footer/>
    </div>
  )
}

export default Home
