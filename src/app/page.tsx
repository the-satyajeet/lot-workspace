import Image from "next/image";
import NavBar from "../components/common/NavBar";
import HeroSection from "../components/sections/HeroSection";
import VideoPlayerSection from "../components/sections/VideoPlayerSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import TeamSection from "../components/sections/TeamSection";
import FooterSection from "../components/sections/FooterSection";
import EventSection from "../components/sections/EventSection";
import NewsLetterSection from "../components/sections/NewsletterSection";
import Link from "next/link";
import Login from "../components/sections/login";
import SignUp from "../components/sections/signUp";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="mt-0 md:mt-0 px-4 md:px-[9rem] bg-zinc-950">
        <HeroSection />
        <EventSection />
        <VideoPlayerSection />
        <TestimonialSection />
        <TeamSection />
        <NewsLetterSection />
        <FooterSection />
        <Login />
        <SignUp />
        
      </div>
    </main>
  );
}
