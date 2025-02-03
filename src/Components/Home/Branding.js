import React from "react";
import Marquee from "react-fast-marquee";
import Brand1 from "../../Image/Branding/brand_1.png";
import Brand2 from "../../Image/Branding/brand_2.png";
import Brand3 from "../../Image/Branding/brand_3.png";
import Brand4 from "../../Image/Branding/brand_4.png";
import Brand5 from "../../Image/Branding/brand_5.png";
import Brand6 from "../../Image/Branding/brand_6.png";

const Branding = () =>
{
  const BrandingData = [
    {
      id: 1,
      image: Brand1,
    },
    {
      id: 2,
      image: Brand2,
    },
    {
      id: 3,
      image: Brand3,
    },
    {
      id: 4,
      image: Brand4,
    },
    {
      id: 5,
      image: Brand5,
    },
    {
      id: 6,
      image: Brand6,
    },
    {
      id: 7,
      image: Brand1,
    },
    {
      id: 8,
      image: Brand2,
    },
    {
      id: 9,
      image: Brand3,
    },
    {
      id: 10,
      image: Brand4,
    },
    {
      id: 11,
      image: Brand5,
    },
    {
      id: 12,
      image: Brand6,
    },
  ];

  return (
    <div className="w-full">
      <main
        className={`w-[100%] flex justify-center items-center border-b-[1px] border-b-[#00000038] border-dashed [@media(min-width:1290px)]:!px-0 [@media(min-width:550px)]:px-[2rem] [@media(min-width:450px)]:px-[1.5rem] px-[1rem]`}
      >
        <div className="[@media(min-width:1290px)]:w-[1290px] w-[100%] relative z-[1] flex flex-col justify-center items-center [@media(min-width:500px)]:py-[4rem] py-[2.5rem] border-x-[1px] border-dashed border-x-[#00000038] [@media(min-width:1290px)]:!px-[3rem] [@media(min-width:550px)]:px-[2rem] [@media(min-width:450px)]:px-[1.5rem] px-[1rem]">
          {/* Side Border Left */}
          <div className="absolute left-[-1px] bottom-[-7px] w-[2px] h-[14px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
          <div className="absolute left-[-7px] bottom-[-1px] w-[14px] h-[2px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
          {/* Side Border Right */}
          <div className="absolute right-[-1px] bottom-[-7px] w-[2px] h-[14px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
          <div className="absolute right-[-7px] bottom-[-1px] w-[14px] h-[2px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
          {/* content */}
          <div className="w-full text-center flex justify-center">
            <p className="[@media(min-width:1030px)]:!text-[15px] [@media(min-width:500px)]:text-[13px] [@media(min-width:440px)]:text-[11px] text-[10px] font-[600] KarlaFont text-[#130f49]">
              Best-in-class Workflow Automation for<br className="[@media(min-width:500px)]:hidden flex" /> businesses of all sizes.
            </p>
          </div>
          <div className="w-full [@media(min-width:500px)]:pt-[2rem] pt-[1.2rem] relative">
            <div className="absolute right-[-2px] bottom-0 [@media(min-width:500px)]:w-[50px] w-[30px] [@media(min-width:500px)]:h-[70px] h-[30px] bg-gradient-to-l from-white z-[10]"></div>
            <div className="absolute left-[-2px] bottom-0 [@media(min-width:500px)]:w-[50px] w-[30px] [@media(min-width:500px)]:h-[70px] h-[30px] bg-gradient-to-r from-white z-[10]"></div>
            <Marquee className="pt-[5px]">
              {BrandingData.map((key) =>
              {
                return (
                  <div
                    key={key.id}
                    className={`[@media(min-width:500px)]:w-[120px] w-[70px] [@media(min-width:500px)]:mx-[25px] mx-[10px] opacity-[0.8]`}
                  >
                    <img
                      src={key.image}
                      className="w-full"
                      alt={`Brand ${ key.id }`}
                    />
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Branding;
