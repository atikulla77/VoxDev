import { useState } from "react";
// import logo from "../../Image/logo.png";
// import logo1 from "../../Image/1_icon_1.png";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { Link } from "react-scroll";

function Navber() {
  //      ``````````````````
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
  const navItems = [
    {
      id: 1,
      name: "What We Do",
    },
    {
      id: 2,
      name: "About Us",
    },
    {
      id: 3,
      name: "Case Studies",
    },
    {
      id: 4,
      name: "Resources",
    },
    {
      id: 5,
      name: "Blog",
    },
  ];

  return (
    <div className={` w-full flex fixed top-[0px] z-50`}>
      <nav
        className={`text-[#fff] w-full relative z-10  ${
          color
            ? " bg-gradient-to-r from-[#1fb6f0f2] to-[#3291eaf2] shadow-[0px_0px_3px_0px_#0003]"
            : "bg-transparent"
        }`}
        style={{ transition: ".1s ease-in" }}
      >
        <div
          className="mx-auto xl:!w-[1230px] [@media(min-width:715px)]:w-[96%] w-[90%] relative z-10"
          // data-aos="fade-down"
        >
          <div className="h-[4.5rem] w-full flex items-center justify-between Poppins">
            <Link to="" className=" z-[2] relative cursor-pointer">
              <div className="flex items-center">
                {/* <img src={logo1} className="w-[40px] select-none pr-[7px]" />
                <img src={logo} className="w-[92px] select-none" /> */}
              </div>
            </Link>

            {/* ---------------Web Nav Item--------------- */}
            <div className="md:flex hidden items-center justify-center text-[#fff] mt-[5px]">
              <div className="flex sm:space-x-4 space-x-1 items-center">
                {navItems.map((key) => {
                  return (
                    <p
                      key={key.id}
                      className={
                        "text-[#fff] hover:text-[#00fff7] [@media(min-width:1024px)]:px-3 px-[5px] py-2 text-[14px] font-[400] cursor-pointer transition-[0.3s]"
                      }
                    >
                      {key.name}
                    </p>
                  );
                })}
                <button className="text-[13.5px] font-[400] cursor-pointer text-[#fff] bg-transparent border-[2px] border-[#fff] rounded-[50px] transition-[0.3s] sm:ml-[16px] ml-[4px] px-[22px] py-[5px] h-fit">
                  Sign In
                </button>
              </div>
            </div>

            {/* ---------------Mobile Nav Button--------------- */}
            <div className={`flex md:hidden items-center`}>
              <button className="text-[13px] font-[400] cursor-pointer text-[#fff] bg-transparent border-[2px] border-[#fff] px-[22px] py-[5px] rounded-[50px] transition-[0.3s] desktop4:mr-[16px] mr-[10px] h-fit">
                Sign In
              </button>

              {nevMobileVButton ? (
                <div
                  className="flex items-center justify-center w-[22px] h-[22px]"
                  onClick={() => setNevMobileVButton(false)}
                >
                  <p
                    className={`[@media(min-width:420px)]:text-[36px] text-[33px] flex rotate-[45deg] text-white`}
                  >
                    +
                  </p>
                </div>
              ) : (
                <div
                  className="w-[22px] h-[22px] flex items-center justify-center relative"
                  onClick={() => setNevMobileVButton(true)}
                >
                  <HiOutlineMenuAlt3
                    className={`[@media(min-width:420px)]:text-[25px] text-[22px] ${
                      nevMobileVButton ? "hidden" : "flex"
                    } text-white`}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* ---------------Mobile Nav Item--------------- */}
      <div
        className={`absolute top-[4.5rem] right-0 w-[165px] h-[13.1rem] shadow-[0px_0px_3px_0px_#0003] rounded-b-[3px] z-0 flex md:hidden ${
          color
            ? "bg-[#3291eaf2]"
            : "bg-[#3291eaf2]"
        } ${
          nevMobileVButton
            ? `NavberMViewAnimationLeft`
            : `${nevMobileVButton? "": "NavberMViewAnimationRight"} `
        }`}
      >
        <div className="w-full h-full flex flex-col justify-start pl-[1.5rem] py-[1rem] text-white">
          {navItems.map((key) => {
            return (
              <p
                key={key.id}
                className={
                  "sm:px-3 px-[5px] py-2 text-[13px] font-medium cursor-pointer block text-[#fff]"
                }
                aria-current="page"
                onClick={() => setNevMobileVButton(false)}
              >
                {key.name}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navber;
