import React from "react";
import { FaPalette } from "react-icons/fa6";
import { FaDesktop } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaPaintbrush } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";

const WhatIDo = () => {
  const MyServicesData = [
    {
      id: 1,
      icon: <FaPalette />,
      tittle: "Graphic Design",
      MarginBottom: "mt-[0px] mb-[20px]"
    },
    {
      id: 2,
      icon: <FaDesktop />,
      tittle: "Web Design",
      MarginBottom: "[@media(min-width:1065px)]:mt-[0px] mt-[20px] mb-[20px]"
    },
    {
      id: 3,
      icon: <FaPencilRuler />,
      tittle: "UI/UX Design",
      MarginBottom: "mt-[20px] mb-[20px]"
    },
    {
      id: 4,
      icon: <FaPaintbrush />,
      tittle: "App Design & Develop",
      MarginBottom: "mt-[20px] mb-[20px]"
    },
    {
      id: 5,
      icon: <FaChartArea />,
      tittle: "Business Analysis",
      MarginBottom: "mt-[20px] [@media(min-width:1065px)]:mb-[0px] mb-[20px]"
    },
    {
      id: 6,
      icon: <FaBullhorn />,
      tittle: "SEO Marketing",
      MarginBottom: "mt-[20px] mb-[0px]"
    },
  ];

  return (
    <div className="w-full">
      <main
        className={`w-[100%] flex justify-center items-center border-b-[1px] border-b-[#00000038] border-dashed [@media(min-width:1290px)]:!px-0 [@media(min-width:550px)]:px-[2rem] [@media(min-width:450px)]:px-[1.5rem] px-[1rem]`}
      >
        <div className="[@media(min-width:1290px)]:w-[1290px] w-[100%] relative z-[1] flex flex-col justify-center items-center py-[5rem] border-x-[1px] border-dashed border-x-[#00000038] [@media(min-width:1290px)]:!px-[3rem] [@media(min-width:550px)]:px-[2rem] [@media(min-width:450px)]:px-[1.5rem] px-[1rem]">
          {/* Side Border Left */}
          <div className="absolute left-[-1px] bottom-[-7px] w-[2px] h-[14px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
          <div className="absolute left-[-7px] bottom-[-1px] w-[14px] h-[2px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
          {/* Side Border Right */}
          <div className="absolute right-[-1px] bottom-[-7px] w-[2px] h-[14px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
          <div className="absolute right-[-7px] bottom-[-1px] w-[14px] h-[2px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
          {/* content */}
          <div className="[@media(min-width:600px)]:w-[14rem] w-[11rem] [@media(min-width:600px)]:h-[20px] h-[16px] text-[#130f49] text-center flex items-center justify-center z-10 mb-[30px] mx-auto relative">
            <h1 className="[@media(min-width:600px)]:text-[28px] text-[22px] font-[700] Poppins uppercase">
              What I Do?
            </h1>
            {/* Tittle Left Partical */}
            <div className="absolute left-[-5px] bottom-0">
              <div className="relative">
                <div className="absolute left-0 bottom-0 [@media(min-width:600px)]:w-[20px] w-[15px] [@media(min-width:600px)]:h-[20px] h-[15px] bg-[#FFAC2A]"></div>
                <div className="absolute [@media(min-width:600px)]:left-[-16px] left-[-14px] [@media(min-width:600px)]:bottom-[4px] bottom-[3px] [@media(min-width:600px)]:w-[32px] w-[27px] [@media(min-width:600px)]:h-[35px] h-[30px] bg-[#ffffff] rotate-45"></div>
              </div>
            </div>
            {/* Tittle Right Partical */}
            <div className="absolute right-[-5px] bottom-0">
              <div className="relative">
                <div className="absolute right-0 bottom-0 [@media(min-width:600px)]:w-[20px] w-[15px] [@media(min-width:600px)]:h-[20px] h-[15px] bg-[#FFAC2A]"></div>
                <div className="absolute [@media(min-width:600px)]:right-[-16px] right-[-14px] [@media(min-width:600px)]:bottom-[4px] bottom-[3px] [@media(min-width:600px)]:w-[32px] w-[27px] [@media(min-width:600px)]:h-[35px] h-[30px] bg-[#ffffff] rotate-[-45deg]"></div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center Poppins pt-[2rem]">
            {MyServicesData.map((key) => {
              return (
                <div
                  key={key.id}
                  className={`[@media(min-width:530px)]:w-[420px] w-[100%] text-black ${key.MarginBottom} [@media(min-width:630px)]:mx-[2rem] mx-0 transition-[0.3s] flex [@media(min-width:480px)]:flex-row flex-col [@media(min-width:480px)]:justify-start justify-center [@media(min-width:480px)]:text-left text-center`}
                >
                  <div className="[@media(min-width:530px)]:text-[32px] text-[28px] [@media(min-width:530px)]:w-[70px] w-[55px] [@media(min-width:530px)]:h-[70px] h-[55px] text-[#FFAC2A] flex justify-center items-center shadow-[0px_0px_4px_0px_#00000029] rounded-[5px] px-[13px] [@media(min-width:480px)]:mx-0 mx-auto">
                    {key.icon}
                  </div>
                  <div className="[@media(min-width:530px)]:pl-[1.5rem] [@media(min-width:480px)]:pl-[1rem] pl-0 [@media(min-width:480px)]:pt-0 pt-[1.1rem]">
                    <h1 className="[@media(min-width:530px)]:text-[18px] text-[16px] font-[500] tracking-[-.5px] text-[#000000] pb-[8px] ">
                      {key.tittle}
                    </h1>
                    <p className="[@media(min-width:530px)]:text-[14px] [@media(min-width:430px)]:text-[13px] text-[12px] font-[400] [@media(min-width:530px)]:leading-[23px] leading-[21px] text-[#9f9f9f]">
                      Lisque persius interesset his et, in quot<br className="[@media(min-width:480px)]:hidden flex" /> quidam
                      <br className="[@media(min-width:480px)]:flex hidden" /> persequeris vim, ad mea <br className="[@media(min-width:480px)]:hidden flex" />essent possim iriure.
                    </p>
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

export default WhatIDo;
