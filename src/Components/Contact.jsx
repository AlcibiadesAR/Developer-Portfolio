function Contact() {
  return (
    <section className="container mx-auto mt-24 mb-40 pt-2">
      <h2 className="text-center font-mono font-bold text-4xl md:text-6xl mb-10">
        Contáctame
      </h2>
      <div className="w-[90%] m-auto mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        <p className="text-center text-gray-400 mb-6">
          Si deseas ponerte en contacto conmigo, puedes enviarme un correo electrónico directamente a:
        </p>
        <div className="text-center text-lg text-blue-500 mb-4">
          <a href="mailto:alcibiades.acosta.r@gmail.com">alcibiades.acosta.r@gmail.com</a>
        </div>
        <p className="text-center text-gray-400 mb-6">
          O también puedes escribirme directamente por WhatsApp:
        </p>
        <div className="text-center">
        
          <a
            href="https://wa.me/64570518" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            WhatsApp
          </a>
        </div>
        <p className="text-center text-gray-400 mt-8 mb-6">
          También puedes comunicarte conmigo a través de las siguientes redes sociales:
        </p>
        <div className="text-center">
        <i className="ri-linkedin-box-fill text-2xl text-blue-500"></i>
          <a
            href="https://www.linkedin.com/in/alcibiades-acosta/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mx-3"
          >
            LinkedIn
          </a>
          <i className="ri-instagram-line text-2xl text-pink-500"></i>
          <a
            href="https://www.instagram.com/aa_r2130/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline mx-3"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
