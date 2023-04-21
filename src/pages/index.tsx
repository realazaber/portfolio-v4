import Home from "@/components/Sections/Home";
import About from "@/components/Sections/About";
import Bio from "@/components/Bio";
import Experience from "@/components/Sections/Experience";
import Projects from "@/components/Sections/Projects";
import Testimonials from "@/components/Sections/Testimonials";
import Contact from "@/components/Sections/Contact";


export default function Index() {
  return (
    <>
      <Home />
      <About />
      <Bio />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}
