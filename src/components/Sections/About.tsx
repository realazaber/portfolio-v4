import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import TechStack from "../TechStack";

export default function About() {
  return (
    <section id="about">
      <Slide up>
        <Image
          src="/images/hello-there.webp"
          width={100}
          height={100}
          alt="Hello There"
          className="w-[60vw] rounded-md h-auto object-contain"
        ></Image>
      </Slide>
      <Fade>
        <div className="my-5">
          <TechStack />
          <div className="section-sec">
            <div className="w-3/5 flex flex-row gap-3 justify-center items-center mx-auto p-3">
              <div className="w-2/5 flex justify-end">
                <Slide left>
                  <Image src="/images/me.webp" width={300} height={300} />
                </Slide>
              </div>
              <Fade>
              <div className="w-3/5">
                <div className="text-2xl font-bold">
                  I am a{" "}
                  <Typewriter
                    words={["problem solver", "software engineer", "nerd"]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={30}
                    deleteSpeed={30}
                    delaySpeed={900}
                  />
                </div>
                <p className="text-sec">
                  I have over a year experience in the Software Development and
                  Cyber Security Industry. I am currently proficient in
                  frontend, especially with React and Angular, I am now
                  improving my skills with backend with a focus on Laravel, a
                  PHP framework.
                  <i className="block mt-3">
                    I treat the word impossible as nothing more than motivation.
                  </i>
                </p>
              </div>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
