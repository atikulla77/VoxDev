import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { HiPhoto } from "react-icons/hi2";
import { MdMotionPhotosOn } from "react-icons/md";
import { FaWordpress } from "react-icons/fa";
import { PiCompassRoseDuotone } from "react-icons/pi";
import { IoRocket } from "react-icons/io5";

import image from "../image/about/info-img.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { GoDotFill } from "react-icons/go";

import user1 from "../image/Testimonial/img1.jpg";
import user2 from "../image/Testimonial/img2.jpg";
import user3 from "../image/Testimonial/img3.jpg";
import user4 from "../image/Testimonial/img4.jpg";

const About = (props) => {
  const [text] = useTypewriter({
    words: ["Developer", "Coder", "Player"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 40,
    delaySpeed: 1500,
  });
  const MyServicesData = [
    {
      id: 1,
      icon: <FaHtml5 />,
      tittle: "Design Trends",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 2,
      icon: <HiPhoto />,
      tittle: "PSD Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 3,
      icon: <MdMotionPhotosOn />,
      tittle: "Customer Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 4,
      icon: <FaWordpress />,
      tittle: "Web Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 5,
      icon: <PiCompassRoseDuotone />,
      tittle: "Fully Responsive",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 6,
      icon: <IoRocket />,
      tittle: "Branding",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];
  const TestimonialClint = [
    {
      id: 1,
      name: "Julia Sakura",
      description:
        "Russell did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.",
      position: "Envato Customer",
      image: user1,
    },
    {
      id: 2,
      name: "John Santana",
      description:
        "Russell did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.",
      position: "Envato Customer",
      image: user2,
    },
    {
      id: 3,
      name: "Maria Wilson",
      description:
        "Russell did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.",
      position: "Envato Customer",
      image: user3,
    },
    {
      id: 4,
      name: "Emma Smith",
      description:
        "Russell did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.",
      position: "Envato Customer",
      image: user4,
    },
  ];

  return (
    <main className={`w-full h-full relative GeologicaFont`}>
      <p
        onClick={() => {
          props.hideAboutpage();
        }}
        className={`w-[25px] h-[25px]  ${
          props.goHomePageButton ? "flex" : "hidden"
        } [@media(min-width:555px)]:text-[35px] text-[30px] rotate-[45deg] text-center justify-center items-center absolute [@media(min-width:555px)]:top-[1rem] top-[10px] [@media(min-width:555px)]:right-[1rem] right-[13px] cursor-pointer z-20 rounded-[50%]`}
      >
        +
      </p>
      <div className="w-full pt-[4.5rem] [@media(min-width:420px)]:pb-[3rem] pb-[2rem]">
        <div className="w-full text-center text-white relative z-10 pb-[40px]">
          <p className="text-[#06f3f7] [@media(min-width:750px)]:text-[15px] [@media(min-width:420px)]:text-[14px] text-[13px] pb-[5px] mx-auto">
            Get to know me
          </p>
          <h1 className="[@media(min-width:750px)]:text-[40px] [@media(min-width:420px)]:text-[30px] text-[25px] font-[700]  Poppins">
            About Me
          </h1>
        </div>
        <div
          className={`w-[98%] h-[100%] flex justify-center items-center mx-auto`}
        >
          <div className=" xl:w-[1230px] w-[96%] relative z-[1] flex flex-col justify-center items-center KarlaFont">
            <div className="flex desktop3:flex-row flex-col w-full desktop3:h-[507px] justify-around text-black z-10">
              <div className="[@media(min-width:450px)]:w-[420px] [@media(min-width:400px)]:w-[370px] [@media(min-width:350px)]:w-[320px] w-[290px] [@media(min-width:450px)]:h-[507px] [@media(min-width:400px)]:h-[457px] [@media(min-width:350px)]:h-[407px] h-[377px] overflow-hidden desktop3:mx-0 mx-auto relative ">
                <div className="h-full max-h-full flex justify-center items-center relative overflow-hidden">
                  <img
                    src={image}
                    className={`w-full h-[100%] object-cover mx-auto`}
                    alt=""
                  />
                </div>
              </div>
              <div className="desktop3:w-[55%] w-full h-full grid items-center text-white text-left desktop3:!mt-[0px] [@media(min-width:400px)]:mt-[3.5rem] mt-[2rem] desktop3:!px-0 [@media(min-width:560px)]:px-[2rem] [@media(min-width:400px)]:px-[1rem] px-[0.3rem] relative desktop3:ml-[2rem] ml-0">
                <div className="w-full h-auto">
                  <div className="w-full pb-[10px]">
                    <p className="[@media(min-width:560px)]:text-[15px] [@media(min-width:400px)]:text-[14px] text-[13px] font-[500] text-[#9c9c9c] uppercase">
                      - Nice to meet you!
                    </p>
                    <h1 className="[@media(min-width:560px)]:text-[30px] [@media(min-width:400px)]:text-[28px] text-[25px] font-[700] tracking-[1px] InterFont">
                      Russell Davis
                    </h1>

                    <h1 className="[@media(min-width:560px)]:text-[17px] [@media(min-width:400px)]:text-[16px] text-[15px] font-[600] mx-auto text-[#afafaf] pt-[3px]">
                      Web designer &
                      <span className="pl-[5px] text-[#ffffffcf]">{text}</span>
                      <span className="text-[#ffffffcf]">
                        <Cursor cursorStyle="|" />
                      </span>
                    </h1>
                  </div>
                  <div className="[@media(min-width:560px)]:text-[16px] [@media(min-width:400px)]:text-[15px] text-[14px] font-[400] text-[#ffffffab] [@media(min-width:400px)]:leading-[30px] leading-[25px] z-10 relative border-b-[2px] border-b-[#ffffff14] [@media(min-width:400px)]:pb-[25px] pb-[20px]">
                    <p>
                      Hello there! My name is{" "}
                      <span className="text-[#fff]">Russell Davis</span>. I am a
                      web designer & developer, and I'm very passionate and
                      dedicated to my work.
                    </p>
                    <p className="[@media(min-width:560px)]:mt-[20px] [@media(min-width:400px)]:mt-[15px] mt-[11px]">
                      With 20 years experience as a professional a web
                      developer, I have acquired the skills and knowledge
                      necessary to make your project a success. I enjoy every
                      step of the design process, from discussion and
                      collaboration.
                    </p>
                  </div>
                  <div className="w-full flex [@media(min-width:500px)]:flex-row flex-col [@media(min-width:400px)]:pt-[25px] pt-[20px]">
                    <div className="flex flex-col [@media(min-width:1000px)]:mr-[5rem] desktop3:mr-[1.7rem] mr-0">
                      <div className="flex items-center [@media(min-width:560px)]:text-[16px] [@media(min-width:400px)]:text-[15px] text-[14px] ">
                        <p className="font-[600]">Name:</p>
                        <p className="font-[400] text-[#ffffffab] pl-[5px]">
                          Russell Davis
                        </p>
                      </div>
                      <div className="flex items-center [@media(min-width:560px)]:text-[16px] [@media(min-width:400px)]:text-[15px] text-[14px] [@media(min-width:400px)]:pt-[20px] pt-[15px]">
                        <p className="font-[600]">Age:</p>
                        <p className="font-[400] text-[#ffffffab] pl-[5px]">
                          20
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col [@media(min-width:500px)]:pt-0 pt-[20px] desktop3:!ml-0 [@media(min-width:500px)]:ml-[5rem] ml-[0px]">
                      <div className="flex items-center [@media(min-width:560px)]:text-[16px] [@media(min-width:400px)]:text-[15px] text-[14px]">
                        <p className="font-[600]">Email:</p>
                        <p className="font-[400] text-[#06f3f7] pl-[5px]">
                          kodify345@gmail.com
                        </p>
                      </div>
                      <div className="flex items-center [@media(min-width:560px)]:text-[16px] [@media(min-width:400px)]:text-[15px] text-[14px] [@media(min-width:400px)]:pt-[20px] pt-[15px]">
                        <p className="font-[600]">From:</p>
                        <p className="font-[400] text-[#ffffffab] pl-[5px]">
                          Liverpool, UK
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full pt-[25px] flex [@media(min-width:415px)]:flex-row flex-col justify-start items-center">
                    <div className="[@media(min-width:415px)]:w-max w-full">
                      <button className="[@media(min-width:415px)]:w-max w-[150px] [@media(min-width:400px)]:text-[15px] text-[14px] font-[600] [@media(min-width:560px)]:px-[28px] px-[25px] [@media(min-width:560px)]:py-[8px] py-[7px] rounded-[50px] hover:!bg-transparent bg-[#06f3f7] text-[#101010] hover:text-[#fff] border-[2px] border-[#06f3f7] transition-[0.4s]">
                        Download CV
                      </button>
                    </div>

                    <div className="flex items-center ml-[1.5rem] [@media(min-width:415px)]:mt-0 mt-[20px] [@media(min-width:415px)]:w-max w-full">
                      <div className="w-[60px] h-[2px] bg-[#ffffff40] mr-[20px]"></div>
                      <a href="" className="mr-[1rem]">
                        <FaTwitter className="[@media(min-width:435px)]:text-[18px] text-[17px] text-[#cecece] hover:text-[#06f3f7] transition-[0.3s]" />
                      </a>
                      <a href="" className="mr-[1rem]">
                        <FaFacebook className="[@media(min-width:435px)]:text-[18px] text-[17px] text-[#cecece] hover:text-[#06f3f7] transition-[0.3s]" />
                      </a>
                      <a href="" className="mr-[1rem]">
                        <FaInstagram className="[@media(min-width:435px)]:text-[18px] text-[17px] text-[#cecece] hover:text-[#06f3f7] transition-[0.3s]" />
                      </a>
                      <a href="" className="">
                        <FaLinkedin className="[@media(min-width:435px)]:text-[18px] text-[17px] text-[#cecece] hover:text-[#06f3f7] transition-[0.3s]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Services */}
      <MyServices MyServicesData={MyServicesData} />

      <Testimonial TestimonialClint={TestimonialClint} />
    </main>
  );
};

const MyServices = (props) => {
  return (
    <div className="w-full desktop3:pt-[1rem] pt-0 [@media(min-width:420px)]:pb-[2rem] pb-[1rem]">
      <main className={`w-[100%] flex justify-center items-center`}>
        <div className="xl:w-[1230px] w-[92%] relative z-[1] flex flex-col justify-center items-center py-[2.5rem]">
          <div className="w-full text-center text-white relative z-10 pb-[30px]">
            <h1 className="[@media(min-width:750px)]:text-[40px] [@media(min-width:420px)]:text-[30px] text-[25px] font-[700] [@media(min-width:750px)]:pb-[10px] pb-[5px] Poppins">
              My Services
            </h1>
            <p className="text-[#06f3f7] [@media(min-width:750px)]:text-[15px] [@media(min-width:420px)]:text-[14px] text-[13px] mx-auto">
              Services i offer to my clients
            </p>
          </div>

          <div className="w-full flex flex-wrap justify-center Poppins">
            {props.MyServicesData.map((key) => {
              return (
                <div
                  key={key.id}
                  className="[@media(min-width:430px)]:w-[350px] [@media(min-width:350px)]:w-[320px] w-[290px] bg-[#141414] [@media(min-width:430px)]:px-[30px] [@media(min-width:350px)]:px-[20px] px-[0px] [@media(min-width:430px)]:pt-[35px] pt-[25px] [@media(min-width:430px)]:pb-[33px] pb-[23px] text-white shadow-[0px_0px_3px_0px_#0000008c] border-b-[2px] border-b-[#141414] hover:border-b-[#06f3f7] [@media(min-width:430px)]:mt-[20px] mt-[10px] [@media(min-width:430px)]:mb-[20px] mb-[10px] [@media(min-width:430px)]:mx-[20px] [@media(min-width:350px)]:mx-[10px] mx-0 transition-[0.3s] [@media(min-width:430px)]:text-left text-center"
                >
                  <div className="[@media(min-width:430px)]:text-[55px] text-[50px] w-full flex text-[#06f3f7] mb-[15px] [@media(min-width:430px)]:justify-start justify-center">
                    {key.icon}
                  </div>
                  <h1 className="text-[20px] font-[500] tracking-[-.5px] text-[#f3f3f3] pb-[10px] ">
                    {key.tittle}
                  </h1>
                  <p
                    className={`[@media(min-width:430px)]:text-[14px] text-[13px] font-[400] [@media(min-width:430px)]:leading-[1.95] leading-[1.60] text-[#9f9f9f]`}
                  >
                    {key.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

const Testimonial = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ bottom: "-40px" }}>
        <ul className="m-0 " id="bannerDotId">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="bannerDotliId w-[17px] bottom-0">
        <GoDotFill className="cursor-pointer [@media(min-width:640px)]:text-[17px] text-[16px]" />
      </div>
    ),
  };

  return (
    <div className="text-[white] body-font bg-[#101010] GeologicaFont pt-[1rem] pb-[2rem]">
      <div className="xl:w-[1230px] w-[100%] [@media(min-width:460px)]:px-5 px-[5px] mx-auto pb-[50px] relative ">
        <p className="text-[#03BFFF] [@media(min-width:530px)]:text-[15px] [@media(min-width:460px)]:text-[13px] text-[12px] mx-auto  text-center relative z-10">
          Testimonial
        </p>
        <h1 className="[@media(min-width:640px)]:text-3xl [@media(min-width:460px)]:text-[26px] text-[20px] [@media(min-width:640px)]:leading-[36px] [@media(min-width:460px)]:leading-[32px] leading-[25px] font-semibold title-font [@media(min-width:460px)]:mb-[19px] [@media(min-width:640px)]:mb-[1.5rem] mb-[0px] text-center relative z-10">
          What People Say
          <br />
          About Me
        </h1>
        <div className=" [@media(min-width:846px)]:py-[2px] py-[10px] mx-auto flex items-center w-[100%] relative z-10 Poppins">
          <Slider {...settings} className="w-full h-full">
            {props.TestimonialClint.map((key) => {
              return (
                <div
                  key={key.id}
                  className="[@media(min-width:640px)]:px-[10px] px-0 w-[100%] my-[10px]"
                >
                  <div className="h-full [@media(min-width:460px)]:bg-[#141414] bg-none [@media(min-width:640px)]:px-8 [@media(min-width:460px)]:px-6 px-[5px] [@media(min-width:640px)]:py-8 py-4 rounded [@media(min-width:460px)]:shadow-[0px_0px_3px_0px_#0000008c] shadow-none [@media(min-width:460px)]:text-left text-center">
                    <div className="flex [@media(min-width:460px)]:flex-row flex-col [@media(min-width:460px)]:justify-between justify-center items-center [@media(min-width:640px)]:mb-6 mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="[@media(min-width:460px)]:hidden flex [@media(min-width:460px)]:w-[40px] w-[2rem] text-[#fff] [@media(min-width:460px)]:mx-0 mx-auto"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <div className="[@media(min-width:460px)]:flex hidden items-center ">
                        <img
                          alt="testimonial"
                          src={key.image}
                          className="[@media(min-width:640px)]:w-12 w-[35px] [@media(min-width:640px)]:h-12 h-[35px] rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col [@media(min-width:640px)]:pl-4 [@media(min-width:460px)]:pl-[13px] pl-[10px] [@media(min-width:640px)]:leading-[23px] leading-[17px] text-left">
                          <span className="[@media(min-width:460px)]:font-medium font-normal [@media(min-width:640px)]:text-[15px] text-[14px] text-[#efefef]">
                            {key.name}
                          </span>
                          <span className="[@media(min-width:640px)]:text-[15px] [@media(min-width:460px)]:text-[12px] text-[11px]  font-[400] [@media(min-width:460px)]:ml-0 ml-[1.5px] text-[#9f9f9f] pt-[3px]">
                            {key.position}
                          </span>
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="[@media(min-width:460px)]:flex hidden [@media(min-width:460px)]:w-[40px] w-[2rem] text-[#fff] [@media(min-width:460px)]:mx-0 mx-auto"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                    </div>

                    <p className="[@media(min-width:640px)]:text-[15px] text-[13px] font-[400] text-[#9f9f9f] [@media(min-width:460px)]:leading-[1.95] leading-[1.55]">
                      {key.description}
                    </p>
                    <div className="[@media(min-width:460px)]:hidden flex justify-center w-full pt-[1.5rem]" >
                    <div className="flex items-center ">
                        <img
                          alt="testimonial"
                          src={key.image}
                          className="[@media(min-width:640px)]:w-12 w-[35px] [@media(min-width:640px)]:h-12 h-[35px] rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col [@media(min-width:640px)]:pl-4 [@media(min-width:460px)]:pl-[13px] pl-[10px] [@media(min-width:640px)]:leading-[23px] leading-[17px] text-left">
                          <span className="[@media(min-width:460px)]:font-medium font-normal [@media(min-width:640px)]:text-[15px] text-[14px] text-[#efefef]">
                            {key.name}
                          </span>
                          <span className="[@media(min-width:640px)]:text-[15px] [@media(min-width:460px)]:text-[12px] text-[11px]  font-[400] [@media(min-width:460px)]:ml-0 ml-[1.5px] text-[#9f9f9f] pt-[3px]">
                            {key.position}
                          </span>
                        </span>
                      </div>
                    </div>
                    
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

function SampleNextArrow() {
  return <div className="hidden"></div>;
}
function SamplePrevArrow() {
  return <div className="hidden"></div>;
}

export default About;
