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
      if (Array.isArray(id)) {
        // Handle the case where id is an array
        // For simplicity, consider using only the first element in the array
        const firstId = id[0];
        const res = await fetch(`${baseUrl}/project/${firstId}`);
        const data = await res.json();
        if (data) {
          setProject({
            id: parseInt(firstId),
            acf: {
              title: data.acf.title,
              image: data.acf.image,
              github: data.acf.github,
              deploy_link: data.acf.deploy_link,
              tech: data.acf.tech.map((t: any) => t.name),
              description: data.acf.description,
              is_main_project: data.acf.is_main_project,
            },
          });
        }
      } else if (typeof id === "string") {
        // Handle the case where id is a string
        const res = await fetch(`${baseUrl}/project/${id}`);
        const data = await res.json();
        if (data) {
          setProject({
            id: parseInt(id),
            acf: {
              title: data.acf.title,
              image: data.acf.image,
              github: data.acf.github,
              deploy_link: data.acf.deploy_link,
              tech: data.acf.tech.map((t: any) => t.name),
              description: data.acf.description,
              is_main_project: data.acf.is_main_project,
            },
          });
        }
      }
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
          src={project.acf.image}
          alt={project.acf.title}
        />
        <div className="absolute px-3 top-0 left-0 right-0 bottom-0 w-3/5 mx-auto h-[inherit] z-30 flex flex-wrap justify-center items-center text-white">
          <div className="w-1/2">
            <h1 className="text-white font-semibold">{project.acf.title}</h1>
          </div>
          <div className="w-1/2 text-right">
            {" "}
            <p>Technologies:</p>
            <ul className="flex flex-col gap-3">
              {project.acf.tech.map((techName, index) => (
                <>
                  <>{techName}</>
                  <br />
                </>
              ))}
            </ul>
          </div>
          <div className="w-full flex flex-row justify-center items-center gap-3">
            {project.acf.github !== "" && (
              <Link
                className="text-white text-lg flex gap-1 items-center justify-center"
                href={project.acf.github}
                target="_blank"
              >
                Github link:
                <i className="fa-brands fa-github text-white"></i>
              </Link>
            )}
            {project.acf.deploy_link !== "" && (
              <Link
                className="text-white text-lg flex gap-1 items-center justify-center"
                href={project.acf.deploy_link}
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
          dangerouslySetInnerHTML={{ __html: project.acf.description }}
        />
      </div>
    </>
  );
}
