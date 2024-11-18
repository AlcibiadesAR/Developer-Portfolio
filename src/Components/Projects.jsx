import DataProjects from "../../data/proyectos.json";
import ProjectCard from "./ProyectCard";

function Projects() {
  return (
    <section className="min-h-screen text-gray-300 py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-center">
            <span className="text-gray-200 font-mono drop-shadow-[2px_2px_4px_rgba(0,255,0,0.6)]">Proyectos</span>
          </h2>
        </header>

        <div className="space-y-24">
          {DataProjects.map((project, index) => (
            <ProjectCard key={index} project={project} isEven={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

