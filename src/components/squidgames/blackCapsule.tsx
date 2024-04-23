import React from 'react'

const BlackCapsule = () => {
  return (
    <section>
      <div className="w-[279.10px] h-[51.94px] px-4 py-3 rounded-[10px] border border-zinc-800 justify-start items-center gap-4 inline-flex">
      <div className="flex flex-col">
      <p className=" text-white pt-1 flex items-center justify-center font-bold text-[6.96px] w-[26px] h-[15px] bg-[#252525] rounded-t-md">
        APR
      </p>
      <p className=" flex justify-center items-center w-[26px] h-[20px] border-2 border-[#252525] rounded-b-md">
        {/* <img src="/images/date-19.svg" alt="logo" /> */}
        <p className="text-white font-mono">27</p>
      </p>
    </div>
    <div className="flex-col justify-start items-start gap-2 inline-flex">
        <div><span className="text-white text-base font-bold font-['Vinila Test']">Saturday,</span><span className="text-white text-base font-normal font-['Vinila Test']"> </span><span className="text-white text-base font-light font-['Vinila Test']">April 27</span></div>
        <div className="text-white text-xs font-light font-['Vinila Test']">10:00 AM - 7:00 PM</div>
    </div>
</div>
    </section>
  )
}

export default BlackCapsule
