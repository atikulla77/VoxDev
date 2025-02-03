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
import Services from "../Components/Home/Services";

const Home = () => {
  return (
    <div className="w-full h-[100%] scrollbar-hide">
      <HomeBanner />
      <Branding />
      <AboutMe />
      <Skill />
      <ExperienceEducation />
      <Portfolio />
      <WhatIDo />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
