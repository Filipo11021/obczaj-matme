import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const data = [
    {
      name: "jan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna      ",
    },
    {
      name: "jan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "jan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      name: "jan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="overflow-x-hidden py-[100px]" id="testimonials">
      <h2 className="text-[5rem] mb-10 text-center leading-none">O<span className="relative after:h-1/2 after:-z-10 after:w-[105%] after:absolute after:left-3 after:top-[40%] after:bg-secondary">PINIE</span></h2>
      <Slider {...settings}>
        {data.map((e, index) => (
          <div
            key={index}
            className=" transition-colors text-center px-4 py-2 mx-2"
          >
            <div className="text-[90px] leading-none h-[40px]">&ldquo;</div>
            <p className="py-8">{e.text}</p>
            <p className="font-bold text-lg">{e.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
