import { EnrollPopupCtx } from "pages";
import { useContext } from "react";

const About = () => {
  const foo = [
    "Wspaniały sposób na przygotowania do egzaminu",
    "100% uwagi prowadzącego",
    "Zajęcia dostowane do twoich potrzeb",
    "Już od 100zł za godzinę zajęć",
  ];
  const { setEnrollPopupIsOpen } = useContext(EnrollPopupCtx);
  return (
    <div className="relative">
      <div className="about-trapezoid"></div>
      <div
        id="about"
        className="flex py-[100px] justify-center lg:justify-between items-center my-12 md:mx-8 lg:mx-[5vw] mx-4"
      >
        <div className="lg:flex lg:ml-10 hidden h-full justify-center items-center basis-full lg:basis-1/2">
          <ul className="flex flex-col justify-evenly h-full">
            {foo.map((e, index) => (
              <li
                data-aos="zoom-in-up"
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
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="m-auto grid justify-center basis-full lg:basis-1/2"
        >
          <h2 className="text-[3rem] mb-10  md:text-[5rem] xl:text-[6rem] leading-[115%] text-right">
            Zajęcia <br />{" "}
            <span className="relative after:absolute after:-z-10 figure after:bg-secondary after:-left-8 after:top-0 after:h-[100%] after:w-[20000px]">
              indywidualne
            </span>
          </h2>
          <div className="text-[1.2rem] sm:text-[1.8rem] max-w-[700px] text-center">
            <p className="mb-6">
              Nauka w grupie nie jest dla ciebie? Chcesz żeby prowadzący skupiał
              się wyłącznie na tobie? Mamy dla ciebie odpowiednie rozwiązanie.
            </p>
            <p className="font-semibold">
              Zajęcia indywidualne to wspaniały sposób na przgotowania do
              egzaminów. 100% uwagi prowadzącego skupione na tobie i sposób
              nauczania dostosowany do ciebie. Czy może być lepiej?
            </p>
          </div>
          <button
            className="main__btn mt-9 mx-auto"
            onClick={() => setEnrollPopupIsOpen(true)}
          >
            zapisz się
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
