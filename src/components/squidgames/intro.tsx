import React from "react";
import Apr19 from "./apr19";
import GreyCapsule from "./greyCapsule";
import BlackCapsule from "./blackCapsule";
import BlackCapsule2 from "./blackCapsule2";
import Registration from "./registration";
import Location from "./location";
import Gallery from "./gallery";

const Intro = () => {
  return (
    <section className="w-[95rem] flex justify-between flex-col md:flex-row gap-4 bg-black p-8 pt-1">
      <div className=" ">
        <div className="w-[8rem] bg-white rounded-full h-[2rem] flex items-center justify-center gap-2">
          <div>
            <img src="/images/sm-logo.svg" alt="logo" />
          </div>
          <p className="text-primary font-bold">LOT Event</p>
        </div>
        <div className="text-white flex flex-col gap-0">
          <h1 className="text-[6rem] font-bold">Dare To Play 2024</h1>
          <h2 className="text-[4rem] font-normal">Theme: Squid Game</h2>
        </div>
        <div>
          <div className="ml-8 flex flex-row items-center">
            <img className="w-[1.5rem]" src="/icons/loc-svg-ico.svg" alt="location" />
            <div className="text-white ml-4 flex flex-col ">
              <p className="font-bold text-[16px]">
                Baldev Raj Mittal Unipolis
              </p>
              <p className="font-normal text-[12px]">
                Lovely Professional University, Punjab
              </p>
            </div>
          </div>
          <div className="flex justify-evenly mt-6 ml-2 gap-4">
            <GreyCapsule></GreyCapsule>
            <BlackCapsule></BlackCapsule>
            <BlackCapsule2></BlackCapsule2>
          </div>
        </div>
        <div className="">
          <h1 className="mt-14 text-white text-2xl font-bold font-['Vinila Test']">
            About Event
          </h1>
          <hr className="mt-3"></hr>
          <p className="mt-3 w-[909px] text-white text-base font-normal font-['Vinila Test']">
            Embark on a journey of exhilarating fun and stress-free excitement
            at Dare to Play 2024! This year, we're bringing the thrilling world
            of Squid Game to life with our Squid Game Edition event. Get ready
            to leave your worries behind and immerse yourself in a series of
            engaging games designed to provide a much-needed break from academic
            stress.
            <br />
            <br />
            Join us as we transform your ordinary day into an extraordinary
            adventure filled with laughter, camaraderie, and unforgettable
            memories. Whether you're a seasoned competitor or just looking to
            have a good time, Dare to Play 2024 offers something for everyone.
            <br />
            <br />
            Challenge yourself and your friends to conquer obstacles, test your
            skills, and embrace the spirit of friendly competition. From
            heart-pounding challenges to hilarious games, there's never a dull
            moment at Dare to Play.
            <br />
            <br />
            So mark your calendars, gather your squad, and get ready to dive
            into the excitement of Dare to Play 2024: Squid Game Edition. Let's
            make memories that will last a lifetime!
          </p>
          <h4 className="text-white font-bold mt-4">About Squid Game</h4>
          <p className="mt-1 w-[898px] text-justify text-white text-base font-normal font-['Vinila Test']">
            "Squid Game" is a gripping South Korean television series that took
            the world by storm upon its release on Netflix. The show, created by
            Hwang Dong-hyuk, combines elements of thriller, drama, and dystopian
            fiction to deliver a thought-provoking narrative that captivated
            audiences worldwide.
            <br />
            <br />
            "Squid Game" quickly became one of Netflix's most-watched series
            after its release. Within its first month, it reportedly reached
            over 111 million households worldwide, making it the platform's
            biggest launch ever at the time.
          </p>
        </div>
        <div>
          <div>
            <h1 className="mt-6 text-white text-2xl font-bold font-['Vinila Test']">
              FAQs
            </h1>
            <hr className="mt-3"></hr>
            <p className="mt-3 w-[909px] text-white text-base font-normal font-['Vinila Test']">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit dignissimos eaque incidunt voluptate voluptas illum itaque ipsum ut quasi dolorem praesentium tempora, eos ab reiciendis, blanditiis maiores, deleniti sunt ullam beatae. Sed voluptatum accusamus reprehenderit asperiores aspernatur inventore possimus voluptates, iusto odit repellat ipsa iste fugiat, ut omnis enim quos. Distinctio quis voluptatum, repellat culpa deserunt modi ex provident? Quae deleniti odit culpa voluptatum accusantium provident ea quas labore maxime, aperiam veritatis placeat iure maiores praesentium ipsam aut doloremque ipsa pariatur, voluptate rerum. 
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sit et sapiente rerum sint impedit quos nemo labore placeat iste ratione consequatur iure doloribus vel odio consectetur provident ipsum possimus libero aliquam similique totam temporibus? Aperiam ipsum, vero quisquam ab culpa consequuntur sunt?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum pariatur voluptatum qui expedita nisi ipsum natus non, eaque enim porro rem minus eius illo laboriosam molestias quo modi exercitationem iure ipsam corporis.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas libero molestiae eligendi officiis adipisci, nihil ab optio fugit mollitia dicta provident! Eveniet minima vel quod quis enim officiis? Repellat pariatur libero numquam rerum deleniti consectetur quidem natus at.
            </p>
          </div>
        </div>
      </div>
      <aside className="h-[30rem] flex flex-col gap-6 justify-start ">
        <Registration></Registration>
        <Location></Location>
        <Gallery></Gallery>
      </aside>
    </section>
  );
};

export default Intro;
