import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Slide from "react-reveal/Slide";

export default function Home() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <section id="home">
      <Slide up cascade>
        <div className="mx-auto grid grid-cols-4 grid-rows-3 gap-4">
          <div>
            <Image src="/images/me.webp" width={100} height={100}></Image>
          </div>
          <div className="col-span-2">
            <i className="fa-brands fa-drupal text-[#009cde]"></i>
            <i className="fa-brands fa-angular text-[#e32e34]"></i>
            <i className="fa-brands fa-react text-[#61dcfc]"></i>
            <i className="fa-brands fa-php text-[#878db7]"></i>
          </div>
          <div className="bg-[#21262d] border-none">
            <Link href="https://github.com/realazaber" target="_blank">
              <i className="fa-brands fa-github text-white"></i>
            </Link>
          </div>

          <div className="bg-[#0966c2] border-none">
            <Link
              href="https://www.linkedin.com/in/alexander-zaborski-a7b7951a4/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in text-white"></i>
            </Link>
          </div>
          <div className="bg-blue-500 border-none">
            <i className="fa-brands fa-blogger-b text-white"></i>
          </div>
          <div className="col-span-2 text-3xl">🇵🇱 made in 🇦🇺</div>

          <div className="bg-[#f15a24] border-none">
            <i
              onClick={() => scrollToSection("contact")}
              className="fa-sharp fa-regular fa-envelope text-white"
            ></i>
          </div>
        </div>
      </Slide>
    </section>
  );
}
