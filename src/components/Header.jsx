import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-800 to-blue-700 text-center text-white">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-indigo-600">MyWebsite</h1>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/about" className="hover:text-indigo-600">About Us</Link>
          <Link to="/services" className="hover:text-indigo-600">Services</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
