import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import { AboutSection } from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-black text-white">
      <NavBar />
      <div className="container mx-auto px-12 ">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
