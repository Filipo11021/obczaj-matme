import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Testimonial } from "types/testimonials";

type Props = {
  testimonials: Testimonial[];
}

const Testimonials = ({testimonials}:Props) => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="overflow-x-hidden py-[100px] relative" id="testimonials">
      <h2 className="text-[5rem] mb-[3.5rem] text-center leading-none">O<span className="relative after:h-1/2 after:-z-10 after:w-[105%] after:absolute after:left-5 after:top-[40%] after:bg-secondary">PINIE</span></h2>
      <Slider {...settings}>
        {testimonials.map((e, index) => (
          <div
            key={index}
            className=" transition-all duration-500 text-center px-8 py-2 mx-2"
          >
            <div className="text-[90px] leading-none h-[40px]">&ldquo;</div>
            <p className="py-8 font-light text-2xl">{e.description}</p>
            <p className="font-bold text-lg">{e.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
