"use client";
import React, { useEffect, useState } from "react";

const styles = {
  fullscreenVideo: {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
    fontFamily: '"Montserrat", sans-serif',
  },
  video: {
    filter: "grayscale(100%) brightness(40%)",
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  videoTextOverlay: {
    position: "absolute",
    left: "8vw",
    bottom: "50vh",
    zIndex: 7,
    color: "#fff",
    fontSize: "30px",
    lineHeight: "32px",
    fontWeight: 600,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  blueText: {
    color: "#F59E0B",
    fontSize: "2.2rem",
  },
  textSlider: {
    display: "inline-block",
    textTransform: "none",
    fontWeight: 800,
    letterSpacing: "1px",
  },
  slide: {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    opacity: 0,
    position: "absolute",
    top: 0,
  },
  slideCurrent: {
    opacity: 1,
    position: "relative",
  },
};

const slideTitles = [
  "Web Design",
  "Web Development",
  "Branding",
  "Online Marketing",
  "Search Engine Optimization",
  "WordPress Templates",
  "WordPress Plugins",
  "Data Driven Apps",
  "E-Commerce Store Websites",
  "Content Management",
  "Clean and Simple Websites",
  "Full Stack Apps",
  "Frontend Development",
  "Backend Development",
  "Jamstack Apps",
];

const Video = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slideTitles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[100vw] h-[80vh] font-sans overflow-hidden">
      <video
        className="absolute z-0 w-full h-[80vh] object-cover brightness-60"
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="https://bosscreative.com/wp-content/themes/parada/videos/home/boss_home_video.jpg"
      >
        <source
          src="https://bosscreative.com/wp-content/themes/parada/videos/home/boss_home_video_1.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute z-10 w-full h-[80vh] object-cover bg-black/60 backdrop-blur-sm"></div>
      <div className="relative flex flex-col justify-center items-center h-full w-full z-10">
        <div className="videoTextOverlay text-white text-center px-4 lg:px-8">
          <p className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2.5">
            We&apos;re <span className="text-amber-500">Experts</span> in :
          </p>
          <p className="text-amber-500 mt-4 mb-4 text-2xl md:text-4xl lg:text-4xl">
            {slideTitles[currentSlide]}
          </p>
          <div className="px-[20%] max-w-4xl font-light sm:text-sm md:text-base lg:text-lg lg:px-[12%]  ">
            We build modern, blazing fast, scalable, e-commerce stores, data
            driven websites that rank higher on search engines, and generate
            more leads for your business.
          </div>
          <div className="sm:hidden md:hidden lg:block">
            {/* <Emblem text="Mohamed*Nabil*Hafez*" /> */}
          </div>
        </div>
        <div className="w-[33vw] mx-auto grid sm:grid-rows-1 sm:gap-2 lg:grid-cols-2 lg:gap-2 lg:mt-5">
          <button className="border-solid border-2 border-white rounded-sm w-full pt-3 pl-4 pr-6 pb-3 text-white hover:bg-amber-500/70 hover:text-white">
            Get Started
          </button>
          <button className="border-solid border-2 border-white rounded-sm w-full pt-3 pl-4 pr-6 pb-3 text-white hover:bg-amber-500/70 hover:text-white">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
