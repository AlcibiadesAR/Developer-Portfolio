import DataSkills from "../../data/skills.json";

function Skills() {
  return (
    <>
      <section className="container mx-auto mt-24 mb-24 pt-8">
        <h2 className="text-center font-mono font-bold text-4xl md:text-6xl mb-10">
          Habilidades
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
          {DataSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={skill.icon}
                alt={`Icon for ${skill.name}`}
                className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
              />
              <p className="text-sm md:text-lg font-semibold text-white text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
