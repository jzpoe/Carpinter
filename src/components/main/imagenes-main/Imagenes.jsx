import "./imagenes.css";
import { useState } from 'react';

const Imagenes = () => {
  const [modalOn, setModalOn] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalOn(true);
  };

  const handleCloseModal = () => {
    setModalOn(false);
  };

  return (
    <>
    <p className="contain-parrafo">Toca la Imagen</p>
    <div className="contain-image">
      
      <div className="imagen-main" onClick={() => handleOpenModal("Contenido del primer modal")}>
        <img
          src="img/main/7-recomendaciones-para-limpiar-y-cuidar-los-muebles-de-madera_img62217t1.jpg"
          alt="herramientas-de-carpinteria-servei-estacio"
        />
      </div>

      <div className="imagen-main" onClick={() => handleOpenModal("Contenido del segundo modal")}>
        <img
          src="img/main/5522f9a5709ea.jpg"
          alt="epp-carpinteria-madera-pequena"
        />
      </div>

      <div className="imagen-main" onClick={() => handleOpenModal("Contenido del tercer modal")}>
        <img
          src="img/main/mueble_tv_heron_2048x2048.gpj.webp"
          alt="Carpintería-en-Madera"
        />
      </div>

      {modalOn && (
        <div className="modal-main" onClick={handleCloseModal}>
          <div className="modal-body" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>X</button>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Imagenes;