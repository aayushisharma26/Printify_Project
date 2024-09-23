import React from "react";

const Navbar = () => {
    // Function to toggle the mobile menu
    const toggleMenu = () => {
        const menu = document.getElementById("mobileMenu");
        menu.classList.toggle("hidden");
    };

    return (
        <div className="bg-white shadow-md">
            <div className="flex items-center justify-between mx-auto max-w-6xl h-20 px-4">
                {/* Logo Section */}
                <div className="flex-none">
                    <h1 className="text-2xl font-bold">
                        <a className="text-[#39b75d]" href="https://printify.com/" rel="Home" title="logo">
                            Printify
                        </a>
                    </h1>
                </div>

                {/* Menu for large screens */}
                <div className="hidden md:flex flex-1 items-center justify-center">
                    <ul className="flex font-medium items-center gap-8 text-gray-600">
                        <li>
                            <a href="/" className="hover:text-[#39b75d]" aria-label="Category">Catalog</a>
                        </li>
                        <li className="relative group">
                            <a href="#" className="hover:text-[#39b75d] cursor-pointer" aria-label="How it works">
                                How it works
                            </a>
                            <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded z-10 opacity-0 transform scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transition-all duration-300 ease-out">
                                <a href="https://printify.com/how-it-works/" className="block px-4 py-2 text-gray-600 hover:text-[#39b75d]">How Printify Works</a>
                                <a href="https://printify.com/print-on-demand/" className="block px-4 py-2 text-gray-600 hover:text-[#39b75d]">Print On Demand</a>
                                <a href="https://printify.com/the-printify-quality-promise/" className="block px-4 py-2 text-gray-600 hover:text-[#39b75d]">Printify Quality Promise</a>
                                <a href="https://printify.com/the-printify-quality-promise/" className="block px-4 py-2 text-gray-600 hover:text-[#39b75d]">What to Sell</a>

                            </div>
                        </li>
                        <li>
                            <a href="/browse" className="hover:text-[#39b75d]" aria-label="Pricing">Pricing</a>
                        </li>
                        <li>
                            <a href="/browse" className="hover:text-[#39b75d]" aria-label="Blog">Blog</a>
                        </li>
                        <li className="relative group">
                            <a href="#" className="hover:text-[#39b75d] cursor-pointer" aria-label="Services">Services</a>
                            <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded z-10 opacity-0 transform scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transition-all duration-300 ease-out">
                                <a href="https://printify.com/printify-studio/" className="block px-4 py-2 text-gray-600 hover:text-[#39b75d]">Printify Studio</a>
                                <a href="/service-2" className="block px-4 py-2 text-gray-600 hover:text-[#39b75d]">Printify Express Delivery</a>
                            </div>
                        </li>
                        <li>
                            <a href="/browse" className="hover:text-[#39b75d]" aria-label="Use Case">Use Case</a>
                        </li>
                        <li className="relative group">
                            <a href="#" className="hover:text-[#39b75d] cursor-pointer" aria-label="Need help?">Need help?</a>
                            <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded z-10 opacity-0 transform scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transition-all duration-300 ease-out">
                                <a href="/faq" className="block px-4 py-2 text-gray-600 hover:text-[#39b75d]">FAQ</a>
                                <a href="/contact-us" className="block px-4 py-2 text-gray-600 hover:text-[#39b75d]">Contact Us</a>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Log In/Sign Up for large screens */}
                <div className="hidden md:flex items-center gap-2 ml-8">
                    <a href="/login">
                        <button className="border border-[#39b75d] text-black px-4 py-2 rounded hover:bg-[#39b75d] hover:text-white transition duration-300">Log In</button>
                    </a>
                    <a href="/signup">
                        <button className="bg-[#39b75d] text-black px-4 py-2 rounded hover:bg-[#6EC207] hover:text-white transition duration-300">Sign Up</button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-black" onClick={toggleMenu}>
                        {/* Icon for hamburger menu */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div id="mobileMenu" className="md:hidden hidden">
                <ul className="block text-gray-600">
                    <li className="border-b">
                        <a href="/" className="block px-4 py-2 hover:text-[#39b75d]">Catalog</a>
                    </li>
                    <li className="border-b">
                        <a href="#" className="block px-4 py-2 hover:text-[#39b75d]">How it works</a>
                    </li>
                    <li className="border-b">
                        <a href="/browse" className="block px-4 py-2 hover:text-[#39b75d]">Pricing</a>
                    </li>
                    <li className="border-b">
                        <a href="/browse" className="block px-4 py-2 hover:text-[#39b75d]">Blog</a>
                    </li>
                    <li className="border-b">
                        <a href="#" className="block px-4 py-2 hover:text-[#39b75d]">Services</a>
                    </li>
                    <li className="border-b">
                        <a href="/browse" className="block px-4 py-2 hover:text-[#39b75d]">Use Case</a>
                    </li>
                    <li className="border-b">
                        <a href="#" className="block px-4 py-2 hover:text-[#39b75d]">Need help?</a>
                    </li>
                    <li className="border-b">
                        <a href="/login" className="block px-4 py-2 hover:text-[#39b75d]">Log In</a>
                    </li>
                    <li>
                        <a href="/signup" className="block px-4 py-2 hover:text-[#39b75d]">Sign Up</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
