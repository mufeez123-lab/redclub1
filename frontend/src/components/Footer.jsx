// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <>
    <style>
        {`
          .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        `}
    </style>
    <footer className="bg-black text-black py-6 md:py-10 mt-10" 
    style={{ backgroundColor: '#cebc8aff' }}>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-sm md:text-base">
        
       {/* Logo & About */}
        <div>
          <img 
            src="/images/redclub.png" 
            alt="RedClub Wedding Lounge Logo" 
            className="h-14 w-auto mb-2 md:mb-3"
          />
          <p className="mt-2 md:mt-3 font-playfair italic text-black text-xs md:text-sm leading-relaxed" >
            Crafting unforgettable wedding experiences with elegance, luxury, and tradition.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
            Quick Links
          </h3>
          <ul className="space-y-1 md:space-y-2">
            <li><Link to="/" className="hover:text-yellow-300 transition duration-300">Home</Link></li>
            <li><Link to="/products" className="hover:text-yellow-300 transition duration-300">Collections</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300 transition duration-300">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300 transition duration-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
            Contact Us
          </h3>
          <p className="flex items-center gap-2 text-xs md:text-sm">
            <Phone size={16} /> +91 63625 14956
          </p>
          <p className="flex items-center gap-2 text-xs md:text-sm mt-1">
            <Mail size={16} /> mufizmalar@gmail.com
          </p>

          <div className="flex gap-3 mt-3">
            <a href="#" className="hover:text-yellow-300"><Facebook size={18} /></a>
            <a href="#" className="hover:text-yellow-300"><Instagram size={18} /></a>
            <a href="#" className="hover:text-yellow-300"><Twitter size={18} /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-6 md:mt-8 pt-3 md:pt-4 text-center text-xs md:text-sm text-gray-800">
        © {new Date().getFullYear()} RedClub Wedding Lounge. All Rights Reserved.
      </div>
    </footer>
    </>
  );
}
