import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoginModal from '../components/Login'; // Adjust path if needed


gsap.registerPlugin(ScrollTrigger);

export default function CollectionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // track login status

  // Refs for animations
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const infoRef = useRef(null);

  // Mock collections data
  const collections = [
    {
      id: '1',
      title: 'Sheherwani',
      buyPrice: 15000,
      rentPrice: 2500,
      image: '/images/sheh.jpg',
      description: 'Elegant traditional wear for weddings and special occasions.',
    },
    {
      id: '2',
      title: 'Designer Lehenga',
      buyPrice: 35000,
      rentPrice: 5000,
      image: '/images/lehenga.jpg',
      description: 'Gorgeous lehenga with intricate embroidery and fine fabric.',
    },
  ];

  const collection = collections.find(item => item.id === id);

  useEffect(() => {
    if (!collection) return;

    gsap.fromTo(
      imageRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      infoRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [collection]);

  if (!collection) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Collection not found</h2>
        <button
          onClick={() => navigate('/collections')}
          className="bg-[#800020] text-white px-4 py-2 rounded hover:bg-[#a8324b] transition"
        >
          Back to Collections
        </button>
      </div>
    );
  }

  const handleBookNow = () => {
    if (!isLoggedIn) {
      setIsLoginOpen(true); // open login modal
    } else {
      navigate(`/booking/${id}`); // go to booking
    }
  };

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto p-8">
      <button
        onClick={() => navigate('/')}
        style={{ backgroundColor: '#8a6c1a' }}
        className="mb-6 text-white px-4 py-2 rounded hover:bg-[#a8324b] transition"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <img
          ref={imageRef}
          src={collection.image}
          alt={collection.title}
          className="w-full md:w-1/2 h-auto object-cover rounded opacity-0"
        />

        <div ref={infoRef} className="md:w-1/2 opacity-0">
          <h1 className="text-4xl font-bold mb-4 font-playfair">{collection.title}</h1>

          <div className="flex flex-col gap-2 mb-4">
            <p className="text-red-600 font-medium text-base">
              Buy: ₹{collection.buyPrice.toLocaleString()}
            </p>
            <p className="text-green-600 font-medium text-base">
              Rent: ₹{collection.rentPrice.toLocaleString()}
            </p>
          </div>

          <button
            onClick={handleBookNow}
            style={{ backgroundColor: '#8a6c1a' }}
            className="mb-6 px-6 py-2 text-white rounded font-semibold hover:bg-[#a8324b] transition"
          >
            Book Now
          </button>

          <p className="text-gray-700 leading-relaxed">{collection.description}</p>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={() => {
          setIsLoggedIn(true);
          setIsLoginOpen(false);
          navigate(`/booking/${id}`);
        }}
      />

    </div>
   
  );
}
