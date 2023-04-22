import Testimonial from "../Misc/Testimonial";

import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section id="testimonials" className="section-sec">
      <div className="container">
      <div className="text-pri">
        <h2>Testimonials</h2>
      </div>
      <div className="flex flex-row flex-wrap gap-3">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="bg-pri text-sec"
          indicators={false}
        >
          <Carousel.Item>
            <Testimonial
              title="Great to work with"
              pgraph="I’ve worked with Alex for a long time. He is super motivated, hard working and very creative. His hunger for new knowledge never stop, he is always determined to discover new thing to further enhance his programming skills. He have a good problem solving skills. Looking forward to work with him again in the future."
              name="Lisette Dela Cruz"
              position="Web Designer"
              company="Cyber Digital"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Testimonial
              title="Terrific team player"
              pgraph="Always works hard and contributes to the team."
              name="Rebecca Kirby"
              position="Manager"
              company="KFC"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Testimonial
              title="Very helpful"
              pgraph="Alexander has a lot of experience in various errors of technology. He has been studying IT for many years and he is always immersing himself in it and i see he has a lot of interest in it. He also has a loyal and helpful nature."
              name="Joshua Fontes"
              position=""
              company="Friend"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Testimonial
              title="Asset to the team"
              pgraph="Alex has proven himself to be a valuable member of our team, and I am confident that he would be an asset to any company. Alex demonstrated a strong work ethic and a genuine passion for learning. He was always eager to take on new tasks and was never afraid to ask questions or seek guidance when needed. His willingness to learn and his open-mindedness made him an excellent collaborator and a joy to work with."
              name="Klaudia Jozwiak"
              position="Information Security Analyst"
              company="Testronic"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      </div>
    </section>
  );
}
