import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (id: any) => {
    setIsMenuOpen(!isMenuOpen);
    if (router.pathname !== "/") {
      router.push("/");
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 bg-white w-full transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          id="mobileNav"
          className="flex flex-col h-full w-full opacity-80 justify-center items-center p-4"
        >
          <a onClick={() => scrollToSection("home")}>Home</a>

          <a onClick={() => scrollToSection("about")}>About</a>
          <a onClick={() => scrollToSection("experience")}>Experience</a>
          <a onClick={() => scrollToSection("projects")}>Projects</a>
          <Link
            href="https://personal-blog-ten-bice.vercel.app/"
            target="_blank"
          >
            Blog <i className="fas fa-external-link-alt"></i>
          </Link>

          <a onClick={() => scrollToSection("contact")}>Contact</a>
        </div>
      </div>

      <nav className="tablet:hidden tablet:invisible fixed top-5 right-5">
        <i
          className="fas fa-hamburger text-pri hover:text-blue-600 text-5xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
      </nav>
    </>
  );
}
