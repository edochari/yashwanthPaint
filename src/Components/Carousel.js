import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "../CSS/Carousel.module.css";

const SimpleCarousel = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,       
      autoplaySpeed: 2000, 
    };
  
    const images = [
      'https://static.asianpaints.com/content/dam/asian_paints/home/webp-images/paints-and-textures/colour-catalogue-spotlight-lp.webp',
        'https://www.asianpaints.com/content/dam/asian_paints/home/hp-banner-new-3-m.webp',
        'https://static.asianpaints.com/content/dam/asian_paints/home/homepage-ultima-protek-spotlight-v2b-asian-paints.jpg',
        'https://iide.co/wp-content/w3-webp/uploads/2021/09/Asian-Paints-Featured.jpgw3.webp',
    ];
  
    return (
      <div>
       
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`${index + 1}`} className={styles.carouselImage} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default SimpleCarousel;