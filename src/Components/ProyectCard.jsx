import githubIcon from "../../public/assets/img/github.png";

function ProjectCard({ project, isEven }) {
    return (
      <div className={`relative grid md:grid-cols-12 gap-6 items-center ${isEven ? '' : 'md:text-right'}`}>
        {/* Project Image */}
        <div className={`md:col-span-7 relative group ${isEven ? 'md:order-1' : 'md:order-2'}`}>
          <div className="absolute inset-0 bg-[#64ffda] opacity-20 rounded-lg transition-opacity group-hover:opacity-0" />
          <img
            src={project.image}
            alt={`${project.name}`}
            className="rounded-lg w-full h-auto font-quantico"
          />
        </div>
  
        {/* Project Info */}
        <div className={`md:col-span-5 ${isEven ? 'md:order-2 md:pl-6' : 'md:order-1 md:pr-6'}`}>
          <div className="space-y-4">
            <p className="text-[#64ffda] font-mono">{`${project.name}`}</p>
            
            <div className="bg-gray-100 p-6 rounded-lg shadow-xl">
              <p className="text-gray-600 font-quantico">
                {project.description}
              </p>
            </div>
  
            {project.technologies && (
              <div className={`flex flex-wrap gap-4 font-mono text-sm text-gray-400 ${isEven ? '' : 'justify-end'}`}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-[#64ffda]">{tech}</span>
                ))}
              </div>
            )}
  
            <div className={`flex gap-4 ${isEven ? '' : 'justify-end'}`}>
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-custom-green transition-colors"
                aria-label="Ver código fuente en GitHub"
              >
                <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
              </a>
              {project.live && project.live !== "#" ? (
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                  aria-label="Visitar proyecto en vivo"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              ) : (
                <p className="text-gray-600 text-[12px] ml-8 w-[90%] ">
                  Live Preview no disponible por el momento. Diríjase al{" "}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    código fuente
                  </a>
                  .
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default ProjectCard