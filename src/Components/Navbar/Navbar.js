import { useState } from "react";
import logo1 from "../../Image/logo_4.jpg";
import logo2 from "../../Image/web_logo_5.png";

import { HiOutlineMenu } from "react-icons/hi";

import { Link } from "react-scroll";

function Navber() {
  const navItems = [
    {
      id: 1,
      name: "Home",
      link: "Home",
      scrollY: 0,
      scrollYEnd: 650,
    },
    {
      id: 2,
      name: "About",
      link: "About",
      scrollY: 640,
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
          <div className="h-[4rem] w-full flex items-center justify-center GeologicaFont relative border-x-[1px] border-dashed border-x-[#00000038] ">
            {/* Side Border Left */}
            <div className="absolute left-[-1px] bottom-[-7px] w-[2px] h-[14px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
            <div className="absolute left-[-7px] bottom-[-1px] w-[14px] h-[2px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
            {/* Side Border Right */}
            <div className="absolute right-[-1px] bottom-[-7px] w-[2px] h-[14px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
            <div className="absolute right-[-7px] bottom-[-1px] w-[14px] h-[2px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
            {/* content */}
            <div className="w-full flex justify-between items-center [@media(min-width:1290px)]:!px-[3rem] [@media(min-width:550px)]:px-[2rem] [@media(min-width:450px)]:px-[1.5rem] px-[1rem]">
              <Link to="Home" className="flex items-center z-[2] ">
                <div className="w-[29px] h-[29px] rounded-[3px] flex justify-center items-center relative overflow-hidden border-[2px] border-[#FFAC2A]">
                  <img
                    src={logo1}
                    className="w-[91%] h-[91%] select-none cursor-pointer rounded-[3px] relative z-[2]"
                  />
                </div>
                <img
                  src={logo2}
                  className="w-[80px] select-none cursor-pointer ml-[7px]"
                />
              </Link>

              {/* ---------------Web Nav Item--------------- */}
              <div className="[@media(min-width:830px)]:flex hidden items-center justify-center text-black mt-[5px] ">
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
                          window.scrollY >= key.scrollY ? `${window.scrollY >= key.scrollYEnd ? "" : "text-[#ffc304]"}` : ""
                        } hover:text-[#ffc304] transition-[0.2s]`}
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
                <HiOutlineMenu className="[@media(min-width:420px)]:text-[25px] text-[23px]" />
              </div>
              <div
                className={`${
                  nevMobileVButton
                    ? "flex [@media(min-width:830px)]:hidden"
                    : "hidden"
                } z-[2]`}
                onClick={() => setNevMobileVButton(false)}
              >
                <p className="[@media(min-width:420px)]:text-[40px] text-[38px] rotate-[45deg]">
                  +
                </p>
              </div>
              {/* ---------------Mobile Nav Item--------------- */}
              <div
                className={`absolute top-0 left-0 w-full h-[100vh] bg-[#1e1345ed] z-0 ${
                  nevMobileVButton
                    ? "flex [@media(min-width:830px)]:hidden"
                    : "hidden"
                }`}
              >
                <div className="w-full h-full flex flex-col justify-center items-center">
                  {navItems.map((key) => {
                    return (
                      <Link
                        key={key.id}
                        to={key.link}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={300}
                        className="sm:px-3 px-[5px] py-2 [@media(min-width:420px)]:text-base text-[14px] font-medium cursor-pointer block"
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
