import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="p-3 w-full flex flex-row justify-between">
      <a onClick={() => scrollToSection("home")}>Home</a>
      <div className="flex flex-row gap-3">
        <a onClick={() => scrollToSection("about")}>About</a>
        <a onClick={() => scrollToSection("projects")}>Projects</a>
        <a href="/blog">Blog</a>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </div>
    </nav>
  );
}
