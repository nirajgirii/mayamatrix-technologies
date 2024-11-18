"use client";

import { useState, useRef, useEffect } from "react";
import ContactForm from "./ContactFrom";
import { Music, Code, Smartphone, Palette } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import About from "./About";
const heroImages = [
  "/hero-image-1.jpg",
  "/hero-image-2.jpg",
  "/hero-image-3.jpg",
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleSwipe = (e) => {
      if (e.deltaX > 50) {
        setCurrentSlide((prev) =>
          prev === 0 ? heroImages.length - 1 : prev - 1
        );
      } else if (e.deltaX < -50) {
        setCurrentSlide((prev) =>
          prev === heroImages.length - 1 ? 0 : prev + 1
        );
      }
    };

    const slideElement = slideRef.current;
    if (slideElement) {
      slideElement.addEventListener("wheel", handleSwipe, { passive: false });
    }

    return () => {
      if (slideElement) {
        slideElement.removeEventListener("wheel", handleSwipe);
      }
    };
  }, []);

  useEffect(() => {
    let touchStartX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchStartX - touchEndX > 50) {
        setCurrentSlide((prev) =>
          prev === heroImages.length - 1 ? 0 : prev + 1
        );
      } else if (touchEndX - touchStartX > 50) {
        setCurrentSlide((prev) =>
          prev === 0 ? heroImages.length - 1 : prev - 1
        );
      }
    };

    const slideElement = slideRef.current;
    if (slideElement) {
      slideElement.addEventListener("touchstart", handleTouchStart);
      slideElement.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (slideElement) {
        slideElement.removeEventListener("touchstart", handleTouchStart);
        slideElement.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  return (
    <div className="md:pt-16">
      <section
        className="relative h-[90vh] md:h-screen overflow-hidden"
        ref={slideRef}
      >
        {heroImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-all duration-1000 transform ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <Image
              src={img}
              alt={`Hero image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
              className="animate-ken-burns"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/40 to-black/80">
          <div className="h-full flex flex-col items-center justify-center px-4 max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              <div className="animate-float">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white tracking-tight animate-fade-up">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-pink-400 hover:to-purple-400 transition-all duration-500">
                    MayaMatrix
                  </span>
                  <span className="block mt-2 text-white text-shadow-glow">
                    Technologies
                  </span>
                </h1>
              </div>

              <p className="text-2xl sm:text-3xl md:text-4xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-up delay-200 font-light">
                Creating better digital products through
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                  {" "}
                  Sound
                </span>{" "}
                and
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-semibold">
                  {" "}
                  Technology
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 animate-fade-up delay-300">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="group relative px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 font-bold text-base sm:text-xl shadow-lg hover:shadow-2xl"
                >
                  <span className="absolute inset-0 w-full h-full animate-pulse rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                  Get Started
                </button>

                <button
                  onClick={() => scrollToSection("about")}
                  className="group px-8 sm:px-12 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-full hover:border-purple-400 hover:text-purple-400 transition-all transform hover:scale-105 font-bold text-base sm:text-xl backdrop-blur-sm"
                >
                  Learn More
                </button>
              </div>

              <div className="mt-12 animate-bounce-slow">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-sm font-medium">
                      Explore Our Services
                    </span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-10 bg-gradient-to-r from-purple-400 to-pink-400"
                  : "w-3 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      <section
        id="services"
        className="py-20 bg-gradient-to-b from-white via-purple-50 to-pink-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Transforming ideas into digital reality with our comprehensive
              suite of services
            </p>
          </motion.div>

          <div className="space-y-12 text-gray-700">
            <ServiceCard
              icon={<Music className="h-8 w-8" />}
              title="Sound Design"
              description="Elevate your brand with our cutting-edge sound design services. We create immersive audio experiences that resonate with your audience and bring your vision to life."
              imageSrc="/sound-design.jpg"
              imageAlt="Sound Design Studio"
              reverse={false}
              textColor="text-gray-800"
            />
            <ServiceCard
              icon={<Code className="h-8 w-8" />}
              title="Web Development"
              description="Transform your online presence with our expert web development services. We build responsive, user-friendly websites that drive engagement and deliver results."
              imageSrc="/web-development.jpg"
              imageAlt="Web Development Process"
              reverse={true}
              textColor="text-gray-800"
            />
            <ServiceCard
              icon={<Smartphone className="h-8 w-8" />}
              title="Mobile Apps"
              description="Bring your ideas to life with our innovative mobile app development. We create intuitive, feature-rich applications that captivate users and drive business growth."
              imageSrc="/mobile-apps.jpg"
              imageAlt="Mobile App Development"
              reverse={false}
              textColor="text-gray-800"
            />
            <ServiceCard
              icon={<Palette className="h-8 w-8" />}
              title="Graphic Design"
              description="Make a lasting impression with our creative graphic design services. From logos to marketing materials, we craft visually stunning designs that communicate your brand's essence."
              imageSrc="/graphic-design.jpg"
              imageAlt="Graphic Design Process"
              reverse={true}
              textColor="text-gray-800"
            />
          </div>
        </div>
      </section>

      <About />

      <section id="contact" className="py-10 md:py-20 bg-white text-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
            Contact Us
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse,
}) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-4 md:gap-8`}
    >
      <div className="w-full md:w-1/2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left mt-4 md:mt-0">
        <div className="mb-2 md:mb-4">{icon}</div>
        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{title}</h3>
        <p className="text-base md:text-lg">{description}</p>
      </div>
    </div>
  );
}
