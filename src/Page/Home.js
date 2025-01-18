import React from "react";
import HomeBanner from "../Components/Home/HomeBanner";
import Footer from "../Components/Footer/Footer";
import WhatIDo from "../Components/Home/WhatIDo";

const Home = () => {
  return (
    <div className="w-full h-[100%]">
      <HomeBanner />
      <WhatIDo />
      <Footer />
    </div>
  );
};

export default Home;
