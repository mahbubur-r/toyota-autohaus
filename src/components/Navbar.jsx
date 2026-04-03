import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/toyota-logo.png';

const Navbar = () => {

  const handleLanguageChange = (e) => {
    const lang = e.target.value;

    setTimeout(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
      }
    }, 300);
  };

  return (
    <header className="w-full bg-white border-b text-black border-gray-200">
      <div className="max-w-[1440px] h-[80px] mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Toyota" className="w-10" />
          <span className="font-bold text-lg">TOYOTA</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <Link to="/about" className="hover:text-red-600">About Us</Link>
          <Link to="/car-leasing" className="hover:text-red-600">Car Leasing</Link>
          <Link to="/new-cars" className="hover:text-red-600">New Cars</Link>
          <Link to="/used-cars" className="hover:text-red-600">Used Cars</Link>
          <Link to="/service" className="hover:text-red-600">Service</Link>
          <Link to="" className="hover:text-red-600">Accessories</Link>
          <Link to="" className="hover:text-red-600">More</Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* LANGUAGE DROPDOWN (UNCHANGED UI) */}
          <select
            onChange={handleLanguageChange}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value="en">English</option>
            <option value="de">Deutsch</option>
          </select>

          {/* Hidden Google Translate */}
          <div id="google_translate_element" className="hidden"></div>

          {/* Button */}
          <button className="bg-red-600 text-white px-4 py-2 text-sm font-semibold rounded hover:bg-red-700 transition">
            Contact Us
          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;