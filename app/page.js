"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState([]);
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    // Generate stars only on the client side
    const generatedStars = Array.from({ length: 200 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3}px`,
      delay: `${Math.random() * 2}s`,
      duration: `${Math.random() * 3 + 1}s`,
    }));
    setStars(generatedStars);

    // Track mouse movement
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Show/Hide "Go to Top" button on scroll
    const handleScroll = () => {
      setShowGoToTop(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleEnter = () => {
    setEntered(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main
      onClick={!entered ? handleEnter : undefined}
      className={`min-h-screen relative ${
        entered
          ? "bg-gradient-to-br from-purple-600 to-blue-500 text-white"
          : "backdrop-blur-md bg-gradient-to-br from-purple-600 to-blue-500 text-white overflow-hidden"
      }`}
    >
      {/* Cursor light effect */}
      <div
        className="pointer-events-none fixed w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
          transform: `translate(${mousePosition.x - 200}px, ${
            mousePosition.y - 200
          }px)`,
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* Stars background */}
      {stars.length > 0 && (
        <div className="stars-container absolute inset-0">
          {stars.map((star, i) => (
            <div
              key={i}
              className="star absolute rounded-full bg-white"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                animation: `twinkle ${star.duration} infinite ${star.delay}`,
              }}
            />
          ))}
        </div>
      )}

      {/* Initial Enter Button */}
      <div
        className={`absolute inset-0 ${
          entered ? "opacity-0 pointer-events-none" : "opacity-100"
        } transition-opacity duration-500`}
      >
        <div className="flex items-center justify-center min-h-screen">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleEnter();
            }}
            className="px-6 py-3 text-lg font-bold text-white bg-transparent border-2 border-white rounded-full transition-all duration-300 hover:bg-white hover:text-purple-600 hover:scale-110"
          >
            Enter MayaMatrix Technology World
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`absolute inset-0 ${
          entered ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-500`}
      >
        <Navbar />
        <LandingPage />
      </div>

      {/* Go to Top Button */}
      {showGoToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-purple-600 text-white rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-purple-700"
        >
          ↑
        </button>
      )}
    </main>
  );
}
