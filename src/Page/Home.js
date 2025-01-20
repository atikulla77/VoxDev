import React from "react";
import HomeBanner from "../Components/Home/HomeBanner";
import Footer from "../Components/Footer/Footer";
import WhatIDo from "../Components/Home/WhatIDo";
import ExperienceEducation from "../Components/Home/ExperienceEducation";
import Branding from "../Components/Home/Branding";
import Portfolio from "../Components/Home/Portfolio";
import Testimonials from "../Components/Home/Testimonials";
import AboutMe from "../Components/Home/AboutMe";
import Skill from "../Components/Home/Skill";

const Home = () => {
  return (
    <div className="w-full h-[100%]">
      <HomeBanner />
      <Branding />
      <AboutMe />
      <Skill />
      <ExperienceEducation />
      <Portfolio />
      <WhatIDo />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
