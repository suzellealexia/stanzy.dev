"use client";
import Approach from "@/components/Approach";
import Avatar from "@/components/Avatar";
import { Clients } from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main
      className="relative mx-auto flex flex-col items-center justify-center bg-black px-5 sm:px-10"
      style={{ overflow: "clip" }}
    >
      <div className="w-full p-0">
        <Avatar />
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
