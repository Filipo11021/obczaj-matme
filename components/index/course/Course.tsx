import { EnrollPopupCtx } from "pages";
import { useContext } from "react";

const Course = () => {
  const foo = [
    "Kompleksowe przygotowanie do egzaminu",
    "21 godzin zajęć pełnych wiedzy",
    "Przystępna cena 25zł za godzinę zajęć",
    "Niewielkie grupy max. 12 osób",
    "Wyjątkowy prowadzący",
  ];
  const { setEnrollPopupIsOpen } = useContext(EnrollPopupCtx);
  return (
    <div className="relative">
      <div className="course-trapezoid"></div>
      <div
        id="course"
        className="flex py-[100px] justify-center lg:justify-between items-center my-12 md:mx-8 lg:mx-[5vw] mx-4"
      >
        <div
          className="m-auto grid justify-center basis-full lg:basis-1/2"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <h2 className="text-[3rem] mb-10 sm:text-[4rem] md:text-[6rem] leading-[105%]">
            kurs <br /> ósmo
            <span className="relative after:h-[50%] after:w-[90%] after:absolute after:block after:right-0 after:top-1/2 after:-z-10 after:bg-secondary">
              klasisty
            </span>
          </h2>
          <div className="text-[1.2rem] sm:text-[1.8rem] max-w-[700px] text-center">
            <p className="mb-6">
              Boisz się że nie zdążysz z materiałem do maja? Pomożemy ci
              odpowiednio przygotować się do egzaminu!
            </p>
            <p className="font-semibold">
              Kurs ósmoklasisty to idealne rozwiązanie dla każdego ucznia
              niezależnie od tego czy potrzebuje tylko drobnej powtórki czy
              przygotowania od podstaw.
            </p>
          </div>
          <button
            className="main__btn mt-9 mx-auto"
            onClick={() => setEnrollPopupIsOpen(true)}
          >
            zapisz się
          </button>
        </div>
        <div className="lg:flex lg:ml-10 hidden h-full justify-center items-center basis-full lg:basis-1/2">
          <ul className="flex flex-col justify-evenly h-full">
            {foo.map((e, index) => (
              <li
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-delay={(index + 1) * 400}
                key={index}
                className="flex items-center mb-12"
              >
                <img src="like.svg" alt="" className="mr-4 my-4" />{" "}
                <span className="text-2xl ">{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Course;
