import { useState } from "react";
type TeamType = {
  name: string;
  img: string;
  description: string;
}

const teamData:TeamType[] = [
  {
    name: 'jan kowalski',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum`,
    img: 'team-1.png'
  },
  {
    name: 'jan kowalski 2',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor`,
    img: 'team-2.png'
  }
]
const Team = () => {
  const [team, setTeam] = useState<TeamType[]>(teamData)
  const [currentTeamItem, setCurrentTeamItem] = useState<TeamType>(teamData[0])

  return (
    <div className="bg-secondary relative"id="team">
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
      <div className="grid lg:grid-cols-2 grid-cols-1 h-full">
        <div className="flex items-end pt-[150px]">
          <img src={currentTeamItem.img} alt="" className="relative bottom-0 w-full" />
        </div>
        <div className="max-w-[700px] m-auto px-3 py-5">
          <h2 className="text-[2rem]">{currentTeamItem.name}</h2>
          <p className="mt-2 mb-10">{currentTeamItem.description}
          </p>
          <div className="flex">
            {team.map((e,index) => (
              <button key={index} onClick={() => setCurrentTeamItem(e)} >
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
