import "./main.css";
import Imagenes from "./imagenes-main/imagenes";

const Main = () => {
  return (
    <div className="contain">
      <Imagenes />
      <div className="contain-main">
        <div className="contain-1">
          <h1>Acerca de Nosotros</h1>
          <div className="contain-nosotros">
            <p>
              En [Nombre de la Carpintería], somos apasionados por transformar
              la madera en piezas únicas que combinan funcionalidad y belleza.
              Con más de [X años] de experiencia, nuestro equipo de artesanos se
              dedica a crear muebles y estructuras de alta calidad, utilizando
              técnicas tradicionales y modernas. Cada proyecto es un reflejo de
              nuestro compromiso con la excelencia, la creatividad y la
              satisfacción del cliente. Nos enorgullece convertir tus ideas en
              realidad, con acabados impecables que duran toda la vida
            </p>
          </div>
        </div>

        <div className="contain-2">
          <div className="img-contain2">
            <div className="image-contain2">
            <img
              src="img/main/ef4333e8d9a682ca7e58f64d1c68607e (1).jpg"
              alt=""
            />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
