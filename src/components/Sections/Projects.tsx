import { useEffect, useState } from "react";
import MainProject from "../Misc/MainProject";
import { IProject } from "@/interfaces/IProject";
import { baseUrl } from "@/helper";
import SubProject from "../Misc/SubProject";

export default function Projects() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [techNames, setTechNames] = useState<string[]>([]);
  const [hiddenTechNames, setHiddenTechNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${baseUrl}/project`);
        const projects = await response.json();
        const names = projects.reduce<string[]>(
          (acc: any, project: any) =>
            project.acf.tech.reduce<string[]>(
              (acc2, tech) => [...acc2, tech.name],
              acc
            ),
          []
        );
        const uniqueNames: any = Array.from(new Set(names));
        setTechNames(uniqueNames);
        setProjects(projects);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchHiddenTechNames = async () => {
      try {
        const response = await fetch(`${baseUrl}/hidden-tech-name`);
        const r_hiddenTechNames = await response.json();
        console.log(r_hiddenTechNames);
        const newTechNames = r_hiddenTechNames.map(
          (item: any) => item.acf.tech_name
        );
        setHiddenTechNames(newTechNames);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
    fetchHiddenTechNames();
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
        <h2 className="text-center">Other projects</h2>
        <div className="flex flex-row flex-wrap justify-center items-center w-full mx-auto gap-3">
          {techNames.map(
            (name) =>
              !hiddenTechNames.includes(name) && (
                <button className="btn" key={name}>
                  {name}
                </button>
              )
          )}
        </div>
        <div className="flex items-center justify-center flex-row flex-wrap gap-3">
          {projects
            .filter((project) => project.acf.is_main_project == "false")
            .map((project, index) => (
              <SubProject
                key={project.id}
                id={project.id}
                title={project.acf.title}
                github={project.acf.github}
                deployment={project.acf.deploy_link}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
