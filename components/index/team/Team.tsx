import { useState } from "react";

type TeamType = {
  name: string;
  img: string;
  description: string;
};

const teamData: TeamType[] = [
  {
    name: "Jan Kowalski",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum`,
    img: "team-1.png",
  },
  {
    name: "Zbyszek Kowalski",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor`,
    img: "team-2.png",
  },
];
const Team = () => {
  const [team, setTeam] = useState<TeamType[]>(teamData);
  const [currentTeamItem, setCurrentTeamItem] = useState<TeamType>(teamData[0]);

  return (
    <div className="bg-secondary relative" id="team">
      <div className="absolute hidden top-0 left-0 lg:flex flex-col h-full overflow-y-hidden">
        {[...Array(20)].map((_, index) => (
          <span
            key={index}
            className="text-[80px] font-bold text-border text-transparent second:text-black eighth:text-black leading-none"
          >
            TEAM
          </span>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 h-full min-h-screen">
        <div className="flex items-end pt-[100px] px-[5vw] lg:px-0 lg:mr-10 mb-8 lg:mb-0">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            src={currentTeamItem.img}
            alt=""
            className="relative bottom-0 w-full"
          />
        </div>
        <div className="max-w-[700px] justify-around h-full flex-1 flex flex-col m-auto px-3 pl-5 text-center lg:pr-[5vw]">
          <div></div>
          <div
          data-aos="fade-left"
          data-aos-duration="1000"
          >
            <h2 className="text-[3rem]">{currentTeamItem.name}</h2>
            <p className="mt-2 mb-10 text- md:text-2xl">
              {currentTeamItem.description}
            </p>
          </div>
          <div className="flex items-end mb-10  lg:mb-0">
            {team.map((e, index) => (
              <button key={index} onClick={() => setCurrentTeamItem(e)}>
                <img className="w-[5rem] mx-4" src={e.img} alt="" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
