import React from "react";
import footer1 from "../../Image/Partical_6.png";
import footerLogo1 from "../../Image/logo_1.jpg";
import footerLogo2 from "../../Image/web_logo_2.png";

function Footer() {
  const FooterData = [
    {
      id: 1,
      tittle: "Tax Services",
      nestedTittle: [
        { _id: 1, nTittle: "Deluxe Service" },
        { _id: 2, nTittle: "Extension Tax Filing" },
        { _id: 3, nTittle: "Self-Employed Taxed" },
        { _id: 4, nTittle: "Military Taxes" },
        { _id: 5, nTittle: "State Taxes" },
        { _id: 6, nTittle: "1099 Taxes" },
      ],
    },
    {
      id: 2,
      tittle: "Tools & Help",
      nestedTittle: [
        { _id: 1, nTittle: "Account Recovery" },
        { _id: 2, nTittle: "Customer Support" },
        { _id: 3, nTittle: "Calculate Your Taxes" },
        { _id: 4, nTittle: "Deadlines" },
        { _id: 5, nTittle: "Help & Tips" },
      ],
    },
    {
      id: 3,
      tittle: "Current Year",
      nestedTittle: [
        { _id: 1, nTittle: "2023 Tax Software" },
        { _id: 2, nTittle: "Amended Returns" },
        { _id: 3, nTittle: "Supported Federal Forms" },
        { _id: 4, nTittle: "Supported State Forms" },
      ],
    },
    {
      id: 4,
      tittle: "About Us",
      nestedTittle: [
        { _id: 1, nTittle: "Contact Us" },
        { _id: 2, nTittle: "Security" },
        { _id: 3, nTittle: "Customer Reviews" },
        { _id: 4, nTittle: "Affiliates" },
        { _id: 5, nTittle: "Sitemap" },
      ],
    },
  ];

  return (
    <div className="w-full h-full relative bg-white" id="footer">
      <div className={`w-full h-full flex absolute bottom-0 left-0 z-0`}>
        <img
          src={footer1}
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      <footer className="text-black body-font w-full pt-[5rem]">
        {/* Footer Main Content */}
        <div className="w-full xl:!px-0 [@media(min-width:550px)]:px-[2rem] [@media(min-width:450px)]:px-[1.5rem] px-[1rem] border-t-[1px] border-t-[#00000038] border-dashed z-10 relative">
          {/* Border + left right */}
          <div className="relative xl:w-[1230px] w-[100%] mx-auto">
            {/* Side Border Left */}
            <div className="absolute left-[-1px] top-[-7px] w-[2px] h-[14px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
            <div className="absolute left-[-7px] top-[-1px] w-[14px] h-[2px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
            {/* Side Border Right */}
            <div className="absolute right-[-1px] top-[-7px] w-[2px] h-[14px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
            <div className="absolute right-[-7px] top-[-1px] w-[14px] h-[2px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
          </div>
          {/* ------content------ */}
          <div className="xl:w-[1230px] w-[100%] md:pt-[5rem] pt-[3.5rem] mx-auto z-10 relative border-x-[1px] border-dashed border-x-[#00000038]">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <div className="lg:w-[142px] md:w-[155px] w-full mx-auto flex md:justify-start justify-center items-center">
              <img
                src={footerLogo1}
                className="sm:w-[30px] w-[25px] sm:h-[30px] h-[25px] rounded-[3px]"
              />
              <img src={footerLogo2} className="sm:w-[80px] w-[75px] ml-[10px]" />
              </div>
            </div>
          </div>
          <div className="xl:w-[1230px] w-[100%] px-5 md:pt-[2rem] pt-0 md:pb-[5rem] pb-[1rem] mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col z-10 relative border-x-[1px] border-dashed border-x-[#00000038]">
            <div className="flex-grow flex flex-wrap md:mt-0 mt-[30px] md:text-left text-center z-10 mx-auto">
              {FooterData.map((key) => {
                return (
                  <div className="lg:w-1/4 md:w-1/2 w-full px-4" key={key.id}>
                    <div className="w-[175px] mx-auto">
                      <h2 className="text-[14px] font-semibold text-black tracking-[1px] mb-3 GeologicaFont">
                        {key.tittle}
                      </h2>
                      <nav className="list-none lg:mb-0 mb-10 text-[#000000de] text-[13px] GeologicaFont">
                        {key.nestedTittle.map((key2) => {
                          return (
                            <li className=" py-[5px]" key={key2._id}>
                              <a className="cursor-pointer">{key2.nTittle}</a>
                            </li>
                          );
                        })}
                      </nav>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Footer Bottom Content */}
        <div className="w-full border-t-[1px] border-t-[#00000038] border-dashed xl:!px-0 [@media(min-width:550px)]:px-[2rem] [@media(min-width:450px)]:px-[1.5rem] px-[1rem] z-10 relative">
          {/* Border + left right */}
          <div className="relative xl:w-[1230px] w-[100%] mx-auto">
            {/* Side Border Left */}
            <div className="absolute left-[-1px] top-[-7px] w-[2px] h-[14px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
            <div className="absolute left-[-7px] top-[-1px] w-[14px] h-[2px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
            {/* Side Border Right */}
            <div className="absolute right-[-1px] top-[-7px] w-[2px] h-[14px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
            <div className="absolute right-[-7px] top-[-1px] w-[14px] h-[2px] bg-[#0000003f] rounded-[25px] z-[11]"></div>
          </div>
          {/* ------content------ */}
          <div className="w-full">
            <div className="xl:w-[1230px] w-[100%] border-x-[1px] border-x-[#00000038] border-dashed py-[18px] flex flex-wrap flex-col sm:flex-row items-center  mx-auto [@media(min-width:450px)]:px-[3rem] px-[1.5rem] text-[#000000c2] GeologicaFont relative">
              <span className="flex flex-wrap sm:hidden sm:ml-auto justify-center sm:justify-start z-10 pb-[10px] text-[13px]">
                <a href="" className="cursor-pointer">
                  Term of use
                </a>
                <a href="" className="ml-[10px] cursor-pointer">
                  Privacy policy
                </a>
                <a href="" className="ml-[10px] cursor-pointer">
                  Security
                </a>
              </span>

              <p className="text-[13px] text-center sm:text-left">
                © Kodify 2024 | All Rights Reserved
              </p>
              <span className="sm:flex flex-wrap hidden sm:ml-auto justify-center sm:justify-start z-10 text-[13px]">
                <a href="" className="cursor-pointer">
                  Term of use
                </a>
                <a href="" className="ml-[45px] cursor-pointer">
                  Privacy policy
                </a>
                <a href="" className="ml-[45px] cursor-pointer">
                  Security
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
