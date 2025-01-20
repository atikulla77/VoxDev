import React from "react";
import tittlePartical from "../../Image/tittle_partical.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDotFill } from "react-icons/go";
import user1 from "../../Image/Testimonial/img1.jpg";
import user2 from "../../Image/Testimonial/img2.jpg";
import user3 from "../../Image/Testimonial/img3.jpg";
import user4 from "../../Image/Testimonial/img4.jpg";
import partical_1 from "../../Image/Partical_6.png";

const Testimonials = () => {
  const TestimonialClint = [
    {
      id: 1,
      name: "Julia Sakura",
      description:
        "For if we come to the smallest extent, who is our exercise, any labor except as some of its benefits. But I am going to work hard.",
      position: "Envato Customer",
      image: user1,
    },
    {
      id: 2,
      name: "John Santana",
      description:
        "For if we come to the smallest extent, who is our exercise, any labor except as some of its benefits. But I am going to work hard.",
      position: "Envato Customer",
      image: user2,
    },
    {
      id: 3,
      name: "Maria Wilson",
      description:
        "For if we come to the smallest extent, who is our exercise, any labor except as some of its benefits. But I am going to work hard.",
      position: "Envato Customer",
      image: user3,
    },
    {
      id: 4,
      name: "Emma Smith",
      description:
        "For if we come to the smallest extent, who is our exercise, any labor except as some of its benefits. But I am going to work hard.",
      position: "Envato Customer",
      image: user4,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ bottom: "-25px" }}>
        <ul className="m-0 " id="bannerDotId">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="bannerDotliId w-[17px] bottom-0">
        <GoDotFill className="cursor-pointer [@media(min-width:640px)]:!text-[17px] [@media(min-width:440px)]:text-[16px] text-[14px]" />
      </div>
    ),
  };

  return (
    <div className="w-full h-full relative" id="Testimonials">
      <div className="absolute right-0 top-0 w-full flex justify-center overflow-hidden z-[0]">
        <div className="[@media(min-width:1536px)]:w-[1536px] w-full mx-auto flex justify-end">
          <img src={partical_1} className="w-[120px]" />
        </div>
      </div>
      <div className="absolute right-[-120px] top-0 w-full [@media(min-width:1536px)]:flex hidden justify-center overflow-hidden z-[0]">
        <div className="[@media(min-width:1536px)]:w-[1536px] w-full mx-auto flex justify-end">
          <img src={partical_1} className="w-[120px] scale-x-[-1]" />
        </div>
      </div>
      <main
        className={`w-full h-full relative border-b-[1px] border-b-[#00000038] border-dashed [@media(min-width:1290px)]:!px-[3rem] [@media(min-width:550px)]:px-[2rem] [@media(min-width:450px)]:px-[1.5rem] px-[1rem]`}
      >
        <div className="[@media(min-width:1290px)]:w-[1290px] w-[100%] mx-auto py-[5rem] relative border-x-[1px] border-dashed border-x-[#00000038] [@media(min-width:1290px)]:!px-[3rem] [@media(min-width:550px)]:px-[2rem] [@media(min-width:450px)]:px-[1.5rem] px-[1rem]">
          {/* Tittle */}
          <div className="[@media(min-width:600px)]:w-[16rem] [@media(min-width:460px)]:w-[13rem] w-[11.2rem] [@media(min-width:600px)]:!h-[20px] [@media(min-width:460px)]:h-[16px] h-[14px] text-[#130f49] text-center flex flex-col items-center justify-center z-10  mx-auto relative">
            <h1 className="[@media(min-width:600px)]:text-[28px] [@media(min-width:460px)]:text-[22px] text-[19px] font-[700] Poppins uppercase">
              Testimonials
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
          <p className="[@media(min-width:570px)]:text-[14px] [@media(min-width:460px)]:text-[13px] text-[11px] text-[#5b5b5b] font-[600] w-full text-center [@media(min-width:460px)]:mb-[25px] mb-[15px] pt-[13px]">
            But pain in reproach is blinding, and desire is not,
            <br className="flex" /> but in the heart.
          </p>
          {/* Main - Content */}
          <div className="w-[100%] [@media(min-width:550px)]:!h-[20rem] [@media(min-width:400px)]:h-[17rem] h-[15.5rem] relative z-[1] flex items-center GeologicaFont">
            <Slider {...settings} className="w-full h-full">
              {TestimonialClint.map((key) => {
                return (
                  <div
                    key={key.id}
                    className="[@media(min-width:640px)]:px-[10px] px-[3px] w-[100%] my-[2.5rem]"
                  >
                    <div className="h-full [@media(min-width:850px)]:w-fit [@media(min-width:480px)]:w-[370px] w-[100%] bg-[#ffffff40] [@media(min-width:480px)]:px-6 px-[15px] [@media(min-width:550px)]:pt-[3.5rem] pt-[2.5rem] [@media(min-width:550px)]:pb-[2.5rem] pb-[2rem] rounded-[0.5rem] shadow-[0px_0px_3px_0px_#00000040] text-center relative [@media(min-width:850px)]:mx-0 mx-auto">
                      <div className="w-full absolute [@media(min-width:550px)]:bottom-[-20px] bottom-[-15px] left-0 flex justify-center z-[-1]">
                        <div className="w-full [@media(min-width:550px)]:h-[20px] h-[15px] flex justify-center items-end relative overflow-hidden">
                          <div className="w-[80%] h-[30px] mb-[2px] bg-[#ffffff40] rounded-b-[0.5rem] shadow-[0px_0px_3px_0px_#00000040]"></div>
                        </div>
                      </div>
                      <div className="absolute [@media(min-width:550px)]:top-[-32.5px] [@media(min-width:400px)]:top-[-22.5px] top-[-25px] left-0 w-full flex justify-center">
                        <div className="[@media(min-width:550px)]:!w-[65px] [@media(min-width:400px)]:w-[55px] w-[50px] [@media(min-width:550px)]:!h-[65px] [@media(min-width:400px)]:h-[55px] h-[50px] rounded-[50%] bg-[#fff] shadow-[0px_0px_3px_0px_#00000040] flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="flex [@media(min-width:400px)]:w-[1.5rem] w-[1rem] text-[#000000b4] mx-auto"
                            viewBox="0 0 975.036 975.036"
                          >
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                          </svg>
                        </div>
                      </div>

                      <p className="[@media(min-width:550px)]:!text-[14px] [@media(min-width:400px)]:text-[13px] [@media(min-width:360px)]:text-[11px] text-[10px] font-[400] text-[#505050] leading-[1.55]">
                        {key.description}
                      </p>
                      <div className="flex items-center justify-center [@media(min-width:400px)]:pt-[1.5rem] pt-[1rem]">
                        <img
                          src={key.image}
                          className="[@media(min-width:550px)]:!w-[45px] [@media(min-width:360px)]:w-[36px] w-[30px] [@media(min-width:550px)]:!h-[45px] [@media(min-width:360px)]:h-[36px] h-[30px] rounded-full object-cover object-center"
                        />
                        <span className="flex flex-col [@media(min-width:360px)]:pl-[13px] pl-[10px] leading-[17px] text-left">
                          <span className="font-medium [@media(min-width:550px)]:!text-[15px] [@media(min-width:400px)]:text-[14px] [@media(min-width:360px)]:text-[12px] text-[11px] text-[#1c1c1c]">
                            {key.name}
                          </span>
                          <span className="[@media(min-width:550px)]:!text-[12px] [@media(min-width:400px)]:text-[11px] [@media(min-width:360px)]:text-[10px] text-[9px] font-[400] text-[#505050] [@media(min-width:400px)]:!pt-[3px] [@media(min-width:360px)]:pt-[1px] pt-0">
                            {key.position}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </main>
    </div>
  );
};
function SampleNextArrow() {
  return <div className="hidden"></div>;
}
function SamplePrevArrow() {
  return <div className="hidden"></div>;
}

export default Testimonials;
