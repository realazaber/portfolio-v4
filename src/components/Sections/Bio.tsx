import Image from "next/image";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { Typewriter } from "react-simple-typewriter";

export default function Bio() {
  return (
    <div className="section-sec">
      <div className="container flex flex-col tablet:flex-row gap-3 justify-center items-center mx-auto p-3">
        <div className="w-full tablet:w-2/5 flex justify-center tablet:justify-end">
          <Slide left>
            <Image src="/images/me.webp" width={300} height={300} alt="me" />
          </Slide>
        </div>
        <Fade>
          <div className="w-full tablet:w-3/5">
            <div className="text-xl font-bold">
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
              Cyber Security Industry. I am currently proficient in frontend,
              especially with React and Angular, I am now improving my skills
              with backend with a focus on Laravel, a PHP framework.
              <i className="block mt-3">
                I treat the word impossible as nothing more than motivation.
              </i>
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
