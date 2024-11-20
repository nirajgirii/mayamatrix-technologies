"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Award, Users, Target, Zap } from "lucide-react";

const Counter = ({ end, title, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const duration = 2000;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.min(Math.floor(end * progress), end));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end]);

  return (
    <motion.div
      ref={counterRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center 
      transform hover:scale-105 transition-all duration-300 
      border border-purple-100 shadow-lg hover:shadow-2xl group"
    >
      <div className="mb-4">
        <Icon
          className="mx-auto text-purple-600 
          group-hover:rotate-12 transition-transform duration-300 
          group-hover:scale-110"
          size={40}
        />
      </div>
      <h4
        className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 
      bg-clip-text text-transparent mb-2"
      >
        {count}+
      </h4>
      <p className="text-gray-700 font-medium">{title}</p>
    </motion.div>
  );
};

export default function About() {
  const teamMembers = [
    {
      name: "Sudip Osti",
      role: "Co Founder",
      image: "/imageCofounderOne.png",
    },
    {
      name: "Baibhav Basnet",
      role: "Co Founder",
      image: "/imageCofounderTwo.png",
    },
    {
      name: "Hari Ram",
      role: "Sound Engineer",
      image: "/imageSoundEngineer.png",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white via-purple-50 to-pink-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 
          bg-clip-text text-transparent mb-6"
          >
            About MayaMatrix
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into digital experiences through innovative sound
            and technology solutions
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <div className="relative group overflow-hidden rounded-3xl">
              <div
                className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 
    rounded-3xl opacity-75 blur-lg group-hover:opacity-100 
    transition duration-1000"
              ></div>

              <Image
                src="/mayamatrix-team.jpg"
                alt="MayaMatrix Team"
                width={700}
                height={500}
                className="relative rounded-3xl transform group-hover:scale-105 
    transition duration-500 object-cover"
              />

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent 
  opacity-0 group-hover:opacity-100 transition-opacity duration-500 
  flex items-center justify-center"
              >
                <div className="text-center text-white p-8 max-w-xl">
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    MayaMatrix Technologies
                  </h3>
                  <p className="text-sm md:text-base opacity-80 leading-relaxed">
                    A dynamic team of creative technologists, sound engineers,
                    and digital innovators dedicated to transforming complex
                    ideas into extraordinary digital experiences. We blend
                    cutting-edge technology with artistic vision to deliver
                    solutions that inspire and engage.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-3 bg-white/20 backdrop-blur-sm 
        rounded-full text-white border border-white/30 
        hover:bg-white/30 transition duration-300"
                  >
                    Learn More About Our Team
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square group"
                >
                  <div
                    className="w-full h-full p-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 
      group-hover:rotate-6 group-hover:scale-105"
                  >
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-300 
            group-hover:scale-110 group-hover:brightness-50"
                      />

                      {/* Overlay content */}
                      <div
                        className="absolute inset-0 flex flex-col justify-center items-center 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 
          bg-gradient-to-t from-purple-900/70 to-transparent"
                      >
                        <div
                          className="text-center text-white p-4 transform translate-y-10 
            group-hover:translate-y-0 transition-transform duration-300"
                        >
                          <h4 className="text-[10px] md:text-l font-bold mb-2">
                            {member.name}
                          </h4>
                          <p className="text-[10px] md:text-sm opacity-80">
                            {member.role}
                          </p>
                          <div className="mt-3 flex justify-center space-x-3">
                            <motion.a
                              href="#"
                              whileHover={{ scale: 1.2 }}
                              className="text-white hover:text-purple-200"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                              </svg>
                            </motion.a>
                            <motion.a
                              href="#"
                              whileHover={{ scale: 1.2 }}
                              className="text-white hover:text-purple-200"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                              </svg>
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 
            shadow-xl hover:shadow-2xl transition duration-300 border border-purple-100"
            >
              <h3
                className="text-3xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-600 to-pink-500 mb-4"
              >
                Who We Are
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                MayaMatrix is a cutting-edge technology company that bridges
                creativity and innovation. We specialize in crafting digital
                experiences that blend sound, design, and technology to tell
                unique stories.
              </p>
            </div>

            <div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 
            shadow-xl hover:shadow-2xl transition duration-300 border border-purple-100"
            >
              <h3
                className="text-3xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-600 to-pink-500 mb-4"
              >
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                To empower businesses and creators by delivering innovative
                digital solutions that push the boundaries of technology and
                creativity. We believe in transforming complex ideas into
                intuitive, impactful experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <Counter end={100} title="Projects Completed" icon={Award} />
              <Counter end={50} title="Happy Clients" icon={Users} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
