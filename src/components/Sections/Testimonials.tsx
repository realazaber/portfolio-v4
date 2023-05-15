import Testimonial from "../Misc/Testimonial";
import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { ITestimonial } from "@/interfaces/ITestimonial";
import { baseUrl } from "@/helper";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${baseUrl}/testimonial`);
        const testimonials = await response.json();
        setTestimonials(testimonials);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTestimonials();
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
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
            {testimonials.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <Testimonial
                  title={testimonial.acf.headline}
                  pgraph={testimonial.acf.description}
                  person={testimonial.acf.person}
                  position={testimonial.acf.position}
                  company={testimonial.acf.company}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
