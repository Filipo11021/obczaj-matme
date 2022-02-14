const About = () => {
  const foo = [
    "giga koks like",
    "giga koks like",
    "giga koks like",
    "giga koks like",
  ];
  return (
    <div
      id="course"
      className="grid grid-cols-1 py-[100px] lg:grid-cols-2 justify-center lg:justify-between items-center my-12 md:mx-8 lg:mx-[5vw] mx-4"
    >
      <div className="lg:flex lg:ml-10 hidden h-full justify-center items-center">
        <ul className="flex flex-col justify-evenly h-full">
          {foo.map((e, index) => (
            <li key={index} className="flex items-center mb-12">
              <img src="like.svg" alt="" />{" "}
              <span className="text-2xl ">{e}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="m-auto">
        <h2 className="text-[3rem] mb-10 sm:text-[4rem] md:text-[6rem] leading-[105%] text-right">
          ZAJECJA <br /> INDIWIDUALNE
        </h2>
        <div className="text-[1.2rem] sm:text-[1.8rem] max-w-[600px] text-center">
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna{" "}
          </p>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna{" "}
          </p>
        </div>
        <button className="enroll__btn mt-9">zapisz się</button>
      </div>
    </div>
  );
};

export default About;
