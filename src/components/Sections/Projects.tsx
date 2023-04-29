import { useEffect, useState } from "react";
import MainProject from "../Misc/MainProject";
import { IProject } from "@/interfaces/IProject";
import { baseUrl } from "@/helper";
export default function Projects() {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${baseUrl}/project`);
        const projects = await response.json();
        setProjects(projects);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects">
      <div className="container text-pri flex flex-col gap-5">
        <h2 className="mb-5">Projects</h2>
        {projects
          .filter((project) => project.acf.is_main_project == "true")
          .map((project, index) => (
            <MainProject
              key={project.id}
              id={project.id}
              title={project.acf.title}
              image={project.acf.image}
              github={project.acf.github}
              deployment={project.acf.deploy_link}
              tech={project.acf.tech.map((tech) => tech.name)}
              description={project.acf.description}
              reverse={index % 2 === 1 ? true : false}
            />
          ))}
      </div>
    </section>
  );
}
