import Contact from "@/feature/Contact/Contact";
import Experience from "@/feature/Experience/Experience";
import Projects from "@/feature/Projects/Projects";
import Skils from "@/feature/Skills/Skils";
import Navigation from "@/feature/Nav/Nav";

export default function Home() {
  return (
    <main className="container">
      <Navigation />
      <Experience />
      <Skils />
      <Projects />
      <Contact />
    </main>
  );
}
