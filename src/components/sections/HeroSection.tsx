import React from "react";
import MainButton from "../common/MainButton";

function HeroSection() {
  return (
    <section className="flex justify-between md:flex-row gap-4 flex-col items-center">
      <div>
        <p className="font-[850] text-2xl md:leading-[5.0625rem] md:text-[4.375rem] text-darkBlue ">Empowering Leaders, Igniting Tomorrow's Brightest Ideas</p>
        <p className="text-[1.375rem] font-[500] ">
          Welcome to Leaders of Today (LOT)! Explore, collaborate, and innovate
          with us as we shape tomorrow's success stories together.
        </p>
        <div className="flex gap-[1.75rem] mt-[3rem] items-center">
          <MainButton text="Register" classes="shadow-none w-[10.125rem]" /> 
          <div className="flex gap-[1.56rem] items-center">
            <img src="/svgs/learn-more.svg" alt="view positions" />
            <p className="font-bold text-normal">View Positions</p>
          </div>
        </div>
      </div>
      <div><img src="/svgs/round-logo.svg" alt="round logo" className="md:w-[80rem]"/></div>
    </section>
  );
}

export default HeroSection;
