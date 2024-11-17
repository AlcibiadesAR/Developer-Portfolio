import { useEffect } from "react";
import './styles/App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Hero from "./Components/Hero";
import Footer from './Components/Footer';
import AnimationBackground from "./Utils/AnimationBackground";
import ScrollToTopButton from './Utils/ScrollToTopButton'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',  
      once: false
    });
  }, []);

  return (
    <div className="w-[100%] lg:w-[70%] m-auto">
      <AnimationBackground />
      <ScrollToTopButton />
      <Header />
      <main>
        <section id="hero" data-aos="fade-up">
          <Hero />
        </section>
        <section id="about" data-aos="fade-up">
          <About />
        </section>
        <section id="skills" data-aos="fade-up">
          <Skills />
        </section>
        <section id="projects" data-aos="fade-up">
          <Projects />
        </section>
        <section id="contact" data-aos="fade-up">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
