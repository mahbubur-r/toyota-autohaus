import React, { useState } from 'react';
import { Link } from 'react-router';
import logo from '../assets/toyota-logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header className="w-full bg-white border-b text-black border-gray-200 relative z-50">
      <div className="max-w-[1440px] h-auto min-h-[80px] mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Toyota" className="w-10" />
          <span className="font-bold text-lg">TOYOTA</span>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="flex md:hidden items-center gap-4">
          <select
            onChange={handleLanguageChange}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value="en">English</option>
            <option value="de">Deutsch</option>
          </select>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-red-600 focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-md font-medium text-gray-700">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <Link to="/about" className="hover:text-red-600">About Us</Link>
          <Link to="/car-leasing" className="hover:text-red-600">Car Leasing</Link>
          <Link to="/new-cars" className="hover:text-red-600">New Cars</Link>
          <Link to="/used-cars" className="hover:text-red-600">Used Cars</Link>
          <Link to="/service" className="hover:text-red-600">Service</Link>
          <Link to="" className="hover:text-red-600">Accessories</Link>
          <Link to="" className="hover:text-red-600">More</Link>
        </nav>

        {/* Right Side (Desktop) */}
        <div className="hidden md:flex items-center gap-4">

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

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-md py-4 px-6 flex flex-col gap-4">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-600">Home</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-600">About Us</Link>
          <Link to="/car-leasing" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-600">Car Leasing</Link>
          <Link to="/new-cars" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-600">New Cars</Link>
          <Link to="/used-cars" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-600">Used Cars</Link>
          <Link to="/service" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-600">Service</Link>
          <Link to="" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-600">Accessories</Link>
          <Link to="" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-600">More</Link>

          <button className="bg-red-600 text-white px-4 py-2 text-center text-sm font-semibold rounded hover:bg-red-700 transition w-full mt-2">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;