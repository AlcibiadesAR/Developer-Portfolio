import '../styles/header.css'
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from '../Utils/Scroll' 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuAndScroll = (sectionId) => {
    scrollToSection(sectionId);  // Realiza el scroll a la sección correspondiente
    setIsMenuOpen(false);         // Cierra el menú
  };

  return (
    <>
      <header>
        <div className="container px-2 sm:px-6 lg:px-8 z-10 md:m-auto">
          <div className="flex justify-between items-center py-4">
            <div className="flex w-0 flex-1">
              <span
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-quantico mt-4"
                onClick={() => scrollToSection("hero")}
                style={{ cursor: "pointer" }}
              >
                Alcidev
              </span>
            </div>

            <div className="mr-2 -my-2 ml-auto menu-hamburger">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            <nav className="menu-desktop space-x-10 font-quantico ml-auto">
              <button onClick={() => closeMenuAndScroll("about")} className="text-xl md:text-[24px] text-white">
                Sobre mí
              </button>
              <button onClick={() => closeMenuAndScroll("skills")} className="text-xl md:text-[24px] text-white">
                Habilidades
              </button>
              <button onClick={() => closeMenuAndScroll("projects")} className="text-xl md:text-[24px] text-white">
                Proyectos
              </button>
              <button onClick={() => closeMenuAndScroll("contact")} className="text-xl md:text-[24px] text-white">
                Contacto
              </button>
            </nav>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-0 inset-x-0 h-screen bg-white z-50 p-2 transition transform origin-top-right menu-hamburger-dropdown">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 h-full">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className="text-2xl font-bold text-gray-800 hover:text-gray-600"
                      onClick={() => scrollToSection("hero")}
                      style={{ cursor: "pointer" }}
                    >
                      Alcidev
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={toggleMenu}
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <button
                      onClick={() => closeMenuAndScroll("about")}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Sobre mí
                      </span>
                    </button>
                    <button
                      onClick={() => closeMenuAndScroll("skills")}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Habilidades
                      </span>
                    </button>
                    <button
                      onClick={() => closeMenuAndScroll("projects")}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Proyectos
                      </span>
                    </button>
                    <button
                      onClick={() => closeMenuAndScroll("contact")}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Contacto
                      </span>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
