"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slideTitles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[100vw] h-[80vh] font-sans overflow-hidden top-0">
      <video
        className="absolute z-0 w-[100vw] h-[80vh] object-cover brightness-60"
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/images/services-bg.png"
      >
        <source src="/images/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute z-10 w-full h-[80vh] object-cover bg-black/60 backdrop-blur-sm"></div>
      <div className="relative flex flex-col justify-center items-center h-full w-[100vw] z-10 sm:px-4">
        <div className="videoTextOverlay text-white md:text-center lg:text-center sm:text-left lg:px-8">
          <p className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2.5">
            <span className="text-white">We&apos;re </span>Experts in :
          </p>
          <p className="text-sky-400 font-semibold mt-4 mb-4 text-2xl md:text-4xl lg:text-4xl">
            {slideTitles[currentSlide]}
          </p>
          <div className="px-[4%] max-w-4xl font-light sm:mb-8 sm:text-sm md:text-base lg:text-lg lg:px-[12%] sm:px-0 ">
            We build modern, blazing fast, scalable, e-commerce stores, data
            driven websites that rank higher on search engines, and generate
            more leads for your business.
          </div>
          <div className="sm:hidden md:hidden lg:block">
            {/* <Emblem text="Mohamed*Nabil*Hafez*" /> */}
          </div>
        </div>
        <div className="w-[90vw] mx-auto flex flex-col text-left md:justify-center md:flex md:flex-row gap-2">
          <button
            onClick={() => router.push("/client-intake")}
            className="font-black w-[300px] border-solid border-2 border-sky-600 rounded-md pt-3 pl-4 pr-6 pb-3 bg-gradient-to-r from-sky-200 to-sky-300 hover:text-white"
          >
            <span className="flex flex-row justify-center items-center">
              Get Started{" "}
            </span>
          </button>
          <button
            onClick={() => router.push("/services")}
            className="font-black w-[300px] border-solid border-2 border-sky-600 rounded-md pt-3 pl-4 pr-6 pb-3 text-white hover:bg-gradient-to-r from-sky-200 to-sky-300 hover:text-black"
          >
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
