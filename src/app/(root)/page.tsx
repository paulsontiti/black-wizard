import React from "react";
import AboutSection from "@/app/(root)/components/AboutSection";
import Footer from "@/app/(root)/components/Footer";
import HeroSection from "@/app/(root)/components/HeroSection";
import Navbar from "@/app/(root)/components/Navbar";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col
     bg-black"
    >
      <Navbar />
      <div className=" mx-auto py-4 px-4 mt-24">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <Footer />
      </div>
    </main>
  );
}
