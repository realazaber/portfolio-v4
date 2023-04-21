import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  return (
    <section id="experience" className="container">
      <h2 className="w-full text-left">Experience</h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jul 2022 - March 2023"
          icon={<i className="fas fa-shield-alt text-[#56bcfc]"></i>}
        >
          <h3 className="vertical-timeline-element-title">Testronic</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Information Security Analyst
          </h4>
          <p>
            I was responsible for investigating incidents, analysing
            applications and websites marked as suspicious and other
            miscellanous tasks like making powershell scripts to automate
            tedious tasks.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2022 - Nov 2022"
          icon={<i className="fab fa-react text-[#61dcfc]"></i>}
        >
          <h3 className="vertical-timeline-element-title">Tomtom</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Engineer internship
          </h4>
          <p>
            I worked on the team with Gatsby and mainly trying out new
            features from tanstack as well as from other libraries like
            Tailwind. I also was responding to bug fix tickets.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2022 - Mar 2022"
          icon={<i className="fab fa-drupal text-[#009cde]"></i>}
        >
          <h3 className="vertical-timeline-element-title">Cyber Digital</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Drupal Frontend Developer
          </h4>
          <p>
            Helping the team work with the CMS with particular
            focus on Drupal paragraphs, views and other modules.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2020 - Nov 2021"
          icon={<i className="fas fa-university"></i>}
        >
          <h3 className="vertical-timeline-element-title">RMIT Australia</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Associate Degree in Information Technology
          </h4>
          <p>
            In this degree I completed projects and learned more 
            about web programming, java programming, cyber security,
            system administration and more. I have completed this
            degree with a distinction.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2016 - Dec 2016"
          icon={<i className="fab fa-unity text-gray-500"></i>}
        >
          <h3 className="vertical-timeline-element-title">Academy of Interactive Entertainment</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cert II & III in Information and Digital Media
          </h4>
          <p>
            In the Cert II I created web games in javascript.
            In the Cert III we started using Unity 3D with C#;
            I also made use of OOP tecniques.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
