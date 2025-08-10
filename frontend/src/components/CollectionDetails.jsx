import React, { useContext, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';  // Adjust path if needed
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CollectionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  // Refs for animated elements
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const infoRef = useRef(null);

  const collections = [
    {
      id: '1',
      title: 'Sheherwani',
      buyPrice: 4999,
      rentPrice: 999,
      location: 'Deralakatte',
      image: '/images/sheh.jpg',
      description:
        'Elegant Sheherwani perfect for weddings and traditional occasions. Crafted with premium fabric and intricate embroidery.',
    },
    {
      id: '2',
      title: 'Jodhpuri',
      buyPrice: 8999,
      rentPrice: 1999,
      location: 'Uppala',
      image: '/images/blazzers.jpg',
      description:
        'Stylish Blazers made for formal and casual wear. Comfortable fit and premium stitching for a sleek look.',
    },
    {
      id: '3',
      title: 'Kurtha',
      buyPrice: 2999,
      rentPrice: 799,
      location: ' Mangalore',
      image: '/images/kurta.jpg',
      description:
        'Traditional Kurtha designed for daily wear and festive events. Breathable fabric with beautiful patterns.',
    },
    {
      id: '4',
      title: 'Wedding shoes',
      buyPrice: 2999,
      rentPrice: 699,
      location: 'Uppala',
      image: '/images/shoes.jpg',
      description:
        'Perfect wedding shoes combining comfort and style. Designed to complete your wedding look flawlessly.',
    },
    {
      id: '5',
      title: 'Blazzers',
      buyPrice: 2999,
      rentPrice: 699,
      location: 'Uppala',
      image: '/images/jodh.jpg',
      description:
        'Perfect wedding blazzers combining comfort and style. Designed to complete your wedding look flawlessly.',
    },
  ];

  const collection = collections.find(item => item.id === id);

  useEffect(() => {
    if (!containerRef.current) return;

    // Animate image sliding in from left
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
          // markers: true, // Uncomment to debug
        },
      }
    );

    // Animate info sliding in from right
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
          // markers: true,
        },
      }
    );

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [id]);

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
    if (isLoggedIn) {
      alert(`Booking confirmed for ${collection.title}!`);
    } else {
      alert('Please login or register to book.');
      navigate('/login'); // Adjust if your login route differs
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
            <p className="text-gray-600 font-medium text-base">
              Location: {collection.location}
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
    </div>
  );
}
