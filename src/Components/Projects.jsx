import DataProjects from "../../data/proyectos.json";

export default function Projects() {
  return (
    <section className="container mx-auto mt-24 mb-24 pt-8">
      <h2 className="text-center font-mono font-bold text-4xl md:text-6xl mb-10">
        Proyectos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {DataProjects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
          >
            <img
              src={project.image}
              alt={`Screenshot of ${project.name}`}
              className="w-full h-50 object-cover m-auto"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{project.name}</h3>
              <p className="text-white text-sm mb-4">{project.description}</p>
              <div className="flex flex-col gap-2 mt-4">
                {/* Botón GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white bg-gray-600 hover:bg-transparent hover:text-white font-bold py-2 px-2 rounded inline-flex items-center text-sm cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                {project.live && project.live !== "#" ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white text-white bg-transparent hover:bg-gray-600 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center text-sm cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Preview
                  </a>
                ) : (
                  <p className="text-gray-400 text-sm font-semibold">
                    Live Preview no disponible por el momento. Diríjase al{" "}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      código fuente
                    </a>
                    .
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
