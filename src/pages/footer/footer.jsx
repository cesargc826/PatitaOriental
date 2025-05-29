import patitaLogo from '../../../public/images/PatitaOriental_Negro_Horizontal.png'
import instagramLogo from '../../../public/images/icons8-instagram-50.png'
import whatsappLogo from '../../../public/images/icons8-whatsapp-50.png'
import facebookLogo from '../../../public/images/icons8-facebook-nuevo-50.png'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="patita-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={patitaLogo} alt="" srcset="" id="logo-footer"/>
        </div>
        <div className="footer-legal">
          <p>Términos y condiciones</p>
          <p className="copyright">© {new Date().getFullYear()} Patita Oriental. Todos los derechos reservados.</p>
        </div>
        <div className="logo-content">
            <a href=""><img className="logo-social-media" src= {whatsappLogo} alt="" srcset="" /></a>
            <a href="https://www.instagram.com/patitaoriental/"><img className="logo-social-media" src={instagramLogo} alt="" srcset="" /></a>
            <a href="https://www.facebook.com/PatitaOriental?locale=es_LA"><img className="logo-social-media" src={facebookLogo} alt="" srcset="" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;