import fotoPersonal from '/assets/img/foto.png'

function About() {
  return (
    <section className="m-auto px-4 py-16">
      <h2 className="text-center font-mono font-bold text-4xl lg:text-6xl mb-10 drop-shadow-[2px_2px_4px_rgba(0,255,0,0.6)]">
        Sobre mí
      </h2>
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        {/* Sección de texto */}
        <div className="md:w-1/2">
          <p className="text-center font-quantico leading-8 text-[13px] md:text-[15px]">
          Soy desarrollador web fullstack, recién graduado de Digital House, con una pasión por crear soluciones digitales que impacten a los usuarios. Durante mi formación, desarrollé proyectos que integran creatividad y habilidades técnicas, destacando mi compromiso con experiencias funcionales e intuitivas.
          </p>
          <p className="mt-6 text-center font-quantico leading-8 text-[13px] md:text-[15px]">
          Me motiva explorar nuevas tecnologías y contribuir a proyectos innovadores que hagan del entorno digital un lugar más accesible y significativo.
          </p>
        </div>

        {/* Imagen cuadrada */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={fotoPersonal} 
            alt="Foto sobre mí"
            className="w-64 h-64 object-cover rounded-lg shadow-md md:w-72 md:h-72 lg:w-80 lg:h-80 hover:drop-shadow-[2px_2px_4px_rgba(0,255,0,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
