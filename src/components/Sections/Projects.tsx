import Project from "../Misc/Project";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container text-pri">
        <h2>Projects</h2>
        <Project github="github.com" deployment="test.com" />
      </div>
    </section>
  );
}
