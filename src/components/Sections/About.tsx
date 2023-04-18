import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Slide from "react-reveal/Slide";

export default function About() {
  return (
    <section id="about">
      <Image
        src="/images/hello-there.webp"
        width={100}
        height={100}
        alt="Hello There"
        className="w-full h-auto object-contain"
      ></Image>
      <div className="flex flex-row gap-3 justify-center items-center w-3/5">
        <div className="w-2/5 flex justify-end">
          <Image src="/images/me.webp" width={300} height={300} />
        </div>
        <div className="w-3/5">
          <div className="text-2xl text-center text-pri">
            I am a{" "}
            <Typewriter
              words={["problem solver", "software engineer", "Nerd"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={120}
              delaySpeed={1000}
            />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            ut unde vero odit. Dolorum maiores at, repudiandae eum deleniti
            accusamus! Consectetur animi id sequi fugiat eum, at enim quos
            reiciendis?
          </p>
        </div>
      </div>
    </section>
  );
}
