import "./footer.css";

const Footer = () => {
  return (
    <footer className="contain-footer">
      <div className="footer-content">
        <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#about">Sobre Nosotros</a>
          <a href="#services">Servicios</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;