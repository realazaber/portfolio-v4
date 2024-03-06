import Link from "next/link";
import React from "react";

const Socials = () => {
  const scrollToSection = (id: any) => {
    const element: any = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="phone:fixed top-[40%] left-0 hover:cursor-pointer z-50">
      <div className="bg-[#21262d] p-3">
        <Link href="https://github.com/realazaber" target="_blank">
          <i className="fa-brands fa-github text-white text-3xl"></i>
        </Link>
      </div>
      <div className="bg-[#0966c2] p-3">
        <Link href="https://linkedin.com/in/azaber" target="_blank">
          <i className="fa-brands fa-linkedin-in text-white text-3xl"></i>
        </Link>
      </div>
      <div className="bg-blue-500 p-3">
        <Link href="https://personal-blog-ten-bice.vercel.app/" target="_blank">
          <i className="fa-brands fa-blogger-b text-white text-3xl"></i>
        </Link>
      </div>
      <div className="bg-[#f15a24] p-3 hover:cursor-pointer">
        <i
          onClick={() => scrollToSection("contact")}
          className="fa-sharp fa-regular fa-envelope text-white text-3xl"
        ></i>
      </div>
    </div>
  );
};

export default Socials;
