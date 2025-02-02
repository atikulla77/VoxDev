import React from "react";
import { FaBriefcase } from "react-icons/fa";
import partical_1 from "../../Image/Partical_3.png";
import tittlePartical from "../../Image/tittle_partical.png";

const ExperienceEducation = () => {
  const EducationData = [
    {
      id: 1,
      tittle: "Web Developer",
      tittleRightName: "Envato",
      date: "2018 - Present",
      marginBottomStyle: "[@media(min-width:465px)]:mb-[2.2rem] mb-[1.7rem]",
    },
    {
      id: 2,
      tittle: "UI/UX Designer",
      tittleRightName: "Themeforest",
      date: "2013 - 2018",
      marginBottomStyle: "[@media(min-width:465px)]:mb-[2.2rem] mb-[1.7rem]",
    },
    {
      id: 3,
      tittle: "Consultant",
      tittleRightName: "Videohive",
      date: "2005 - 2013",
      marginBottomStyle:
        "[@media(min-width:1090px)]:mb-0 [@media(min-width:465px)]:mb-[2.2rem] mb-[1.7rem]",
    },
  ];
  const ExperienceData = [
    {
      id: 1,
      tittle: "ENGINEERING DEGREE",
      tittleRightName: "OXFORD UNIVERSITY",
      date: "2015",
      marginBottomStyle: "[@media(min-width:465px)]:mb-[2.2rem] mb-[1.7rem]",
    },
    {
      id: 2,
      tittle: "MASTER DEGREE",
      tittleRightName: "KIEV UNIVERSITY",
      date: "2012",
      marginBottomStyle: "[@media(min-width:465px)]:mb-[2.2rem] mb-[1.7rem]",
    },
    {
      id: 3,
      tittle: "BACHELOR DEGREE",
      tittleRightName: "TUNIS HIGH SCHOOL",
      date: "2009",
      marginBottomStyle: "",
    },
  ];

  return (
    <div className="w-full h-full relative">
    <div className="absolute left-0 top-0 w-full flex justify-center overflow-hidden z-[0]">
      <div className="[@media(min-width:1536px)]:w-[1536px] w-full mx-auto flex justify-start">
        <img
          src={partical_1}
          className="[@media(min-width:660px)]:!w-[170px] [@media(min-width:460px)]:w-[140px] w-[120px]"
        />
      </div>
    </div>
    <div className="absolute left-[-170px] top-0 w-full [@media(min-width:1536px)]:flex hidden justify-center overflow-hidden z-[0]">
      <div className="[@media(min-width:1536px)]:w-[1536px] w-full mx-auto flex justify-start">
        <img src={partical_1} className="w-[170px] scale-x-[-1]" />
      </div>
    </div>
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
          <div className="[@media(min-width:600px)]:!w-[27rem] [@media(min-width:460px)]:w-[12rem] w-[11rem] [@media(min-width:600px)]:!h-[19px] [@media(min-width:460px)]:h-[48px] h-[41px] text-[#130f49] text-center flex items-center justify-center z-10 [@media(min-width:400px)]:mb-[5rem] mb-[3.5rem] mx-auto relative">
            <h1 className="[@media(min-width:600px)]:!text-[28px] [@media(min-width:460px)]:text-[22px] text-[19px] font-[700] Poppins uppercase">
              Experience{" "}
              <br className="[@media(min-width:600px)]:hidden flex " />&
              Education
            </h1>
            {/* Tittle Left Partical */}
            <div className="absolute left-[-5px] bottom-0" data-aos="fade-right">
              <img src={tittlePartical} className="[@media(min-width:500px)]:w-[19px] [@media(min-width:600px)]:w-[17px] w-[15px]" />
            </div>
            {/* Tittle Right Partical */}
            <div className="absolute right-[-5px] bottom-0" data-aos="fade-left">
              <img src={tittlePartical} className="[@media(min-width:500px)]:w-[19px] [@media(min-width:600px)]:w-[17px] w-[15px] scale-x-[-1]" />
            </div>
          </div>
          {/* Main - Content */}
          <div className="w-[100%] relative z-[1] flex [@media(min-width:1090px)]:flex-row flex-col justify-center items-center">
            {/* Education */}
            <div className="flex flex-col [@media(min-width:655px)]:w-[510px] w-full [@media(min-width:1090px)]:mr-[20px] mr-0 justify-center text-black z-10 relative overflow-hidden">
              {EducationData.map((key) => {
                return (
                  <div
                    key={key.id}
                    className={`w-full h-[120px] flex justify-end items-center ${key.marginBottomStyle} relative`}
                  >
                    {/* Border Left */}
                    <div className="absolute top-0 [@media(min-width:560px)]:left-[17.5px] left-[15px] bg-[#d2d2d2] w-[1px] h-full z-[1]"></div>
                    {/* Border Left */}
                    <div className="absolute top-0 left-0 bg-[#FFAC2A] [@media(min-width:560px)]:w-[35px] w-[30px] [@media(min-width:560px)]:h-[35px] h-[30px] rounded-[50%] z-[2] flex items-center justify-center text-center shadow-[0px_0px_0px_0px_#FFAC2A]">
                      <FaBriefcase className="text-white [@media(min-width:560px)]:text-[16px] text-[14px]" />
                    </div>

                    {/* Content */}
                    <div className="w-[94%] h-[100%] grid text-left items-center rounded-[10px] pl-[25px]  [@media(min-width:460px)]:pr-[25px] pr-0 mr-[3px] pb-[5px]">
                      <p className="OpenSans font-[600] [@media(min-width:560px)]:text-[12px] [@media(min-width:460px)]:text-[11px] text-[10px] bg-[#cbcbcb9c] rounded-[20px] px-[10px] py-[1px] text-black w-fit h-fit opacity-[.8]">
                        {key.date}
                      </p>
                      <div className="font-[600] leading-[17px] flex [@media(min-width:460px)]:flex-row flex-col text-left items-center Poppins uppercase text-[#130f49] pt-[7px] pb-[3px]">
                        <h2 className="[@media(min-width:560px)]:text-[19px] [@media(min-width:460px)]:text-[16px] text-[15px] [@media(min-width:460px)]:w-fit w-full">
                          {key.tittle}
                        </h2>{" "}
                        <div className="[@media(min-width:460px)]:w-fit w-full flex items-center [@media(min-width:460px)]:pt-0 pt-[4px]">
                          <div className="[@media(min-width:560px)]:w-[12px] [@media(min-width:460px)]:w-[8px] w-[6px] [@media(min-width:560px)]:h-[2px] [@media(min-width:460px)]:h-[1.3px] h-[1px] bg-[#130f49] [@media(min-width:560px)]:mx-[6px] mx-[3px]"></div>{" "}
                          <h2 className="[@media(min-width:560px)]:text-[16px] [@media(min-width:460px)]:text-[13px] text-[11px]">
                            {key.tittleRightName}
                          </h2>
                        </div>
                      </div>
                      <p className="text-[#181818b3] [@media(min-width:560px)]:text-[13px] [@media(min-width:460px)]:text-[12px] text-[11px] font-[500] [@media(min-width:460px)]:leading-[22px] leading-[18px] OpenSans">
                        Lorem ipsum dolor sit amet, consectetur tempor
                        incididunt ut labore
                        <br className="[@media(min-width:1145px)]:flex hidden" />{" "}
                        adipisicing elit
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-[15px] h-[100%] [@media(min-width:790px)]:flex hidden"></div>

            {/* Experience */}
            <div className="flex flex-col [@media(min-width:655px)]:w-[510px] w-full justify-center text-black z-10 relative overflow-hidden">
              {ExperienceData.map((key) => {
                return (
                  <div
                    key={key.id}
                    className={`w-full h-[120px] flex justify-end items-center ${key.marginBottomStyle} relative`}
                  >
                    {/* Border Left */}
                    <div className="absolute top-0 [@media(min-width:560px)]:left-[17.5px] left-[15px] bg-[#d2d2d2] w-[1px] h-full z-[1]"></div>
                    {/* Border Left */}
                    <div className="absolute top-0 left-0 bg-[#FFAC2A] [@media(min-width:560px)]:w-[35px] w-[30px] [@media(min-width:560px)]:h-[35px] h-[30px] rounded-[50%] z-[2] flex items-center justify-center text-center shadow-[0px_0px_0px_0px_#FFAC2A]">
                      <FaBriefcase className="text-white [@media(min-width:560px)]:text-[16px] text-[14px]" />
                    </div>

                    {/* Content */}
                    <div className="w-[94%] h-[100%] grid text-left items-center rounded-[10px] pl-[25px]  [@media(min-width:460px)]:pr-[25px] pr-0 mr-[3px] pb-[5px]">
                      <p className="OpenSans font-[600] [@media(min-width:560px)]:text-[12px] [@media(min-width:460px)]:text-[11px] text-[10px] bg-[#cbcbcb9c] rounded-[20px] px-[10px] py-[1px] text-black w-fit h-fit opacity-[.8]">
                        {key.date}
                      </p>
                      <div className="font-[600] leading-[17px] flex [@media(min-width:460px)]:flex-row flex-col text-left items-center Poppins uppercase text-[#130f49] pt-[7px] pb-[3px]">
                        <h2 className="[@media(min-width:560px)]:text-[19px] [@media(min-width:460px)]:text-[16px] text-[15px] [@media(min-width:460px)]:w-fit w-full">
                          {key.tittle}
                        </h2>{" "}
                        <div className="[@media(min-width:460px)]:w-fit w-full flex items-center [@media(min-width:460px)]:pt-0 pt-[4px]">
                          <div className="[@media(min-width:560px)]:w-[12px] [@media(min-width:460px)]:w-[8px] w-[6px] [@media(min-width:560px)]:h-[2px] [@media(min-width:460px)]:h-[1.3px] h-[1px] bg-[#130f49] [@media(min-width:560px)]:mx-[6px] mx-[3px]"></div>{" "}
                          <h2 className="[@media(min-width:560px)]:text-[16px] [@media(min-width:460px)]:text-[13px] text-[11px]">
                            {key.tittleRightName}
                          </h2>
                        </div>
                      </div>
                      <p className="text-[#181818b3] [@media(min-width:560px)]:text-[13px] [@media(min-width:460px)]:text-[12px] text-[11px] font-[500] [@media(min-width:460px)]:leading-[22px] leading-[18px] OpenSans">
                        Lorem ipsum dolor sit amet, consectetur tempor
                        incididunt ut labore
                        <br className="[@media(min-width:1145px)]:flex hidden" />{" "}
                        adipisicing elit
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExperienceEducation;
