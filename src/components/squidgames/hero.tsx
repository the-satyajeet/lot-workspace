import React from "react";

const Hero = () => {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-4 items-center bg-black">
      <div>
        <div className="flex flex-col gap-4 md:gap-8 md:mt-2 md:m-8">
          <img
            src="/images/slide-2.png"
            alt="Squid Game"
            className="md:w-[95rem] h-[37rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
