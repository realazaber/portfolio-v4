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
        <a onClick={() => scrollToSection("home")}>Home</a>
      </div>
      <div className="flex flex-col gap-3 text-right">
        <a onClick={() => scrollToSection("about")}>About</a>
        <a onClick={() => scrollToSection("projects")}>Projects</a>
        <a href="/blog">Blog</a>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </div>
    </footer>
  );
}
