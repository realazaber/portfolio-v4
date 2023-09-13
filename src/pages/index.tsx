import Home from "@/components/Sections/Home";
import About from "@/components/Sections/About";
import Bio from "@/components/Sections/Bio";
import Experience from "@/components/Sections/Experience";
import Projects from "@/components/Sections/Projects";
import Testimonials from "@/components/Sections/Testimonials";
import Contact from "@/components/Sections/Contact";
import Head from "next/head";
import Socials from "@/components/Misc/Socials";

export default function Index() {
  return (
    <>
      <Head>
        <title>Azaber Portfolio</title>
      </Head>
      <Home />
      <About />
      <Bio />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Socials />
    </>
  );
}
