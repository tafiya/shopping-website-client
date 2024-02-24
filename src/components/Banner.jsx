
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from '../../public/banner-1.jpg'

function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="" />
        </div>
        <div>
          <img src={banner1} alt="" />
        </div>
        <div>
          <img src={banner1} alt="" />
        </div>
    
      </Slider>
    </div>
  );
}

export default PauseOnHover;
