"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const Counter = ({ end, title }) => {
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
    <div
      ref={counterRef}
      className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
    >
      <h4 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        {count}+
      </h4>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

export default function About() {
  return (
    <section
      id="about"
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
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bringing innovation and creativity together
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-75 blur-lg md:group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative">
                <Image
                  src="/about-us.jpg"
                  alt="MayaMatrix Team"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl md:transform md:group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent rounded-xl opacity-0 md:group-hover:opacity-100 transition duration-500"></div>
              </div>
            </div>

            {/* Update the team images grid */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square md:hover:scale-105"
                >
                  <Image
                    src={`/team-${index}.jpg`}
                    alt={`Team ${index}`}
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">
                Who We Are
              </h3>
              <p className="text-gray-700 leading-relaxed">
                MayaMatrix is the leading global technology services company,
                dedicated to creating better digital products that bring your
                brand to life through Sound and Technology. With our team of
                expert developers, designers, and sound engineers, we offer a
                unique blend of creativity and technical expertise.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to empower businesses with innovative digital
                solutions that drive growth and enhance user experiences. From
                web and mobile app development to sound design and graphic
                creation, we're committed to delivering excellence in every
                project we undertake.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <Counter end={100} title="Projects Completed" />
              <Counter end={50} title="Happy Clients" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
