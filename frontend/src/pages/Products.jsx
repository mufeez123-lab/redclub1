import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Products() {
  const navigate = useNavigate();
  const [locationFilter, setLocationFilter] = useState('');
  const smootherRef = useRef(null);

  const collections = [
    {
      id: 1,
      title: 'Sheherwani',
      buyPrice: 4999,
      rentPrice: 999,
      location: 'Deralakatte',
      image: '/images/sheh.jpg',
    },
    {
      id: 2,
      title: 'Jodhpuri',
      buyPrice: 8999,
      rentPrice: 1999,
      location: 'Uppala',
      image: '/images/blazzers.jpg',
    },
    {
      id: 3,
      title: 'Kurtha',
      buyPrice: 2999,
      rentPrice: 799,
      location: 'Deralakatte',
      image: '/images/kurta.jpg',
    },
    {
      id: 4,
      title: 'Wedding shoes',
      buyPrice: 2999,
      rentPrice: 699,
      location: 'Mangalore',
      image: '/images/shoes.jpg',
    },
    {
      id: 5,
      title: 'Blazzers',
      buyPrice: 2999,
      rentPrice: 699,
      location: 'Mangalore',
      image: '/images/jodh.jpg',
    },
  ];

  // Filter collections based on locationFilter (case-insensitive, partial match)
  const filteredCollections = collections.filter(collection =>
    collection.location.toLowerCase().includes(locationFilter.toLowerCase())
  );

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
    <div id="smooth-wrapper" style={{ height: '100vh', overflow: 'hidden' }}>
      <div id="smooth-content">
        <style>{`
          .font-playfair {
            font-family: 'Playfair Display', serif;
          }
        `}</style>

        <section className="py-12 px-4 max-w-6xl mx-auto min-h-[37.5rem]">

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            style={{ backgroundColor: '#8a6c1a' }}
            className="mb-4 px-4 py-2 rounded text-white hover:bg-[#a8324b] transition"
          >
            ← Back
          </button>

          {/* Location Filter Input */}
          <div className="mb-8 max-w-sm mx-auto">
            <input
              type="text"
              placeholder="Add your location..."
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8a6c1a]"
            />
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredCollections.length > 0 ? (
              filteredCollections.map(({ id, title, image, buyPrice, rentPrice, location }) => (
                <motion.div
                  key={id}
                  className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer bg-white"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full aspect-square sm:h-[28rem] sm:aspect-auto object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-center font-playfair">{title}</h3>

                    <p className="text-center text-red-700 font-bold mt-2">
                      Buy Price: ₹{buyPrice.toLocaleString()}
                    </p>
                    <p className="text-center text-green-700 font-bold">
                      Rent Price: ₹{rentPrice.toLocaleString()}
                    </p>

                    <p className="text-center text-gray-700 mt-2 font-medium">{location}</p>

                    <button
                      type="button"
                      style={{ backgroundColor: '#8a6c1a' }}
                      className="mt-4 w-full text-white py-2 rounded font-semibold hover:bg-[#a8324b] transition"
                      onClick={() => navigate(`/collections/${id}`)}
                    >
                      View Product
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-600">No products found for this location.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
