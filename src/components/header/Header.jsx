import "./header.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Importar el estilo para autoplay si es necesario

const Header = () => {
  return (
    <div className="contain-img">
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true} // Hacer que el carrusel sea continuo
        autoplay={{
          delay: 4000, // Tiempo en milisegundos entre cada cambio de imagen
          disableOnInteraction: false // Permite que el autoplay continúe después de la interacción
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="img/header/herramientas-de-carpinteria-servei-estacio.jpg"
            alt="herramientas-de-carpinteria-servei-estacio"
            
          />
                <div className="text-overlay">Carpintería1</div>

        </SwiperSlide>
        <SwiperSlide>
          <img
            src="img/header/epp-carpinteria-madera-pequena.jpge.webp"
            alt="epp-carpinteria-madera-pequena"
          />
                <div className="text-overlay">Carpintería2</div>

        </SwiperSlide>
        <SwiperSlide>
          <img
            src="img/header/Carpintería-en-Madera.jpg"
            alt="Carpintería-en-Madera"
          />
                <div className="text-overlay">Carpintería3</div>

        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
