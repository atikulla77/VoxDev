import React from "react";
import tittlePartical from "../../Image/tittle_partical.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const Skill = () => {
  const SkillData = [
    {
      id: 1,
      tittle: "HTML & CSS",
      progressShow: 95,
      progress: 9.5,
      dynamicMargin: "[@media(min-width:450px)]:mt-[1rem] mt-[2rem]",
    },
    {
      id: 2,
      tittle: "Tailwind CSS",
      progressShow: 90,
      progress: 9,
      dynamicMargin: "[@media(min-width:450px)]:mt-[1rem] mt-[2rem]",
    },
    {
      id: 3,
      tittle: "Boostrap",
      progressShow: 85,
      progress: 8.5,
      dynamicMargin:
        "[@media(min-width:635px)]:mt-[1rem] [@media(min-width:450px)]:mt-[3rem] mt-[2rem]",
    },
    {
      id: 4,
      tittle: "JavaScript",
      progressShow: 80,
      progress: 8,
      dynamicMargin:
        "[@media(min-width:813px)]:mt-[1rem] [@media(min-width:450px)]:mt-[3rem] mt-[2rem]",
    },
    {
      id: 5,
      tittle: "React JS",
      progressShow: 75,
      progress: 7.5,
      dynamicMargin:
        "[@media(min-width:993px)]:mt-[1rem] [@media(min-width:450px)]:mt-[3rem] mt-[2rem]",
    },
    {
      id: 6,
      tittle: "TypeScript",
      progressShow: 70,
      progress: 7,
      dynamicMargin:
        "[@media(min-width:1172px)]:mt-[1rem] [@media(min-width:450px)]:mt-[3rem] mt-[2rem]",
    },
    {
      id: 7,
      tittle: "Node JS",
      progressShow: 72,
      progress: 7.2,
      dynamicMargin: "[@media(min-width:450px)]:mt-[3rem] mt-[2rem]",
    },
    {
      id: 8,
      tittle: "Github",
      progressShow: 80,
      progress: 8,
      dynamicMargin: "[@media(min-width:450px)]:mt-[3rem] mt-[2rem]",
    },
  ];
  const [countState, setCountState] = useState();

  return (
    <div className="w-full h-full relative" id="Skill">
                                <ScrollTrigger
                            onEnter={() => setCountState(true)}
                            onExit={() => setCountState(false)}
                          >
      <main
        className={`w-full h-full relative border-b-[1px] border-b-[#00000038] border-dashed [@media(min-width:1290px)]:!px-[3rem] [@media(min-width:550px)]:px-[2rem] [@media(min-width:450px)]:px-[1.5rem] px-[1rem]`}
      >
        <div className="[@media(min-width:1290px)]:w-[1290px] w-[100%] mx-auto py-[5rem] relative border-x-[1px] border-dashed border-x-[#00000038] [@media(min-width:1290px)]:!px-[3rem] [@media(min-width:550px)]:px-[2rem] [@media(min-width:450px)]:px-[1.5rem] px-[1rem]">
          {/* Side Border Left */}
          <div className="absolute left-[-1px] bottom-[-7px] w-[2px] h-[14px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
          <div className="absolute left-[-7px] bottom-[-1px] w-[14px] h-[2px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
          {/* Side Border Right */}
          <div className="absolute right-[-1px] bottom-[-7px] w-[2px] h-[14px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
          <div className="absolute right-[-7px] bottom-[-1px] w-[14px] h-[2px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
          {/* Tittle */}
          <div className="[@media(min-width:600px)]:w-[8rem] [@media(min-width:460px)]:w-[6rem] w-[5.2rem] [@media(min-width:600px)]:!h-[20px] [@media(min-width:460px)]:h-[16px] h-[14px] text-[#130f49] text-center flex flex-col items-center justify-center z-10  mx-auto relative ">
            <h1 className="[@media(min-width:600px)]:text-[28px] [@media(min-width:460px)]:text-[22px] text-[20px] font-[700] Poppins uppercase">
              Skill
            </h1>
            {/* Tittle Left Partical */}
            <div className="absolute left-[-5px] bottom-0" data-aos="fade-right">
              <img
                src={tittlePartical}
                className="[@media(min-width:600px)]:w-[19px] w-[15px]"
              />
            </div>
            {/* Tittle Right Partical */}
            <div className="absolute right-[-5px] bottom-0" data-aos="fade-left">
              <img
                src={tittlePartical}
                className="[@media(min-width:600px)]:w-[19px] w-[15px] scale-x-[-1]"
              />
            </div>
          </div>
          <p className="[@media(min-width:570px)]:text-[14px] [@media(min-width:460px)]:text-[13px] text-[10px] text-[#130f4acc] font-[600] w-full text-center [@media(min-width:460px)]:mb-[30px] mb-0 pt-[18px]">
            But pain in reproach is blinding, and desire is not,
            <br className="flex" /> but in the heart.
          </p>

          {/* Main - Content */}
          <div className="w-[100%] h-[100%] flex flex-wrap justify-center items-center mx-auto GeologicaFont">
            {SkillData.map((key) => {
              return (
                <div
                  className={`[@media(min-width:450px)]:w-[115px] w-[90px] flex flex-col [@media(min-width:450px)]:mx-[2rem] mx-[1.5rem] ${key.dynamicMargin}`}
                  key={key.id}
                >
                  <div
                    className="w-[100%] [@media(min-width:450px)]:h-[115px] h-[90px] flex items-center justify-center relative rounded-[50%] "
                    style={{
                      background: `conic-gradient(#FFAC2A ${
                        key.progress * 36
                      }deg , #ececec 0deg)`,
                    }}
                  >
                    <div className="absolute left-0 top-0 w-full h-full rounded-[50%] flex items-center justify-center">
                      <div className="w-[90%] h-[90%] rounded-[50%] bg-[#ffffff] flex items-center justify-center text-center">
                        <div className="w-[40px] [@media(min-width:450px)]:h-[22px] h-[18px] flex items-center justify-center">

                            <p className="[@media(min-width:450px)]:text-[26px] text-[23px] font-[900] GeologicaFont text-[#FFAC2A]">
                              {countState && (
                                <CountUp
                                  start={0}
                                  end={key.progressShow}
                                  duration={3.75}
                                >
                                  {key.progressShow}
                                </CountUp>
                              )}
                              <span className="[@media(min-width:450px)]:text-[18px] text-[15px]">
                                %
                              </span>
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full text-center flex justify-center [@media(min-width:450px)]:pt-[12px] pt-[10px]">
                    <p className="[@media(min-width:450px)]:text-[13px] text-[11px] font-[600] text-[#130f49] GeologicaFont">
                      {key.tittle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      </ScrollTrigger>
    </div>
  );
};

export default Skill;
