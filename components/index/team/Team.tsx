import { useState } from "react";
import { TeamItem } from "types/team";

type Props = {
  teamItems: TeamItem[];
}

const Team = ({teamItems}:Props) => {
  const [currentTeamItem, setCurrentTeamItem] = useState<TeamItem>(teamItems[0]);

  return (
    <div className="bg-decoration-1 test:(u-5) relative" id="team">
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
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="flex items-end pt-[100px] px-[5vw] lg:px-0 lg:mr-10 mb-8 lg:mb-0"
          data-aos-anchor-placement="top-center"
        >
          <img
            src={currentTeamItem.image.url}
            alt=""
            className="relative bottom-0 w-full"
          />
        </div>
        <div className="max-w-[700px] justify-around h-full flex-1 flex flex-col m-auto px-3 pl-5 text-center lg:pr-[5vw]">
          <div></div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <h2 className="text-[3rem] font-semibold">{currentTeamItem.name}</h2>
            <p className="mt-2 mb-10 text- md:text-2xl" dangerouslySetInnerHTML={{__html: currentTeamItem.description}}>

            </p>
          </div>
          <div className="flex items-end mb-10  lg:mb-0">
            {teamItems && teamItems.map((e, index) => (
              <button  key={index} onClick={() => setCurrentTeamItem(e)}>
                <img  className="w-[110px] mx-4" src={e.image.url} alt={e.name} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

