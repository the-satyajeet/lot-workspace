import React from 'react'

const Location = () => {
  return (
    <>
    <div className="w-[347px] h-[408px] flex-col justify-start items-start inline-flex mt-5">
    <div className="self-stretch h-14 p-4 bg-zinc-700 rounded-tl-2xl rounded-tr-2xl flex-col justify-start items-start gap-2.5 flex">
        <div className="justify-center items-center gap-2.5 inline-flex">
            <div className="w-6 h-6 relative"></div>
            <div className="flex-col justify-start items-start gap-4 inline-flex">
                <div className="flex-row justify-start items-start gap-3 flex">
                <img src="/icons/location-icon.png" alt="Gallery icon" className="w-6 h-6" />
                    <div className="text-white text-xl font-bold font-['Vinila Test']">Location</div>
                </div>
            </div>
        </div>
    </div>
    <img src="/images/unipolis-map.png" className="w-[347px] h-60" />
    <div className="p-4 bg-neutral-700 rounded-bl-2xl rounded-br-2xl flex-col justify-start items-start gap-2.5 flex">
        <div className="flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch h-[19px] flex-col justify-start items-start gap-3 flex">
                <div className="w-[315px] text-white text-base font-bold font-['Vinila Test']">Baldev Raj Mittal Unipolish</div>
            </div>
        </div>
        <div className="flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch h-[51px] flex-col justify-start items-start gap-3 flex">
                <div className="w-[315px] text-white text-sm font-normal font-['Vinila Test']">Lovely Professional University, Jalandhar - Delhi, Grand Trunk Rd, Phagwara, Punjab 144001, India</div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Location
