import React from "react";

const Gallery = () => {
  return (
    <>
      <div className="w-[347px] h-[260.11px] flex-col justify-start items-start inline-flex">
    <div className="self-stretch h-14 p-4 bg-zinc-700 rounded-tl-2xl rounded-tr-2xl flex-col justify-start items-start gap-2.5 flex">
        <div className="justify-center items-center gap-2.5 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="flex-col justify-start items-start gap-4 inline-flex">
                <div className="flex-row justify-start items-start gap-3 flex">
                    <img src="/icons/gallery-icon.png" alt="Gallery icon" className="w-6 h-6" />
                    <div className="text-white text-xl font-bold font-['Vinila Test']">Gallery</div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-[347px] h-[204.11px] p-[14.06px] bg-neutral-700 rounded-bl-2xl rounded-br-2xl flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch justify-start items-start gap-4 inline-flex">
            <div className="grow shrink basis-0 h-20 bg-gradient-to-b from-zinc-300 to-neutral-500 rounded-lg" />
            <div className="grow shrink basis-0 h-20 bg-gradient-to-b from-zinc-300 to-neutral-500 rounded-lg" />
        </div>
        <div className="self-stretch justify-start items-start gap-4 inline-flex">
            <div className="grow shrink basis-0 h-20 bg-gradient-to-b from-zinc-300 to-neutral-500 rounded-lg" />
            <div className="grow shrink basis-0 h-20 bg-gradient-to-b from-zinc-300 to-neutral-500 rounded-lg" />
        </div>
    </div>
</div>
    </>
  );
};

export default Gallery;
