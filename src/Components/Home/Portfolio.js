import React from "react";
import partical_1 from "../../Image/Partical_4.png";
import tittlePartical from "../../Image/tittle_partical.png";
import { useState } from "react";

import item_1 from "../../Image/Portfolio/item_1.jpg";
import item_2 from "../../Image/Portfolio/item_2.jpg";
import item_3 from "../../Image/Portfolio/item_3.jpg";
import item_4 from "../../Image/Portfolio/item_4.jpg";
import item_5 from "../../Image/Portfolio/item_5.jpg";
import item_6 from "../../Image/Portfolio/item_6.jpg";

const Portfolio = () =>
{
  // OnClick to protfolio image
  const [ showPopUpImg, setshowPopUpImg ] = useState(false);
  const [ popUpImg, setpopUpImg ] = useState(item_1);

  const OnClickToShowAndSetPopUpImg = (x) =>
  {
    setpopUpImg(x);
    setshowPopUpImg(true);
  };

  const BrandCatagoryCard = [
    {
      id: 1_1,
      img: item_1,
      catagoryName: "Coffee Cup Design",
    },
    {
      id: 1_2,
      img: item_2,
      catagoryName: "T-Shirt Design",
    },
  ];
  const DesignCatagoryCard = [
    {
      id: 2_1,
      img: item_3,
      catagoryName: "3D Bag Mockup",
    },
    {
      id: 2_2,
      img: item_4,
      catagoryName: "Label Tag Mockup",
    },
  ];
  const PhotosCatagoryCard = [
    { id: 3_1, img: item_5, catagoryName: "Packaging Box Mockup" },
    { id: 3_2, img: item_6, catagoryName: "Modern Bag Design" },
  ];
  const AllCatagoryCard = [
    ...BrandCatagoryCard,
    ...DesignCatagoryCard,
    ...PhotosCatagoryCard,
  ];

  const [ Catagory, setCatagory ] = useState(AllCatagoryCard);
  // ********************************************************
  const [ onClickProjectLi1, setOnClickProjectLi1 ] = useState("true");
  const [ onClickProjectLi2, setOnClickProjectLi2 ] = useState("false");
  const [ onClickProjectLi3, setOnClickProjectLi3 ] = useState("false");
  const [ onClickProjectLi4, setOnClickProjectLi4 ] = useState("false");

  const HandleProjectLi1 = () =>
  {
    setOnClickProjectLi1("true");
    setOnClickProjectLi2("false");
    setOnClickProjectLi3("false");
    setOnClickProjectLi4("false");
    setCatagory(AllCatagoryCard);
  };
  const HandleProjectLi2 = () =>
  {
    setOnClickProjectLi1("false");
    setOnClickProjectLi2("true");
    setOnClickProjectLi3("false");
    setOnClickProjectLi4("false");
    setCatagory(BrandCatagoryCard);
  };
  const HandleProjectLi3 = () =>
  {
    setOnClickProjectLi1("false");
    setOnClickProjectLi2("false");
    setOnClickProjectLi3("true");
    setOnClickProjectLi4("false");
    setCatagory(DesignCatagoryCard);
  };
  const HandleProjectLi4 = () =>
  {
    setOnClickProjectLi1("false");
    setOnClickProjectLi2("false");
    setOnClickProjectLi3("false");
    setOnClickProjectLi4("true");
    setCatagory(PhotosCatagoryCard);
  };

  // Protfolio Nav Item
  const PortfolioNavItem = [
    {
      id: 1,
      tittle: "Brand",
      dynamicClassName: onClickProjectLi2,
      onClick: HandleProjectLi2,
    },
    {
      id: 2,
      tittle: "Design",
      dynamicClassName: onClickProjectLi3,
      onClick: HandleProjectLi3,
    },
    {
      id: 3,
      tittle: "Photos",
      dynamicClassName: onClickProjectLi4,
      onClick: HandleProjectLi4,
    },
  ];

  return (
    <div className="w-full h-full relative" id="Portfolio">
      <div className="absolute right-0 top-0 w-full flex justify-center overflow-hidden z-[0]">
        <div className="[@media(min-width:1536px)]:w-[1536px] w-full mx-auto flex justify-end">
          <img
            alt=""
            src={partical_1}
            className="[@media(min-width:660px)]:!w-[170px] [@media(min-width:460px)]:w-[140px] w-[120px]"
          />
        </div>
      </div>
      <div className="absolute right-[-165px] top-0 w-full [@media(min-width:1536px)]:flex hidden justify-center overflow-hidden z-[0]">
        <div className="[@media(min-width:1536px)]:w-[1536px] w-full mx-auto flex justify-end">
          <img src={partical_1} alt="" className="w-[170px] scale-x-[-1]" />
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
          <div className="[@media(min-width:600px)]:w-[13.5rem] [@media(min-width:460px)]:w-[10.5rem] w-[8.8rem] [@media(min-width:600px)]:!h-[20px] [@media(min-width:460px)]:h-[16px] h-[14px] text-[#130f49] text-center flex flex-col items-center justify-center z-10  mx-auto relative">
            <h1 className="[@media(min-width:600px)]:text-[28px] [@media(min-width:460px)]:text-[22px] text-[19px] font-[700] Poppins uppercase">
              Portfolio
            </h1>
            {/* Tittle Left Partical */}
            <div className="absolute left-[-5px] bottom-0" data-aos="fade-right">
              <img
                src={tittlePartical}
                alt=""
                className="[@media(min-width:500px)]:w-[19px] [@media(min-width:600px)]:w-[17px] w-[15px]"
              />
            </div>
            {/* Tittle Right Partical */}
            <div className="absolute right-[-5px] bottom-0" data-aos="fade-top">
              <img
                src={tittlePartical}
                alt=""
                className="[@media(min-width:500px)]:w-[19px] [@media(min-width:600px)]:w-[17px] w-[15px] scale-x-[-1]"
              />
            </div>
          </div>
          <p className="[@media(min-width:570px)]:text-[14px] [@media(min-width:460px)]:text-[13px] text-[10px] text-[#130f4acc] font-[600] w-full text-center [@media(min-width:460px)]:mb-[25px] mb-[15px] pt-[13px]">
            But pain in reproach is blinding, and desire is not,
            <br className="flex" /> but in the heart.
          </p>
          {/* Main - Content */}
          <div className="w-[100%] relative z-[1] flex flex-col justify-center items-center GeologicaFont">
            <div className="flex items-center justify-center text-center w-[100%]">
              <ul className="flex justify-center items-center font-[400]">
                <li
                  className={`[@media(min-width:460px)]:text-[15px] text-[12px] cursor-pointer ${ onClickProjectLi1 === "true"
                      ? "text-[#FFAC2A] drop-shadow-[0px_0px_1px_#ffad2a60]"
                      : "text-[#130f49] hover:text-[#FFAC2A] drop-shadow-[0px_0px_1px_#00000052] transition-[0.1s]"
                    }`}
                  onClick={HandleProjectLi1}
                >
                  All
                </li>

                {PortfolioNavItem.map((key) =>
                {
                  return (
                    <div className="flex items-center" key={key.id}>
                      <div className="text-[#FFAC2A] [@media(min-width:460px)]:text-[19px] text-[15px] [@media(min-width:460px)]:mx-[1rem] mx-[0.6rem] drop-shadow-[0px_0px_1px_#FFAC2A]">
                        |
                      </div>
                      <li
                        key={key.id}
                        className={`[@media(min-width:460px)]:text-[15px] text-[12px]  cursor-pointer ${ key.dynamicClassName === "true"
                            ? "text-[#FFAC2A] drop-shadow-[0px_0px_1px_#ffad2a60]"
                            : "text-[#130f49] hover:text-[#FFAC2A] drop-shadow-[0px_0px_1px_#00000052] transition-[0.1s]"
                          }`}
                        onClick={key.onClick}
                      >
                        {key.tittle}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-wrap justify-center items-center w-full [@media(min-width:460px)]:pt-[30px] pt-[15px] relative">
              {Catagory.map((catagory) => (
                <div key={catagory.id}>
                  <label
                    className={`[@media(min-width:450px)]:!w-[350px] [@media(min-width:400px)]:w-[300px] [@media(min-width:360px)]:w-[280px] w-[250px] h-[100%] overflow-hidden [@media(min-width:450px)]:mx-[15px] mx-0 my-[15px] relative flex justify-center items-center cursor-pointer shadow-[0px_0px_6px_0px_#00000024] rounded-[5px]`}
                    data-aos="fade-up-in"
                  >
                    <div
                      onClick={() =>
                      {
                        OnClickToShowAndSetPopUpImg(catagory.img);
                      }}
                      className={`w-[100%] h-[100%] overflow-hidden rounded-[5px] portfolioCard`}
                    >
                      <img
                        src={catagory.img}
                        className="w-[100%] cursor-pointer"
                        alt=""
                      />
                      <div className="absolute top-0 left-0 right-0 w-full h-full bg-transparent hover:bg-[#ffffffaa] flex-col justify-center items-center transition-[0.5s] text-black portfolioCardImgInfo">
                        <p className="text-[15px] font-[400]">
                          {catagory.catagoryName}
                        </p>
                        <p className="text-[13px] font-[400] text-[#FFAC2A] pt-[7px]">
                          More Info
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Pop Up Img */}
        <div
          className={`w-[100%] h-[100vh] fixed top-0 left-0 right-0 ${ showPopUpImg ? "flex" : "hidden"
            } justify-center items-center z-[60] bg-[#ffffffd2]`}
        >
          <img
            src={popUpImg}
            alt=""
            className="[@media(min-width:800px)]:!w-auto [@media(min-width:700px)]:w-[35rem] [@media(min-width:575px)]:w-[30rem] [@media(min-width:450px)]:w-[25rem] w-[19.5rem] [@media(min-width:800px)]:h-full h-auto mx-auto absolute right-0 left-0 py-[8px] z-[29]"
            data-aos="zoom-in"
          />

          <p
            onClick={() =>
            {
              setshowPopUpImg(false);
            }}
            className={`text-[#696969] [@media(min-width:555px)]:w-[35px] w-[25px] [@media(min-width:555px)]:h-[35px] h-[25px] flex [@media(min-width:555px)]:text-[45px] text-[35px] rotate-[45deg] text-center justify-center items-center absolute [@media(min-width:555px)]:top-[1rem] top-[10px] [@media(min-width:555px)]:right-[1rem] right-[13px] cursor-pointer z-[29] rounded-[50%]`}
          >
            +
          </p>

          <div
            onClick={() =>
            {
              setshowPopUpImg(false);
            }}
            className="w-full h-full relative z-[28]"
          ></div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
