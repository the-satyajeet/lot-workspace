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
        <div>
          <MainButton text="Register" classes="shadow-none" /> 
          <div className="flex gap-4">
            <img src="/svgs/learn-more.svg" alt="view positions" />
            <p className="font-bold ">View Positions</p>
          </div>
        </div>
      </div>
      <div><img src="/svgs/round-logo.svg" alt="round logo" /></div>
    </section>
  );
}

export default HeroSection;
