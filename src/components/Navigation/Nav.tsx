import { useState } from "react";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (id: any) => {
    if (router.pathname !== "/") {
      router.push("/");
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="p-3 w-full flex flex-row justify-between items-center fixed top-0 left-0 right-0 z-50 bg-white z-10 mx-auto">
      <a onClick={() => scrollToSection("home")}>
        <img
          className="object-contain w-64 h-24"
          src="/images/Logo.svg"
          alt="logo"
        />
      </a>
      <div className="hidden tablet:flex flex-row gap-5 items-center text-pri h-24">
        <a onClick={() => scrollToSection("about")}>About</a>
        <a onClick={() => scrollToSection("experience")}>Experience</a>
        <a onClick={() => scrollToSection("projects")}>Projects</a>
        <Link href="https://personal-blog-ten-bice.vercel.app/" target="_blank">
          Blog <i className="fas fa-external-link-alt"></i>
        </Link>
        <a className="btn" onClick={() => scrollToSection("contact")}>
          Contact
        </a>
      </div>
      <MobileNav />
    </nav>
  );
}
