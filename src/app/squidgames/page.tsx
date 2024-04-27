import Image from "next/image";
import Hero from "@/src/components/squidgames/hero";
import Intro from "@/src/components/squidgames/intro";
import Nav from "@/src/components/squidgames/nav";

export default function Home() {
  return (
    <main className="">
      <Nav></Nav>
      <Hero></Hero>
      <Intro></Intro>
    </main>
  );
}