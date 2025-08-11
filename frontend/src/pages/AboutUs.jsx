// src/pages/AboutUs.jsx
import React from "react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import logo from "/images/redclub.png";

export default function AboutUs() {
  return (
    <>
      <style>
        {`
          .font-playfair {
            font-family: 'Playfair Display', serif;
          }
        `}
      </style>

      <Navbar />
      <div
        className="bg-white min-h-screen mt-4 flex flex-col items-center pt-20 px-10 py-10"
        style={{
          backgroundImage: `url('/images/aboutback.png')`, // replace with your actual image path
          backgroundSize: "400%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Red Club Wedding Lounge Logo"
          className="w-32 h-auto mb-6"
        />

        {/* Title */}
        <h1 className="text-3xl mt-0 md:text-4xl font-playfair text-red-800 mb-8 text-center italic ">
          <span className="text-4xl text-bold">Red Club </span>
          <br></br>
          <span className=""> Wedding Lounge</span>
        </h1>

        {/* Text Container */}
        <div className="max-w-3xl space-y-6 text-center">
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Red Club Wedding Lounge is your premier destination for unforgettable
            wedding experiences. With three beautiful branches located in{" "}
            <span className="font-semibold">Uppala</span>,{" "}
            <span className="font-semibold">Mangalore</span>, and{" "}
            <span className="font-semibold">Deralakatte</span>, we bring
            world-class event spaces and unmatched hospitality to make your
            special day truly magical.
          </p>

          {/* More Information
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our expert team is dedicated to creating weddings that reflect your
            unique style and personality. From grand receptions to intimate
            gatherings, we provide everything you need — including premium décor,
            luxurious seating, exquisite catering options, and state-of-the-art
            lighting and sound. At Red Club Wedding Lounge, every detail is
            crafted with perfection so you can focus on making memories.
          </p> */}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
