import Contact from "@/feature/contact/Contact";
import Experience from "@/feature/experience/Experience";
import Projects from "@/feature/projects/Projects";
import Skils from "@/feature/tech/Tech";
import Navigation from "@/feature/nav/Nav";
import Hero from "@/feature/hero/Hero";

export default function Home() {
  return (
    <main className="app">
      <div className="bg-hero-pattern bg-center bg-cover bg-no-repeat">
        <Navigation />
        <Hero />
      </div>

      <Experience />
      <Skils />
      <Projects />
      <Contact />
    </main>
  );
}
