import React from 'react';
import logo from '../assets/toyota-logo.png';
const Footer = () => {
    return (
        <footer class="bg-[#f5f5f5] text-black py-20">
            <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">


                <div>

                    <div class="flex items-center gap-4 mb-8">
                        <img src={logo} class="w-16" />
                        <h2 class="text-4xl font-bold tracking-wide">TOYOTA</h2>
                    </div>


                    <h3 class="text-4xl font-semibold mb-3">
                        Don’t Miss a Thing
                    </h3>


                    <p class="text-gray-500 mb-8 text-lg">
                        Subscribe to our newsletter for exclusive deals and updates.
                    </p>


                    <div class="flex items-center border border-red-500 rounded-full overflow-hidden max-w-lg">
                        <input
                            type="email"
                            placeholder="Enter email address for newsletter ..."
                            class="flex-1 px-6 py-4 bg-transparent outline-none text-gray-700"
                        />
                        <button class="px-6 text-xl text-gray-600 hover:text-black transition">
                            →
                        </button>
                    </div>
                </div>


                <div class="flex flex-col justify-between">


                    <div class="grid grid-cols-3 gap-10">


                        <div>
                            <h4 class="text-lg font-semibold mb-4">Quick Link</h4>
                            <ul class="space-y-3 text-gray-600">
                                <li><a href="#" class="hover:text-red-500">About us</a></li>
                                <li><a href="#" class="hover:text-red-500">Who we are</a></li>
                                <li><a href="#" class="hover:text-red-500">Contact Us</a></li>
                            </ul>
                        </div>


                        <div>
                            <h4 class="text-lg font-semibold mb-4">The Cars</h4>
                            <ul class="space-y-3 text-gray-600">
                                <li><a href="#" class="hover:text-red-500">How it works</a></li>
                                <li>
                                    <a href="#" class="text-blue-600 underline">
                                        Pick a car
                                    </a>
                                </li>
                                <li><a href="#" class="hover:text-red-500">FAQs</a></li>
                            </ul>
                        </div>


                        <div>
                            <h4 class="text-lg font-semibold mb-4">Social Media</h4>
                            <ul class="space-y-3 text-gray-600">
                                <li><a href="#" class="hover:text-red-500">Facebook</a></li>
                                <li><a href="#" class="hover:text-red-500">Instagram</a></li>
                                <li><a href="#" class="hover:text-red-500">Twitter</a></li>
                            </ul>
                        </div>

                    </div>


                    <div class="flex items-center justify-between mt-12">
                        <p class="text-gray-500 text-sm">
                            Copyright © 2025 dummy. All rights reserved.
                        </p>


                        <button
                            onclick="window.scrollTo({top:0, behavior:'smooth'})"
                            class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition"
                        >
                            ↑
                        </button>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;