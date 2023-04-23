import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <footer className="flex flex-row justify-between p-3">
      <div>
        <a
          className="text-pri hover:text-blue-700"
          onClick={() => scrollToSection("home")}
        >
          <Image
            className="object-cover w-64 h-24"
            src="/images/azaber.webp"
            width={100}
            height={100}
            alt="logo"
          />
        </a>
      </div>
      <div className="flex flex-col gap-3 text-right">
        <a
          className="text-pri hover:text-blue-700"
          onClick={() => scrollToSection("about")}
        >
          About
        </a>
        <a
          className="text-pri hover:text-blue-700"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </a>
        <a className="text-pri hover:text-blue-700" href="/blog">
          Blog
        </a>
        <a
          className="text-pri hover:text-blue-700"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
