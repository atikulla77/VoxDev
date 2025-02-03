import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import ServicesImg1 from "../../Image/Services/pixelcut-export-1.png";
import ServicesImg2 from "../../Image/Services/pixelcut-export-2.png";
import ServicesImg3 from "../../Image/Services/pixelcut-export-3.png";
import ServicesImg4 from "../../Image/Services/pixelcut-export-4.png";
import ServicesImg5 from "../../Image/Services/pixelcut-export-5.png";
import ServicesImg6 from "../../Image/Services/pixelcut-export-6.png";

import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";
import { TbSettingsCode } from "react-icons/tb";
import { DiAndroid } from "react-icons/di";
import { FaFreeCodeCamp } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";

import tittlePartical from "../../Image/tittle_partical.png";

const Services = () => {
  const ServicesData = [
    {
      id: 1,
      img: <FaHeadphonesSimple />,
      tittle: "Unlimited Support",
      borderClass:
        "border-r-[1px] border-b-[1px] [@media(min-width:761px)]:border-l-[0px] border-l-[1px]",
    },
    {
      id: 2,
      img: <IoMdPhonePortrait />,
      tittle: "Pixel Perfect Design",
      borderClass:
        "[@media(min-width:1141px)]:!border-r-[1px] [@media(min-width:761px)]:!border-r-[0px] border-r-[1px] [@media(min-width:761px)]:border-l-[0px] border-l-[1px] border-b-[1px]",
    },
    {
      id: 3,
      img: <TbSettingsCode />,
      tittle: "Powerful Options",
      borderClass:
        "border-b-[1px] [@media(min-width:1141px)]:border-r-[0px] border-r-[1px] [@media(min-width:761px)]:border-l-[0px] border-l-[1px]",
    },
    {
      id: 4,
      img: <DiAndroid />,
      tittle: "App Development",
      borderClass:
        "[@media(min-width:1141px)]:!border-r-[1px] [@media(min-width:761px)]:!border-r-[0px] border-r-[1px] [@media(min-width:1141px)]:border-b-[0px] border-b-[1px] [@media(min-width:761px)]:border-l-[0px] border-l-[1px]",
    },
    {
      id: 5,
      img: <FaFreeCodeCamp />,
      tittle: "Unique and Clean",
      borderClass:
        "border-r-[1px] [@media(min-width:761px)]:border-b-[0px] border-b-[1px] [@media(min-width:761px)]:border-l-[0px] border-l-[1px]",
    },
    {
      id: 6,
      img: <FaUsersGear />,
      tittle: "Satisfied Clients",
      borderClass:
        "[@media(min-width:761px)]:border-l-[0px] border-l-[1px] [@media(min-width:761px)]:border-r-[0px] border-r-[1px]",
    },
  ];

  return (
    <div className="w-full h-full relative" id="Service">
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
          <div className="[@media(min-width:600px)]:w-[13rem] [@media(min-width:460px)]:w-[10rem] w-[9.2rem] [@media(min-width:600px)]:!h-[20px] [@media(min-width:460px)]:h-[16px] h-[14px] text-[#130f49] text-center flex flex-col items-center justify-center z-10 mx-auto relative ">
            <h1 className="[@media(min-width:600px)]:text-[28px] [@media(min-width:460px)]:text-[22px] text-[20px] font-[700] Poppins uppercase">
              Services
            </h1>
            {/* Tittle Left Partical */}
            <div
              className="absolute left-[-5px] bottom-0"
              data-aos="fade-right"
            >
              <img
                alt=""
                src={tittlePartical}
                className="[@media(min-width:600px)]:w-[19px] w-[15px]"
              />
            </div>
            {/* Tittle Right Partical */}
            <div
              className="absolute right-[-5px] bottom-0"
              data-aos="fade-left"
            >
              <img
                alt=""
                src={tittlePartical}
                className="[@media(min-width:600px)]:w-[19px] w-[15px] scale-x-[-1]"
              />
            </div>
          </div>
          <p className="[@media(min-width:570px)]:text-[14px] [@media(min-width:460px)]:text-[13px] text-[10px] text-[#130f4acc] font-[600] w-full text-center [@media(min-width:460px)]:mb-[30px] mb-[30px] pt-[18px]">
            But pain in reproach is blinding, and desire is not,
            <br className="flex" /> but in the heart.
          </p>

          {/* Main - Content */}
          <div className="w-full flex flex-wrap justify-center Poppins">
            {ServicesData.map((key) => {
              return (
                <div
                  key={key.id}
                  className={`[@media(min-width:360px)]:w-[350px] w-[98%] text-black text-center [@media(min-width:500px)]:px-[30px] [@media(min-width:400px)]:px-[20px] px-[12px] [@media(min-width:400px)]:py-[30px] py-[20px] ${key.borderClass} border-[#00000038] border-dashed relative Services_HoverEffectCard hover:shadow-[0px_10px_20px_0px_#c6c6c6b3] transition-[0.3s]`}
                >
                  <div className="w-full h-full"  data-aos="fade-up">
                    <div className="[@media(min-width:430px)]:text-[55px] text-[50px] w-full flex text-[#ffac2a] [@media(min-width:500px)]:mb-[15px] mb-[10px] justify-center">
                      {key.img}
                    </div>
                    <h1 className="[@media(min-width:500px)]:text-[17px] text-[16px] font-[600] tracking-[-.5px] text-[#1d1d1d] pb-[5px] ">
                      {key.tittle}
                    </h1>
                    <p className="[@media(min-width:500px)]:text-[13px] [@media(min-width:400px)]:text-[12px] text-[11px] font-[400] leading-[1.65] text-[#3a3a3a]">
                      Lorem ipsum dolor sit amet consectetur
                      <br />
                      adipiscing elit sed do elusmod temop
                      <br />
                      incididuct ut labore et dolore.
                    </p>
                    <div className="[@media(min-width:500px)]:text-[13px] [@media(min-width:400px)]:text-[12px] text-[11px] font-[600] text-[#4e4e4e] flex justify-center items-center pt-[5px] cursor-pointer Services_HoverEffectCardReadMore transition-[0.3s]">
                      <p>READ MORE</p>{" "}
                      <FaArrowRight className="[@media(min-width:500px)]:text-[12px] [@media(min-width:400px)]:text-[11px] text-[10px] ml-[3px]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
