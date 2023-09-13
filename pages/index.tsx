import Navigation from "@/feature/nav/Nav";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

import Skils from "@/feature/tech/Tech";

import Head from "next/head";
import Hero from "@/feature/hero/Hero";
import Experience from "@/feature/experience/Experience";
import Projects from "@/feature/projects/Projects";
import Contact from "@/feature/contact/Contact";
import axios from "axios";
import { BaseURL, INFO, SUPABASE_API_KEY } from "@/constants/endPoints";
import { infoType } from "@/types/info";
import Footer from "@/feature/footer/Footer";

export const getStaticProps: GetStaticProps<{ info: infoType }> = async () => {
  const config = {
    url: `${BaseURL}${INFO}`,
    method: "GET",
    timeout: 0,
    headers: {
      apikey: `${SUPABASE_API_KEY}`,
      Authorization: `Bearer ${SUPABASE_API_KEY}`,
    },
  };
  const response = await axios(config);
  return {
    props: {
      info: response.data[0],
    },
    revalidate: 10,
  };
};
function Home({ info }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>farsdev</title>
      </Head>
      <main className="app" id="app">
        <div className="bg-hero-pattern bg-center bg-cover bg-no-repeat">
          <Navigation {...info} />
          <Hero {...info} />
        </div>
        <Experience />
        <Skils />
        <Projects />
        <Contact />
        <Footer {...info} />
      </main>
    </>
  );
}

export default Home;
