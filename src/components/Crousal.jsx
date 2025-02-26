
import React from "react";
import ParticlesBackground from './particeBackground/ParticlesAnimation';

const CarouselPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ParticlesBackground />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col  justify-center px-[5%]">
        <button className="text-white font-semibold w-fit mt-20 p-2 bg-gradient-to-b from-[#D4A5B4] to-[#841B1E] rounded-[23px] px-5"
        >WELCOME TO Intileo Technologies
        </button>
        <h1 className="text-6xl font-bold mt-16">Convert Your Business into a Brand with the Best IT Services in India</h1>
        <p>We are 165+ professional software engineers with more than 10 years of experience in delivering superior products.</p>
      </div>
    </div>
  );
};

export default CarouselPage;
