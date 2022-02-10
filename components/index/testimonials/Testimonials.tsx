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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="overflow-x-hidden py-[100px]" id="testimonials">
      <h2 className="text-[5rem] mb-10 text-center">OPINIE</h2>
      <Slider {...settings}>
        {data.map((e, index) => (
          <div key={index} className='bg-grey text-center px-4 py-2 mx-2'>
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
