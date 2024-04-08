import Image from "next/image";
import NavBar from "../components/common/NavBar";
import HeroSection from "../components/sections/HeroSection";
import VideoPlayerSection from "../components/sections/VideoPlayerSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import TeamSection from "../components/sections/TeamSection";
import FooterSection from "../components/sections/FooterSection";
import EventSection from "../components/sections/EventSection";
import NewsLetterSection from "../components/sections/NewsletterSection";
import Login from "../components/sections/login";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="mt-24 md:mt-8 px-4 md:px-[9rem]">
        <HeroSection />
        <EventSection />
        <VideoPlayerSection />
        <TestimonialSection />
        <TeamSection />
        <NewsLetterSection />
        <FooterSection />
        <Login />
      </div>
    </main>
  );
}
