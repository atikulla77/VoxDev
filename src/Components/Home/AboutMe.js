import React from "react";
import tittlePartical from "../../Image/tittle_partical.png";
import { FaPlus } from "react-icons/fa6";
import partical_1 from "../../Image/Partical_2.png";

const AboutMe = () => {
  const PersonalInfosData = [
    {
      id: 1,
      tittle: "First Name :",
      info: "Steve",
    },
    {
      id: 2,
      tittle: "Last Name :",
      info: "Milner",
    },
    {
      id: 3,
      tittle: "Age :",
      info: "22 Years",
    },
    {
      id: 4,
      tittle: "Nationality :",
      info: "Bangladeshi",
    },
    {
      id: 5,
      tittle: "Freelance :",
      info: "Available",
    },
    {
      id: 6,
      tittle: "Address :",
      info: "Tunis",
    },
    {
      id: 7,
      tittle: "Phone :",
      info: "+21621184010",
    },
    {
      id: 8,
      tittle: "Email :",
      info: "you@mail.com",
    },
    {
      id: 9,
      tittle: "Skype :",
      info: "steve.milner",
    },
    {
      id: 10,
      tittle: "Langages :",
      info: "French, English",
    },
  ];
  const AboutMeData = [
    {
      id: 1,
      tittle: "years of experience",
      dynamicMargin: "mb-[1rem]",
      numberCount: 12,
    },
    {
      id: 2,
      tittle: "completed projects",
      dynamicMargin: "mb-[1rem]",
      numberCount: 97,
    },
    {
      id: 3,
      tittle: "Happy customers",
      dynamicMargin: "[@media(min-width:600px)]:mb-0 mb-[1rem]",
      numberCount: 81,
    },
    {
      id: 4,
      tittle: "awards won",
      dynamicMargin: "",
      numberCount: 53,
    },
  ];

  return (
    <div className="w-full h-full relative" id="Testimonials">
      <div className="absolute right-0 top-0 w-full flex justify-center overflow-hidden z-[0]">
        <div className="[@media(min-width:1536px)]:w-[1536px] w-full mx-auto flex justify-end">
          <img
            src={partical_1}
            className="[@media(min-width:660px)]:!w-[170px] [@media(min-width:460px)]:w-[140px] w-[120px]"
          />
        </div>
      </div>
      <div className="absolute right-[-168px] top-0 w-full [@media(min-width:1536px)]:flex hidden justify-center overflow-hidden z-[0]">
        <div className="[@media(min-width:1536px)]:w-[1536px] w-full mx-auto flex justify-end">
          <img src={partical_1} className="w-[170px] scale-x-[-1]" />
        </div>
      </div>
      <main
        className={`w-full h-full relative border-b-[1px] border-b-[#00000038] border-dashed [@media(min-width:1290px)]:!px-[3rem] [@media(min-width:550px)]:px-[2rem] [@media(min-width:450px)]:px-[1.5rem] px-[1rem]`}
      >
        <div className="[@media(min-width:1290px)]:w-[1290px] w-[100%] mx-auto py-[5rem] relative border-x-[1px] border-dashed border-x-[#00000038] [@media(min-width:1290px)]:!px-[3rem] [@media(min-width:550px)]:px-[2rem] [@media(min-width:450px)]:px-[1.5rem] px-[1rem]">
          {/* Tittle */}
          <div className="[@media(min-width:600px)]:w-[13rem] [@media(min-width:460px)]:w-[10rem] w-[9.2rem] [@media(min-width:600px)]:!h-[20px] [@media(min-width:460px)]:h-[16px] h-[14px] text-[#130f49] text-center flex flex-col items-center justify-center z-10  mx-auto relative [@media(min-width:600px)]:mb-[4.5rem] mb-[3rem]">
            <h1 className="[@media(min-width:600px)]:text-[28px] [@media(min-width:460px)]:text-[22px] text-[20px] font-[700] Poppins uppercase">
              About Me
            </h1>
            {/* Tittle Left Partical */}
            <div className="absolute left-[-5px] bottom-0">
              <img
                src={tittlePartical}
                className="[@media(min-width:500px)]:w-[19px] [@media(min-width:600px)]:w-[17px] w-[15px]"
              />
            </div>
            {/* Tittle Right Partical */}
            <div className="absolute right-[-5px] bottom-0">
              <img
                src={tittlePartical}
                className="[@media(min-width:500px)]:w-[19px] [@media(min-width:600px)]:w-[17px] w-[15px] scale-x-[-1]"
              />
            </div>
          </div>
          {/* <p className="[@media(min-width:570px)]:text-[14px] [@media(min-width:460px)]:text-[13px] text-[11px] text-[#5b5b5b] font-[600] w-full text-center [@media(min-width:460px)]:mb-[25px] mb-[15px] pt-[13px]">
            But pain in reproach is blinding, and desire is not,
            <br className="flex" /> but in the heart.
          </p> */}

          {/* Main - Content */}
          <div className="w-[100%] h-[100%] flex [@media(min-width:1070px)]:flex-row flex-col justify-center items-center mx-auto GeologicaFont">
            <div className="[@media(min-width:600px)]:w-[380px] w-full flex flex-col ">
              <h1 className="[@media(min-width:600px)]:text-[22px] [@media(min-width:460px)]:text-[18px] text-[15px] leading-[20px] font-[600] [@media(min-width:600px)]:pb-[1.8rem] [@media(min-width:460px)]:pb-[1.3rem] pb-[1rem] uppercase [@media(min-width:1070px)]:text-left text-center text-[#130f49]">
                personal infos
              </h1>
              <ul className="w-full grid [@media(min-width:600px)]:grid-cols-2 grid-cols-1 justify-between gap-[2px] [@media(min-width:600px)]:gap-x-[15px] gap-x-0 mx-auto">
                {PersonalInfosData.map((key) => {
                  return (
                    <li
                      key={key.id}
                      className="flex items-center [@media(min-width:600px)]:justify-start justify-center [@media(min-width:600px)]:pb-[0.5rem] pb-[0.3rem] [@media(min-width:600px)]:text-[14px] text-[13px] text-[#130f49]"
                    >
                      <p className="pr-[8px]">{key.tittle}</p>
                      <p className="text-[#130f49c7]">{key.info}</p>
                    </li>
                  );
                })}
              </ul>
              <button className="w-fit [@media(min-width:600px)]:text-[13px] [@media(min-width:460px)]:text-[12px] text-[11px] mt-[0.9rem] px-[22px] py-[7px] border-[2px] rounded-[10px] border-[#130f49] bg-[#130f49] hover:bg-transparent text-[#fff] hover:text-[#130f49] transition-[0.3s] cursor-pointer [@media(min-width:1070px)]:mx-0 mx-auto">
                Download CV
              </button>
            </div>
            <div className="[@media(min-width:600px)]:w-[505px] w-[235px] [@media(min-width:1070px)]:ml-[4rem] ml-0 [@media(min-width:1070px)]:mt-0 [@media(min-width:460px)]:mt-[3rem] mt-[2.5rem]">
              <div className="flex flex-wrap justify-between">
                {AboutMeData.map((key) => {
                  return (
                    <div
                      key={key.id}
                      className={`w-[235px] h-[130px] ${key.dynamicMargin} flex flex-col items-center justify-center px-[20px] py-[20px] shadow-[0px_0px_3px_0px_#0000004f] rounded-[3px] mx-auto`}
                    >
                      <div className="w-[100%] h-[34px] flex items-center relative text-[#FFAC2A]">
                        <p className="text-[36px] font-[900] InterFont">
                          {key.numberCount}
                        </p>
                        <div className="h-full">
                          <FaPlus className="text-[18px] ml-[3px]" />
                        </div>
                      </div>

                      <div className="w-full flex items-center justify-start pt-[0.8rem]">
                        <div className="w-[18px] h-[1px] bg-[#130f49] mr-[0.5rem]"></div>
                        <p className="text-[#130f49] text-[14px] font-[400] uppercase">
                          {key.tittle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutMe;
