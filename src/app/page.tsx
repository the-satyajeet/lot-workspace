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
      <HeroSection />
      <ServiceSection />
      <VideoPlayerSection />
      <TestimonialSection />
      <TeamSection />
      <NewsLetterSection />
      <FooterSection />
    </main>
  );
}
