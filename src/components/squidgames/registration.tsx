import React from "react";

const Registration = () => {
  return (
    <>
      <div className="w-[347px] h-[290.60px] flex-col justify-start items-start inline-flex">
        <div className="h-[68.88px] w-[347px] p-[22.94px] bg-blue-500 rounded-tl-2xl rounded-tr-2xl flex-col justify-start items-start gap-[9.56px] flex">
          <div className="justify-center items-center gap-[9.56px] inline-flex">
            <div className="w-[22.94px] h-[22.94px] relative"></div>
            <div className="flex-col justify-start items-start gap-[15.29px] inline-flex">
              <div className="flex-row justify-start items-start gap-[11.47px] flex">
                <img
                  src="/icons/register-icon.png"
                  alt="Gallery icon"
                  className="w-6 h-6"
                />
                <div className="text-white text-xl font-bold font-['Vinila Test']">
                  Registration
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-[22.94px] bg-gradient-to-b from-blue-100 to-slate-500 rounded-bl-2xl rounded-br-2xl  flex-col justify-start items-start gap-[9.56px] flex">
          <div className="flex-col justify-start items-start gap-[15.29px] flex">
            <div className="flex-col justify-start items-start gap-[11.47px] flex">
              <div className="w-[301.12px] text-zinc-950 text-sm font-normal font-['Vinila Test']">
                Ticket Price
              </div>
              <div className="w-[301.12px] text-orange-600 text-3xl font-normal font-['Vinila Test']">
                ₹200.00
              </div>
            </div>
            <div className="self-stretch h-[110.06px] flex-col justify-start items-start gap-[11.47px] flex">
              <div className="w-[301.12px] text-zinc-950 text-base font-normal font-['Vinila Test']">
                Welcome! To join the event, please register below.
              </div>
              <button className=" self-stretch px-[30.59px] py-[15.29px] bg-blue-700 rounded-lg justify-center items-center gap-[9.56px] inline-flex">
                <p className="text-white text-base font-bold font-['Vinila Test']">
                  Register
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
