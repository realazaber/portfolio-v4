import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import TechStack from "./TechStack";

export default function About() {
  return (
    <section id="about" className="container">
      <Slide up>
        <img
          src="/images/hello-there.webp"
          alt="Hello There"
          className="w-[90vw] tablet:w-[60vw] rounded-md h-[50vh] tablet:h-auto object-cover tablet:object-contain mt-5 tablet:mt-0"
        />
      </Slide>
      <Fade>
        <div className="my-5 flex flex-col justify-center items-center">
          <TechStack />
        </div>
      </Fade>
    </section>
  );
}
