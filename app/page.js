import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/SkillSection";

export default function Home() {
  return (
    <div className="bg-white dark:text-white dark:bg-gray-900 pb-8">
      <HeroSection />
      <About />
      <SkillsSection />
      <Projects />
      <Contact />
    </div>
  );
}
