import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Slide from "react-reveal/Slide";
import Modal from "react-bootstrap/Modal";

export default function Home() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const [showAus, setShowAus] = useState(false);

  const m_closeAus = () => setShowAus(false);
  const m_showAus = () => setShowAus(true);

  const [showMe, setShowMe] = useState(false);

  const m_closeMe = () => setShowMe(false);
  const m_showMe = () => setShowMe(true);

  return (
    <section id="home">
      <Modal show={showAus} onHide={m_closeAus}>
        <Modal.Header closeButton>
          <Modal.Title>🇵🇱 from 🇦🇺</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I was born in Melbourne Australia and speak fluent English
          (still learning Polish, ale jest trudno język).
          </Modal.Body>
        <Modal.Footer>
          <button onClick={m_closeAus}>Close</button>
        </Modal.Footer>
      </Modal>
      <Modal show={showMe} onHide={m_closeMe}>
        <Modal.Header closeButton>
          <Modal.Title>About me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I was born in Australia and currently reside in Warsaw Poland.
          My passions include programming, skating and expanding my knowledge in both of these areas.
        </Modal.Body>
        <Modal.Footer>
          <button onClick={m_closeMe}>Close</button>
        </Modal.Footer>
      </Modal>
      <Slide up cascade>
        <div className="mx-auto grid grid-cols-4 grid-rows-3 gap-4">
          <div className="cell" onClick={m_showMe}>
            <Image src="/images/me.webp" width={100} height={100}></Image>
          </div>
          <div className="col-span-2 cell flex-wrap" onClick={() => scrollToSection("techstack")}>
            <div>
              <div className="flex flex-row gap-6 w-5/6">
                <i className="fa-brands fa-drupal text-[#009cde]"></i>
                <i className="fa-brands fa-angular text-[#e32e34]"></i>
                <i className="fa-brands fa-react text-[#61dcfc]"></i>
                <i className="fa-brands fa-php text-[#878db7]"></i>
              </div>
              <div
                className="text-right text-accent max-h-[1rem]"
                onClick={() => scrollToSection("techstack")}
              >
                + more
              </div>
            </div>
          </div>
          <div className="bg-[#21262d] border-none cell">
            <Link href="https://github.com/realazaber" target="_blank">
              <i className="fa-brands fa-github text-white"></i>
            </Link>
          </div>

          <div className="bg-[#0966c2] border-none cell">
            <Link
              href="https://www.linkedin.com/in/alexander-zaborski-a7b7951a4/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in text-white"></i>
            </Link>
          </div>
          <div className="bg-blue-500 border-none cell">
            <i className="fa-brands fa-blogger-b text-white"></i>
          </div>
          <div
            className="col-span-2 text-3xl cell text-accent"
            onClick={m_showAus}
          >
            🇵🇱 made in 🇦🇺
          </div>

          <div className="bg-[#f15a24] border-none cell">
            <i
              onClick={() => scrollToSection("contact")}
              className="fa-sharp fa-regular fa-envelope text-white"
            ></i>
          </div>
          <div
            className="col-span-3 text-3xl gap-3 cell"
            onClick={() => scrollToSection("about")}
          >
            <span className="text-accent w-full text-right flex flex-row justify-center gap-3">
              Lets make something great
              <b className="fas fa-long-arrow-down text-accent text-3xl"></b>
            </span>
          </div>
        </div>
      </Slide>
    </section>
  );
}
