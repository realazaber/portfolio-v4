import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
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
    <footer className="flex flex-row justify-between p-3">
      <div>
        <a onClick={() => scrollToSection("home")}>
          <img
            className="object-contain w-64 h-24"
            src="/images/Logo.svg"
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
        <Link href="https://personal-blog-ten-bice.vercel.app/" target="_blank">
          Blog <i className="fas fa-external-link-alt"></i>
        </Link>
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
