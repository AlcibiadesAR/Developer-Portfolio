function Footer() {
  return (
    <footer className="bg-gray-900 font-quantico text-white py-4 mt-2">
      <div className="container m-auto text-center">
        <p className="text-sm text-center px-10 md:px-8">
          Desarrollado por <a href="/" className="text-red-500">Alcibiades Acosta</a> | {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
