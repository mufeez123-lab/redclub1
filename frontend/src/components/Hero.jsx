import { useState, useEffect } from 'react';

export default function Hero() {
  const images = ['/images/red1.jpg', '/images/red2.jpg', '/images/red3.jpg'];

  return (
    <>
      <style>{`
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-200vw); }
        }
        .slidingBackgrounds {
          display: flex;
          width: 300vw;
          animation: slideLeft 30s linear infinite;
        }
           .font-playfair {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      <section className="relative h-screen overflow-hidden">
        <div className="slidingBackgrounds absolute inset-0">
          {images.map((img, i) => (
            <div
              key={i}
              className="w-screen h-full bg-cover bg-center flex-shrink-0"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 max-w-4xl mx-auto text-center space-y-4">
          <img src="/images/redclub.png" alt="Redclub Logo" className="w-40 sm:w-56 mx-auto" />
          <h1 className="text-4xl sm:text-6xl font-playfair italic leading-tight max-w-full">
            Celebrate Your Special Day in Style with Redclub
          </h1>
        </div>
      </section>
    </>
  );
}
