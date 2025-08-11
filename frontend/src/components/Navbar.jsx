import { useState } from 'react';
import LoginModal from './Login'; // adjust path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [showLogin, setShowLogin] = useState(false); // login modal

  return (
    <>
      <nav
        className="shadow-md fixed top-0 left-0 w-full z-50"
        style={{ backgroundColor: '#f7f7f7ff', color: 'black' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo with image */}
          <div className="flex items-center cursor-pointer space-x-3">
            <img src="/images/redclub.png" alt="Redclub Logo" className="h-14 w-auto" />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-yellow-300 transition duration-300">Home</a>
            <a href="/products" className="hover:text-yellow-300 transition duration-300">Products</a>
            {/* <a href="/about" className="hover:text-yellow-300 transition duration-300">About</a> */}
            <a href="/contact" className="hover:text-yellow-300 transition duration-300">Contact</a>
          </div>

          {/* Login button + Mobile menu button */}
          <div className="flex items-center space-x-4">
            {/* Login Button */}
            <button
              className="bg-transparent border border-black text-[#FFD6DA] px-4 py-2 rounded hover:bg-[#A8324B] transition"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none relative w-6 h-6"
                aria-label="Toggle menu"
              >
                {/* Close (X) icon */}
                <svg
                  className={`absolute top-0 left-0 w-6 h-6 transition-all duration-500 ease-in-out
                    ${isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-90'}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>

                {/* Hamburger icon */}
                <svg
                  className={`absolute top-0 left-0 w-6 h-6 transition-all duration-500 ease-in-out
                    ${isOpen ? 'opacity-0 scale-75 -rotate-90' : 'opacity-100 scale-100 rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu with smooth animation */}
        <div
          className={`md:hidden px-4 overflow-hidden transition-all duration-500 ease-in-out`}
          style={{
            backgroundColor: '#ffffffff',
            maxHeight: isOpen ? '500px' : '0px',
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div className="pt-2 pb-4 space-y-2">
            <a href="/" className="block hover:text-yellow-300 transition duration-300">Home</a>
            <a href="/products" className="block hover:text-yellow-300 transition duration-300">Products</a>
            <a href="/about" className="block hover:text-yellow-300 transition duration-300">About</a>
            <a href="/contact" className="block hover:text-yellow-300 transition duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
}
