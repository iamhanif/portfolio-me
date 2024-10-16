import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/SkillSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <About />
      <SkillsSection />
      <Projects />
      <Contact />
    </div>
  );
}
