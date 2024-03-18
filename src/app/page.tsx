import Image from "next/image";
import NavBar from "../components/common/NavBar";
import HeroSection from "../components/sections/HeroSection";
import ServiceSection from "../components/sections/ServiceSection";
import VideoPlayerSection from "../components/sections/VideoPlayerSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import TeamSection from "../components/sections/TeamSection";
import NewsLetterSection from "../components/sections/NewsLetterSection";
import FooterSection from "../components/sections/FooterSection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="mt-24 md:mt-8 px-4 md:px-[9rem]">
        <HeroSection />
        <ServiceSection />
        <VideoPlayerSection />
        <TestimonialSection />
        <TeamSection />
        <NewsLetterSection />
        <FooterSection />
      </div>
    </main>
  );
}
