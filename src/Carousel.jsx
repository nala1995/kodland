import React, { useEffect, useRef } from 'react';
import square from './assets/square.png';
import amongus from './assets/amongus.png';
import round from './assets/round.png';
import './index.css';

function Carousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    const moveCarousel = () => {
      carousel.style.transition = 'transform 0.5s ease-in-out';
      carousel.style.transform = 'translateX(-100%)';

      setTimeout(() => {
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)';
      }, 500);
    };

    const intervalId = setInterval(moveCarousel, 2000); // Ajusta el valor para la velocidad del carrusel

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='carousel-container'>
      <div className='title-contenedor'>
        <h1 className="title3">Вам нравится Pop It!</h1>
      </div>
      <div className="carousel" ref={carouselRef}>
        <div className="carousel-track">
          <div className="carousel-item">
            <img className='imgitem' src={square} alt="img1" />
            <p className='enunci'>предмет для покупки</p>
            <button className='btn2'>купить</button>
          </div>
          <div className="carousel-item">
            <img className='imgitem' src={amongus} alt="img2" />
            <p className='enunci'>предмет для покупки</p>
            <button className='btn2'>купить</button>
          </div>
          <div className="carousel-item">
            <img className='imgitem' src={round} alt="img3" />
            <p className='enunci'>предмет для покупки</p>
            <button className='btn2'>купить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
