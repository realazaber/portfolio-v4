import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { IProject } from "@/interfaces/IProject";
import { baseUrl } from "@/helper";
import Link from "next/link";

export default function Project() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<IProject>();

  useEffect(() => {
    async function fetchProject() {
      const res = await fetch(`${baseUrl}/project/${id}`);
      const data = await res.json();
      setProject({
        id: id,
        title: data.acf.title,
        description: data.acf.description,
        mainImg: data.acf.image,
        github: data.acf.github,
        deployment: data.acf.deploy_link,
        tech: data.acf.tech.map((t: any) => t.name),
        isMainProject: data.acf.is_main_project === "true",
      });
    }

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="relative w-full h-[50vh]">
        <img
          className="w-full h-full object-cover z-10"
          src={project.mainImg}
          alt={project.title}
        />
        <div className="absolute px-3 top-0 left-0 right-0 bottom-0 w-3/5 mx-auto h-[inherit] z-30 flex flex-wrap justify-center items-center text-white">
          <div className="w-1/2">
            <h1 className="text-white font-semibold">{project.title}</h1>
          </div>
          <div className="w-1/2 text-right">
            {" "}
            <p>Technologies:</p>
            <ul className="flex flex-col gap-3">
              {project.tech.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="w-full flex flex-row justify-center items-center gap-3">
            {project.github !== "" && (
              <Link
                className="text-white text-lg flex gap-1 items-center justify-center"
                href={project.github}
                target="_blank"
              >
                Github link:
                <i className="fa-brands fa-github text-white"></i>
              </Link>
            )}
            {project.deployment !== "" && (
              <Link
                className="text-white text-lg flex gap-1 items-center justify-center"
                href={project.deployment}
                target="_blank"
              >
                Deployment link:
                <i className="fa-solid fa-arrow-up-right-from-square text-white"></i>
              </Link>
            )}
          </div>
        </div>
        <div className="bg-gray-600 z-20 opacity-75 absolute top-0 left-0 right-0 bottom-0 w-full h-[inherit]"></div>
      </div>

      <div className="container my-3">
        <div
          className="text-accent"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
      </div>
    </>
  );
}
