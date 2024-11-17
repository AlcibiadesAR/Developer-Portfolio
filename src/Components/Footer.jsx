function Footer() {
  return (
    <footer className="bg-gray-900 font-quantico text-white py-4 mt-2">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Desarrollado con pasión y dedicación por <span className="text-red-500">Alcibiades Acosta</span> | Copyright &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
