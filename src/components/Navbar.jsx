import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/toyota-logo.png';

const Navbar = () => {
    return (
        <header class="w-full bg-white border-b text-black border-gray-200 ">
            <div class="max-w-[1440px] h-[80px] mx-auto px-6 py-3 flex items-center justify-between">


                <div class="flex items-center gap-2">
                    <img src={logo} alt="Toyota" class="w-10" />
                    <span class="font-bold text-lg">TOYOTA</span>
                </div>

                <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
                    <Link to="/" class="hover:text-red-600">Home</Link>
                    <Link to="/about" class="hover:text-red-600">About Us</Link>
                    <Link to="/car-leasing" class="hover:text-red-600">Car Leasing</Link>
                    <Link to="/new-cars" class="hover:text-red-600">New Cars</Link>
                    <Link to="/used-cars" class="hover:text-red-600">Used Cars</Link>
                    <Link to="/service" class="hover:text-red-600">Service</Link>
                    <Link to="/accessories" class="hover:text-red-600">Accessories</Link>
                    <Link to="/more" class="hover:text-red-600">More</Link>
                </nav>


                <div class="flex items-center gap-4">

                    <select class="border border-gray-300 rounded px-2 py-1 text-sm">
                        <option>English</option>
                        <option>Deutsch</option>
                    </select>

                    <button class="bg-red-600 text-white px-4 py-2 text-sm font-semibold rounded hover:bg-red-700 transition">
                        Contact Us
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Navbar;