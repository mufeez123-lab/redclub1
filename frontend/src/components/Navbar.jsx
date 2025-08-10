import { useState } from 'react';
import LoginModal from './Login'; // adjust path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [showLogin, setShowLogin] = useState(false); // login modal

  return (
    <>
      <nav className="shadow-md" style={{ backgroundColor: '#800020', color: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo with image */}
          <div className="flex items-center cursor-pointer space-x-3">
            <img src="/images/redclub.png" alt="Redclub Logo" className="h-14 w-auto" />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <a href="/products" className="hover:text-yellow-300">Products</a>
            <a href="/about" className="hover:text-yellow-300">About</a>
            <a href="/contact" className="hover:text-yellow-300">Contact</a>
          </div>

          {/* Login button + Mobile menu button */}
          <div className="flex items-center space-x-4">
            {/* Login Button */}
            <button
              className="bg-transparent border border-[#FFD6DA] text-[#FFD6DA] px-4 py-2 rounded hover:bg-[#A8324B] transition"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden px-4 pt-2 pb-4 space-y-2" style={{ backgroundColor: '#7B1E2D' }}>
            <a href="/" className="block hover:text-yellow-300">Home</a>
            <a href="/products" className="block hover:text-yellow-300">Products</a>
            <a href="/about" className="block hover:text-yellow-300">About</a>
            <a href="/contact" className="block hover:text-yellow-300">Contact</a>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
}
