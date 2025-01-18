import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Navber from "../Navbar/Navbar";
import profilePhoto from "../../Image/Profile_Pic.png";
import partical_1 from "../../Image/Partical_1.png";

import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";

import { Link } from "react-scroll";

function HomeBanner() {
  const [text] = useTypewriter({
    words: ["Designer", "Coder", "Player"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  });
  return (
    <div className="w-full h-full [@media(min-width:500px)]:pt-[75px] pt-[55px] relative mb-[10rem]" name="Home">
      <Navber />
      <div className="absolute left-0 top-0 w-full flex justify-center z-[0]">
        <div className="[@media(min-width:1536px)]:w-[1536px] w-full mx-auto flex justify-start">
          <img
            src={partical_1}
            className="[@media(min-width:660px)]:!w-[170px] [@media(min-width:460px)]:w-[140px] w-[120px]"
          />
        </div>
      </div>
      <div className="absolute left-[-170px] top-0 w-full [@media(min-width:1536px)]:flex hidden justify-center z-[0]">
        <div className="[@media(min-width:1536px)]:w-[1536px] w-full mx-auto flex justify-start">
          <img
            src={partical_1}
            className="w-[170px] scale-x-[-1]"
          />
        </div>
      </div>


      <div className="w-full h-full [@media(min-width:1290px)]:!px-0 [@media(min-width:550px)]:px-[2rem] [@media(min-width:450px)]:px-[1.5rem] px-[1rem] border-b-[1px] border-b-[#00000038] border-dashed">
        <div className="[@media(min-width:1290px)]:w-[1290px] w-[100%] h-full [@media(min-width:920px)]:py-[4rem] py-0  flex [@media(min-width:920px)]:flex-row flex-col justify-between items-center mx-auto  relative border-x-[1px] border-dashed border-x-[#00000038] [@media(min-width:1290px)]:!px-[3rem] [@media(min-width:550px)]:px-[2rem] [@media(min-width:450px)]:px-[1.5rem] px-[1rem]">
          {/* Side Border Left */}
          <div className="absolute left-[-1px] bottom-[-7px] w-[2px] h-[14px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
          <div className="absolute left-[-7px] bottom-[-1px] w-[14px] h-[2px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
          {/* Side Border Right */}
          <div className="absolute right-[-1px] bottom-[-7px] w-[2px] h-[14px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
          <div className="absolute right-[-7px] bottom-[-1px] w-[14px] h-[2px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
          {/* content */}
          <div
            className="[@media(min-width:768px)]:w-[60%] [@media(min-width:500px)]:w-[90%] w-[100%] h-[100%] flex [@media(min-width:920px)]:hidden justify-center items-center z-10 overflow-hidden mx-auto relative mt-[2rem]"
          >
            <img src={profilePhoto} className="" />
          </div>
          <div
            className="[@media(min-width:920px)]:w-[60%] [@media(min-width:768px)]:w-[90%] w-[100%] z-10 GeologicaFont text-[#55527c] relative [@media(min-width:920px)]:text-left text-center [@media(min-width:920px)]:pt-0 pt-[30px] [@media(min-width:920px)]:pb-0 pb-[3rem]"
          >
            <h1
              className="[@media(min-width:1100px)]:!text-[55px] [@media(min-width:1050px)]:text-[50px] [@media(min-width:500px)]:text-[45px] [@media(min-width:380px)]:text-[30px] text-[25px] [@media(min-width:1050px)]:!leading-[55px] [@media(min-width:500px)]:leading-[50px] [@media(min-width:380px)]:leading-[35px] leading-[27px] font-[700] [@media(min-width:920px)]:mx-[] mx-auto text-[#130f49] ml-[-5px] [@media(min-width:640px)]:pb-[11px] pb-[8px]"
            >
              Hi, I'm Atik!
            </h1>
            <h1
              className="[@media(min-width:1100px)]:!text-[55px] [@media(min-width:1050px)]:text-[50px] [@media(min-width:500px)]:text-[45px] [@media(min-width:380px)]:text-[30px] text-[25px] [@media(min-width:1050px)]:!leading-[55px] [@media(min-width:500px)]:leading-[50px] [@media(min-width:380px)]:leading-[35px] leading-[27px] font-[700] [@media(min-width:920px)]:mx-[] mx-auto text-[#130f49] ml-[-5px] pb-[15px]"
            >
              Creative
              <span className="text-[#FFAC2A] [@media(min-width:640px)]:pl-[10px] pl-[5px]">
                {text}
              </span>
              <span className="text-[#FFAC2A]">
                <Cursor cursorStyle="|" />
              </span>
            </h1>
            <p className="[@media(min-width:1165px)]:!text-[16px] [@media(min-width:1050px)]:text-[15px] [@media(min-width:400px)]:text-[13px] text-[12px] [@media(min-width:920px)]:mx-0 mx-auto [@media(min-width:440px)]:leading-[25px] leading-[20px] KarlaFont">
              I'm a Bangladesh based web designer & front‑end developer focused on crafting<br className="[@media(min-width:920px)]:!hidden [@media(min-width:610px)]:flex hidden"/>  <br className="[@media(min-width:1165px)]:flex hidden"/> clean & user‑friendly experiences, I am passionate about building excellent software<br className="[@media(min-width:920px)]:!hidden [@media(min-width:610px)]:flex hidden"/><br className="[@media(min-width:1165px)]:flex hidden"/> that improves the lives of those around me.
            </p>
            <div className="flex [@media(min-width:920px)]:justify-start justify-center items-center pt-[20px] [@media(min-width:920px)]:mx-0 mx-auto">
              <button
                className="[@media(min-width:920px)]:!text-[13px] [@media(min-width:500px)]:text-[11px] text-[10px] [@media(min-width:920px)]:!px-[25px] px-[23px] [@media(min-width:500px)]:py-[8px] py-[7px] border-[2px] rounded-[10px] border-[#130f49] bg-[#130f49] text-[#fff] social_icon_hover transition-[0.3s] cursor-pointer"
              >
                Got a Project?
              </button>
              <button
                className="[@media(min-width:920px)]:!text-[13px] [@media(min-width:500px)]:text-[11px] text-[10px] [@media(min-width:920px)]:!px-[25px] px-[23px] [@media(min-width:500px)]:py-[8px] py-[7px] border-[2px] rounded-[10px] border-[#130f49]  text-[#130f49] social_icon_hover transition-[0.3s] cursor-pointer ml-[0.8rem]"
              >
                Let's Talk
              </button>
            </div>
          </div>
          <div
            className="w-[700px] h-[100%] [@media(min-width:920px)]:flex hidden justify-center items-center z-10 overflow-hidden"
            data-aos="fade-down"
          >
            <img src={profilePhoto} className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
