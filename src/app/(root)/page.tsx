import React from "react";
import AboutSection from "@/app/(root)/components/AboutSection";
import Footer from "@/app/(root)/components/Footer";
import HeroSection from "@/app/(root)/components/HeroSection";
import Navbar from "@/app/(root)/components/Navbar";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Achievement from "./components/Achievement";

export default function Home() {
  return (
    <main
      className=" flex min-h-screen flex-col 
     bg-black max-w-full container px-2"
    >
      <Navbar />
      <div className="mx-auto py-4 mt-24 items-center justify-center">
        <HeroSection />
        {/* <Achievement /> */}
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
