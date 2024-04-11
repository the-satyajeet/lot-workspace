"use client";

import { useState } from "react";
import { X } from "lucide-react";
import MainButton from "./MainButton";
import Link from "next/link";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0 md:shadow-none z-20 ">
      {/* DESKTOP */}
      <div className=" hidden lg:block bg-zinc-950 p-4">
        <div className="flex m-1 items-center justify-between pl-8 pr-8">
          <div>
            <img src="/images/lot-white-logo.png" alt="logo" />
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none h-[6.5rem] border-white bg-zinc-900 text-white bg-opacity-80 shadow-lg shadow-black/[0.03rem] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[32rem] sm:rounded-full p-5 w-[22rem]">
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
            >
              Home
            </p>
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
            >
              Events
            </p>
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
            >
              Webinars
            </p>
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray `}
            >
              About Us
            </p>

            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
            >
              Contact
            </p>
            {/* Add more links here */}
          </div>
          <div className="flex items-center gap-[40px] select-none">
            <Link href="/sections/login">
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-white `}
            >
              Login
            </p>
            </Link>
            <MainButton text="Sign up" classes="shadow-none" />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 zoom-in  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/images/logo-ico.png" alt="logo" className="w-[1rem]" />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/svgs/hamburger.svg"
                alt="logo"
                className="cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none ">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Home
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Events
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Webinars
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                About Us
              </p>

              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Contact
              </p>

              <div className="flex flex-col gap-[40px] select-none">
                <p
                  className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                >
                  Login
                </p>
                <MainButton text="Sign up" classes="shadow-none" />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;