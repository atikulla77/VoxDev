import React from "react";
import HomeBanner from "../Components/Home/HomeBanner";
import Footer from "../Components/Footer/Footer";
import WhatIDo from "../Components/Home/WhatIDo";
import ExperienceEducation from "../Components/Home/ExperienceEducation";
import Branding from "../Components/Home/Branding";
import Portfolio from "../Components/Home/Portfolio";

const Home = () => {
  return (
    <div className="w-full h-[100%]">
      <HomeBanner />
      <Branding />
      <ExperienceEducation />
      <Portfolio />
      <WhatIDo />
      <Footer />
    </div>
  );
};

export default Home;
