import React from "react";
function EventSection() {
  return (
    <section>
      <div className="w-[100rem] h-[10rem] via-customLightGray"></div>
      <div className="flex bg-gray-500">
        <div>
          <p className='text-white'>Squid Game</p>
          <p className="w-[20rem] text-white">
            A Netflix series 'Squid Game' based event to be held on our LPU
            campus.
          </p>
        </div>
        <div className="w-[30rem]">
          <img src="/svgs/squid-game.svg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default EventSection;
