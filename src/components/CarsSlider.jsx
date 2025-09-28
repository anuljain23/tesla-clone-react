import Slider from "react-slick";
import Section from "./Section";

const CarsSlider = ({ cars = [] }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    };

    return (
        <div className="slider-container !mt-[30px]">
            <Slider {...sliderSettings}>
                {cars.map((car, index) => (
                    <div key={index}>
                        <Section data={car} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarsSlider;
