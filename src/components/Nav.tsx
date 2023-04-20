import { useState } from "react";
import Image from "next/image";


export default function Nav() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="p-3 w-full flex flex-row justify-between items-center fixed top-0 left-0 right-0 bg-white z-10">
      <a onClick={() => scrollToSection("home")}>
        <Image className="object-cover w-64 h-24" src="/images/azaber.webp" width={100} height={100} />
      </a>
      <div className="flex flex-row gap-5 items-center text-pri h-24">
        <a onClick={() => scrollToSection("about")}>About</a>
        <a onClick={() => scrollToSection("experience")}>Experience</a>
        <a onClick={() => scrollToSection("projects")}>Projects</a>
        <a href="/blog">Blog <i className="fas fa-external-link-alt"></i></a>
        <a
          className="btn"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
