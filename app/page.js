import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CodolioCard from "@/components/CodolioCard";

export default function Home() {
  const showCodolio = !!process.env.NEXT_PUBLIC_CODOLIO;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      {showCodolio && <CodolioCard />}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
