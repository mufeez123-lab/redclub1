import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
  const boxRef = useRef(null);

  useEffect(() => {
    const element = boxRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
          // markers: true, // enable to debug scroll triggers
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        margin: '100vh 0',
        padding: 40,
        backgroundColor: '#8a6c1a',
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
      }}
    >
      Scroll-triggered animation!
    </div>
  );
}
