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
        className="grid relative  grid-cols-1 py-[100px] lg:grid-cols-2 justify-center lg:justify-between items-center my-12 md:mx-8 lg:mx-[5vw] mx-4"
      >
        <div className="lg:flex lg:ml-10 hidden h-full justify-center items-center relative">
          <ul className="flex flex-col justify-evenly h-full">
            {foo.map((e, index) => (
              <li key={index} className="flex items-center mb-12">
                <img src="like.svg" alt="" className="mr-4 my-4" />{" "}
                <span className="text-2xl ">{e}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="m-auto">
          <h2 className="text-[3rem] mb-10  md:text-[5rem] xl:text-[6rem] leading-[105%] text-right">
            Zajęcia <br />{" "}
            <span className="relative after:absolute after:-z-10 figure after:bg-secondary after:-left-8 after:top-0 after:h-full after:w-[1150%]">
              indiwidualne
            </span>
          </h2>
          <div className="text-[1.2rem] sm:text-[1.8rem] max-w-[700px] text-center">
            <p className="mb-6">
              Nauka w grupie nie jest dla ciebie? Chcesz żeby prowadzący skupiał
              się wyłącznie na tobie? Mamy dla ciebie odpowiednie rozwiązanie.
            </p>
            <p className="font-semibold">
              Zajęcia indywidualne to wspaniały sposób na przgotowania do
              egzaminów. 100% uwagi prowadzącego skupione na tobie, tematy i
              sposób nauczania dostosowane do twoich potrzeb, a to tylko jedne z
              wielu zalet.
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
