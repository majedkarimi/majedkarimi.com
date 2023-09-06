import Navigation from "@/feature/nav/Nav";
import Hero from "@/feature/Hero/Hero";
import Experience from "@/feature/Experience/Experience";
import Skils from "@/feature/tech/Tech";
import Projects from "@/feature/Projects/Projects";
import Contact from "@/feature/Contact/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>farsdev</title>
      </Head>
      <main className="app" id="app">
        <div className="bg-hero-pattern bg-center bg-cover bg-no-repeat">
          <Navigation />
          <Hero />
        </div>
        <Experience />
        <Skils />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
