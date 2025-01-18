import { useState } from "react";
import logo2 from "../../Image/web_logo_6.png";

import { HiOutlineMenu } from "react-icons/hi";

import { Link } from "react-scroll";

function Navber() {
  const navItems = [
    {
      id: 1,
      name: "Home",
      link: "Home",
      scrollY: 0,
      scrollYEnd: 630,
    },
    {
      id: 2,
      name: "About",
      link: "About",
      scrollY: 630,
      scrollYEnd: 800,
    },
    {
      id: 3,
      name: "Skill",
      link: "Skill",
      scrollY: 800,
      scrollYEnd: 650,
    },
    {
      id: 4,
      name: "Portfolio",
      link: "Portfolio",
      scrollY: 800,
      scrollYEnd: 650,
    },
    {
      id: 5,
      name: "Service",
      link: "Service",
      scrollY: 800,
      scrollYEnd: 650,
    },
    {
      id: 6,
      name: "Contact",
      link: "Contact",
      scrollY: 800,
      scrollYEnd: 650,
    },
  ];
  //```````background color change```````
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 24) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const [nevMobileVButton, setNevMobileVButton] = useState(false);

  return (
    <div className={` w-full flex fixed top-[0px] z-50`}>
      <nav
        className={`${
          color ? "bg-white" : "bg-transparent"
        } text-black w-full relative border-b-[1px] border-b-[#00000038] border-dashed [@media(min-width:1290px)]:!px-0 [@media(min-width:550px)]:px-[2rem] [@media(min-width:450px)]:px-[1.5rem] px-[1rem]`}
      >
        <div
          className="mx-auto px-0 [@media(min-width:1290px)]:!w-[1290px] w-[100%]"
          // data-aos="fade-down"
        >
          <div className="[@media(min-width:500px)]:h-[4rem] h-[3.5rem] w-full flex items-center justify-center GeologicaFont relative border-x-[1px] border-dashed border-x-[#00000038] ">
            {/* Side Border Left */}
            <div className="absolute left-[-1px] bottom-[-7px] w-[2px] h-[14px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
            <div className="absolute left-[-7px] bottom-[-1px] w-[14px] h-[2px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
            {/* Side Border Right */}
            <div className="absolute right-[-1px] bottom-[-7px] w-[2px] h-[14px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
            <div className="absolute right-[-7px] bottom-[-1px] w-[14px] h-[2px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
            {/* content */}
            <div className="w-full flex justify-between items-center [@media(min-width:1290px)]:!px-[3rem] [@media(min-width:550px)]:px-[2rem] [@media(min-width:450px)]:px-[1.5rem] px-[1rem]">
              <Link to="Home" className="flex items-center z-[2] ">
                <img
                  src={logo2}
                  className="w-[80px] select-none cursor-pointer drop-shadow-[0px_0px_2px_#ffffff]"
                />
              </Link>

              {/* ---------------Web Nav Item--------------- */}
              <div className="[@media(min-width:830px)]:flex hidden items-center justify-center text-[#130f49] mt-[5px] ">
                <div className="flex sm:space-x-4 space-x-1">
                  {navItems.map((key) => {
                    return (
                      <Link
                        key={key.id}
                        to={key.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={300}
                        className={`sm:px-3 px-[5px] py-2 text-[13px] font-medium cursor-pointer ${
                          window.scrollY >= key.scrollY ? `${window.scrollY >= key.scrollYEnd ? "" : "text-[#FFAC2A]"}` : ""
                        } hover:text-[#FFAC2A]`}
                        aria-current="page"
                      >
                        {key.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* ---------------Mobile Nav Button--------------- */}
              <div
                className={`${
                  nevMobileVButton
                    ? "hidden"
                    : "flex [@media(min-width:830px)]:hidden"
                } z-[2]`}
                onClick={() => setNevMobileVButton(true)}
              >
                <HiOutlineMenu className="[@media(min-width:420px)]:text-[23px] text-[21px] text-[#696969]" />
              </div>
              <div
                className={`${
                  nevMobileVButton
                    ? "flex [@media(min-width:830px)]:hidden"
                    : "hidden"
                } z-[2]`}
                onClick={() => setNevMobileVButton(false)}
              >
                <p className="[@media(min-width:420px)]:text-[36px] text-[34px] rotate-[45deg] text-[#696969]">
                  +
                </p>
              </div>
              {/* ---------------Mobile Nav Item--------------- */}
              <div
                className={`absolute [@media(min-width:500px)]:top-[4rem] top-[3.5rem] right-[-1px] [@media(min-width:450px)]:w-[11rem] w-[10rem] bg-[#fff] border-[1px] border-dashed border-[#00000038] z-0 ${
                  nevMobileVButton
                    ? "flex [@media(min-width:830px)]:hidden"
                    : "hidden"
                }`}
              >
                <div className="w-full h-full flex flex-col justify-start text-left items-center py-[1rem] text-[#130f49]">
                  {navItems.map((key) => {
                    return (
                      <Link
                        key={key.id}
                        to={key.link}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={300}
                        className={`w-full pl-[2rem] py-2 [@media(min-width:450px)]:text-[12px] text-[11px] font-medium cursor-pointer block`}
                        aria-current="page"
                        onClick={() => setNevMobileVButton(false)}
                      >
                        {key.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navber;
