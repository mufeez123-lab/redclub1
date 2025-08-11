import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Login from '../components/Login';
import Collections from '../components/Collections';
import Footer from '../components/Footer';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const smootherRef = useRef(null);

  useEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',      
      content: '#smooth-content',       
      effects: true,
    });

    return () => {
      smootherRef.current?.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
   <>
  <Navbar />
  <div id="smooth-wrapper" style={{ overflow: 'hidden' }}>
    <div id="smooth-content">
      <div className="hero-content">
        <Hero />
      </div>

      <Collections />

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowLogin(true)}
          className="bg-[#800020] text-white px-6 py-2 rounded hover:bg-[#a8324b] transition"
        >
          Login / Sign Up
        </button>
      </div>

      <Login isOpen={showLogin} onClose={() => setShowLogin(false)} />

      {/* Footer at the very end */}
      <Footer />
    </div>
  </div>
</>

  );
}
