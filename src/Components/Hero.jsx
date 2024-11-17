import foto from "../assets/img/foto.png";

function Hero() {
  return (
    <>
      <section className="block items-center justify-center font-mono w-full">
      <div className="flex justify-center md:ml-8">
          <img
            src={foto}
            className="w-[350px]"
            alt="Alcibiades Acosta foto"
          />
        </div>
        <div className="text-center m-auto lg:w-[70%]">
          <h2 className="md:text-xl">Fullstack Developer</h2>
          <h2 className="text-4xl md:text-6xl pt-4 font-quantico whitespace-nowrap">Alcibiades Acosta</h2>
          <p className="font-semibold text-sm lg:text-lg pt-4 pb-4 mb-14 md:w-[80%] md: m-auto" >
            Como Full-Stack, mi pasión y dedicación me impulsan A seguir
            aprendiendo y dominar nuevas tecnologías para crear soluciones
            innovadoras.
          </p>
          <a
            href="../public/CV-AlcibiadesAcosta.pdf"
            target="_blank"
            className="border-2 border-white text-white bg-gray-600 hover:bg-transparent hover:text-white rounded-[10px] mr-4 px-4 py-2 md:px-8 md:py-3"
          >
            CV
          </a>

          <a
            href="#about"
            className="border-2 border-white text-white bg-transparent hover:bg-gray-600 hover:text-white rounded-[10px] px-1 py-2 md:m-4 md:px-8 md:py-3"
          >
            <i className="ri-rocket-2-line mr-4"></i>Mira mi viaje tech
          </a>

          <div className="flex justify-center items-center gap-8 mt-14 text-4xl">
            <a
              href="https://www.instagram.com/aa_r2130/"
              target="_blank"
              className="transform transition-transform duration-700 ease-in-out hover:translate-x-2"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/alcibiades-acosta/"
              target="_blank"
              className="transform transition-transform duration-700 ease-in-out hover:translate-x-2"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a
              href="https://github.com/AlcibiadesAR"
              target="_blank"
              className="transform transition-transform duration-700 ease-in-out hover:translate-x-2"
            >
              <i className="ri-github-fill"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
