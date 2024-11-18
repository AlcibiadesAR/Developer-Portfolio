import DataSkills from "../../data/skills.json";

function Skills() {
  return (
    <>
      <section className="container mx-auto mt-24 mb-24 pt-8 font-quantico ">
        <h2 className="text-center font-mono font-bold text-4xl md:text-6xl mb-10 drop-shadow-[2px_2px_4px_rgba(0,255,0,0.6)]">
          Habilidades
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Frontend Skills */}
          <div className="flex flex-col items-center justify-start p-6 rounded-lg shadow-md w-full">
            <h3 className="text-2xl font-semibold text-center mb-4">Frontend</h3>
            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 justify-items-center">
              {DataSkills.frontend.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="flex flex-col items-center justify-center p-4 transition-transform transform hover:scale-110">
                    <img
                      src={skill.icon}
                      alt={`Icon for ${skill.name}`}
                      className="w-8 h-8 sm:w-10 sm:h-10 mb-4 shadow-lg hover:drop-shadow-[2px_2px_4px_rgba(0,255,0,0.6)]"
                    />
                    <p className="text-sm md:text-lg font-semibold text-white text-center">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="flex flex-col items-center justify-start p-6 rounded-lg shadow-md w-full">
            <h3 className="text-2xl font-semibold text-center mb-4">Backend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 justify-items-center">
              {DataSkills.backend.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="flex flex-col items-center justify-center p-4 transition-transform transform hover:scale-110">
                    <img
                      src={skill.icon}
                      alt={`Icon for ${skill.name}`}
                      className="w-8 h-8 sm:w-10 sm:h-10 mb-4 shadow-lg hover:drop-shadow-[2px_2px_4px_rgba(0,255,0,0.6)]"
                    />
                    <p className="text-sm md:text-lg font-semibold text-white text-center">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {/* Hosting Skills */}
          <div className="flex flex-col items-center justify-start p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3">
            <h3 className="text-2xl font-semibold text-center mb-4">Hosting</h3>
            <div className="grid grid-cols-1 gap-6 p-4 justify-items-center">
              {DataSkills.hosting.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="flex flex-col items-center justify-center p-4 transition-transform transform hover:scale-110">
                    <img
                      src={skill.icon}
                      alt={`Icon for ${skill.name}`}
                      className="w-8 h-8 sm:w-10 sm:h-10 mb-4 shadow-lg hover:drop-shadow-[2px_2px_4px_rgba(0,255,0,0.6)]"
                    />
                    <p className="text-sm md:text-lg font-semibold text-white text-center">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Version Control Skills */}
          <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3">
            <h3 className="text-2xl font-semibold text-center mb-4">Control de Versiones</h3>
            <div className="grid grid-cols-2 gap-6 p-4 justify-items-center">
              {DataSkills.versionControl.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="flex flex-col items-center justify-center p-8 transition-transform transform hover:scale-110">
                    <img
                      src={skill.icon}
                      alt={`Icon for ${skill.name}`}
                      className="w-8 h-8 sm:w-10 sm:h-10 mb-4 shadow-lg hover:drop-shadow-[2px_2px_4px_rgba(0,255,0,0.6)]"
                    />
                    <p className="text-sm md:text-lg font-semibold text-white text-center">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Skills */}
          <div className="flex flex-col items-center justify-start p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3">
            <h3 className="text-2xl font-semibold text-center mb-4">Diseño</h3>
            <div className="grid grid-cols-1 gap-6 p-4 justify-items-center">
              {DataSkills.design.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="flex flex-col items-center justify-center p-4 transition-transform transform hover:scale-110">
                    <img
                      src={skill.icon}
                      alt={`Icon for ${skill.name}`}
                      className="w-8 h-8 sm:w-10 sm:h-10 mb-4 shadow-lg hover:drop-shadow-[2px_2px_4px_rgba(0,255,0,0.6)]"
                    />
                    <p className="text-sm md:text-lg font-semibold text-white text-center">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
