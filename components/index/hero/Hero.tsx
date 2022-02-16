import Nav from "./Nav";

const Hero = () => {
  const btn =
    "capitalize font-light mt-9 text-2xl lg:text-3xl z-10 relative px-5 py-1 mx-auto flex  border";
  //const borderElement = 'before:h-full before:w-full before:absolute before:top-0 before:right-0 before:border before:border-black hover:after:right-0 hover:after:top-0 hover:before:right-1 hover:before:top-1 after:transition-all before:transition-all'
  //const after = 'after:w-full after:h-full after:absolute after:right-1 after:top-1 after:bg-secondary after:z-[-1]'
  const after =
    "after:w-full after:h-full after:absolute after:left-[.35rem] after:top-[.4rem] after:bg-secondary after:-z-10 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100";

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex justify-center items-center flex-grow">
        <div className="max-w-[1123px] px-2 mb-[7rem]">
          <h1
            data-aos="fade-left"
            data-aos-duration="600"
            className="uppercase font-light xl:text-[6rem] md:text-[4rem] text-[2.4rem] text-center"
          >
            <span className="font-medium">matma</span> jeszcze nigdy nie była{" "}
            <span className="relative">
              <span className="font-medium whitespace-nowrap">tak prosta</span>
              <img
                src="vector.png"
                className="absolute top-0 left-0 h-full w-[105%] -z-10 scale-[1.1]"
              ></img>
            </span>
          </h1>

          <div className="flex mx-auto">
            <div
              className="inline-block mx-auto relative mt-9 main__btn-base`"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <button className={`main__btn`}>zapisz się</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
