import { motion, AnimatePresence } from "framer-motion";
import { Music, Code, Smartphone, Palette } from "lucide-react";
import { useState, useEffect } from "react";

const services = [
  {
    id: "soundDesign",
    title: "Sound Design",
    icon: <Music className="h-8 w-8" />,
    description:
      "Elevate your brand with immersive audio experiences that resonate with your audience and bring your vision to life.",
    categories: [
      {
        name: "Music Production",
        tech: [
          "Pro Tools",
          "Ableton Live",
          "Logic Pro X",
          "Studio Hardware",
          "MIDI Controllers",
          "Mixing Consoles",
        ],
        details:
          "Professional music production with industry-standard tools and techniques for pristine audio quality.",
      },
      {
        name: "Sound Effects",
        tech: [
          "Kontakt",
          "Native Instruments",
          "Waves Plugins",
          "Sound Libraries",
          "Foley Recording",
          "Sound Forge",
        ],
        details:
          "Custom sound effect creation and design for multimedia projects and interactive experiences.",
      },
      {
        name: "Voice Over",
        tech: [
          "Neumann Mics",
          "Acoustic Treatment",
          "Audio Interfaces",
          "DAWs",
          "iZotope RX",
          "Soundproofing",
        ],
        details:
          "Professional voice recording and processing for commercials, animations, and narrative content.",
      },
    ],
  },
  {
    id: "webDev",
    title: "Web Development",
    icon: <Code className="h-8 w-8" />,
    description:
      "Transform your online presence with cutting-edge web solutions that drive engagement and deliver results.",
    categories: [
      {
        name: "Frontend",
        tech: [
          "React",
          "Next.js",
          "TailwindCSS",
          "TypeScript",
          "Three.js",
          "Framer Motion",
          "Redux",
        ],
        details:
          "Modern, responsive frontend development with the latest frameworks and technologies.",
      },
      {
        name: "Backend",
        tech: [
          "Node.js",
          "Python",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "GraphQL",
          "AWS Lambda",
        ],
        details:
          "Robust backend solutions with scalable architecture and efficient data management.",
      },
      {
        name: "Full Stack",
        tech: [
          "MERN Stack",
          "AWS",
          "Docker",
          "Kubernetes",
          "CI/CD",
          "Microservices",
          "Security",
        ],
        details:
          "End-to-end web development with modern stack and cloud infrastructure.",
      },
    ],
  },
  {
    id: "mobileApps",
    title: "Mobile Apps",
    icon: <Smartphone className="h-8 w-8" />,
    description:
      "Create powerful mobile experiences that captivate users and drive business growth.",
    categories: [
      {
        name: "Android",
        tech: [
          "Kotlin",
          "Java",
          "Android SDK",
          "Firebase",
          "Jetpack Compose",
          "Material Design",
          "Room DB",
        ],
        details:
          "Native Android development with modern architecture and material design principles.",
      },
      {
        name: "iOS",
        tech: [
          "Swift",
          "SwiftUI",
          "Xcode",
          "CoreData",
          "ARKit",
          "Metal",
          "TestFlight",
        ],
        details:
          "Native iOS development leveraging the latest Apple technologies and design guidelines.",
      },
      {
        name: "Cross Platform",
        tech: [
          "React Native",
          "Flutter",
          "Expo",
          "Native Modules",
          "MobX",
          "Firebase",
          "Analytics",
        ],
        details:
          "Efficient cross-platform development for maximum reach with native performance.",
      },
    ],
  },
  {
    id: "design",
    title: "Graphic Design",
    icon: <Palette className="h-8 w-8" />,
    description:
      "Make a lasting impression with visually stunning designs that communicate your brand's essence.",
    categories: [
      {
        name: "UI/UX",
        tech: [
          "Figma",
          "Adobe XD",
          "Sketch",
          "InVision",
          "Principle",
          "Zeplin",
          "ProtoPie",
        ],
        details:
          "User-centered design with focus on usability, accessibility, and visual appeal.",
      },
      {
        name: "Branding",
        tech: [
          "Illustrator",
          "Photoshop",
          "After Effects",
          "InDesign",
          "Brand Guidelines",
          "Logo Design",
          "Typography",
        ],
        details:
          "Comprehensive branding solutions that establish strong visual identity.",
      },
      {
        name: "Motion",
        tech: [
          "After Effects",
          "Cinema 4D",
          "Blender",
          "Premier Pro",
          "DaVinci Resolve",
          "Mocha",
          "Trapcode",
        ],
        details:
          "Dynamic motion graphics and animations that bring stories to life.",
      },
    ],
  },
];
export default function ServicesSection() {
  const [selectedCategories, setSelectedCategories] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Set default selections on component mount
  useEffect(() => {
    const defaultSelections = {};
    services.forEach((service) => {
      defaultSelections[service.id] = service.categories[0];
    });
    setSelectedCategories(defaultSelections);

    // Check if it's a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Automatic shuffling for mobile devices
  useEffect(() => {
    let shuffleInterval;

    if (isMobile) {
      shuffleInterval = setInterval(() => {
        setSelectedCategories((prev) => {
          const newSelections = { ...prev };

          services.forEach((service) => {
            const currentCategoryIndex = service.categories.findIndex(
              (cat) => cat.name === prev[service.id].name
            );

            // Cycle to the next category
            const nextIndex =
              (currentCategoryIndex + 1) % service.categories.length;
            newSelections[service.id] = service.categories[nextIndex];
          });

          return newSelections;
        });
      }, 5000);
    }

    return () => {
      if (shuffleInterval) clearInterval(shuffleInterval);
    };
  }, [isMobile]);

  const handleCategorySelect = (serviceId, category) => {
    // Only allow manual selection on non-mobile devices
    if (!isMobile) {
      setSelectedCategories((prev) => ({
        ...prev,
        [serviceId]: category,
      }));
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-12 md:mb-16"
        >
          Our Services
        </motion.h2>

        <div className="space-y-12 md:space-y-20">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              selectedCategory={selectedCategories[service.id]}
              onCategorySelect={(category) =>
                handleCategorySelect(service.id, category)
              }
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  selectedCategory,
  onCategorySelect,
  isMobile,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex flex-col lg:flex-row gap-6 md:gap-8"
    >
      {/* Left Card */}
      <div className="lg:w-1/2">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
          <motion.div
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white">
              {service.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
              {service.title}
            </h3>
          </motion.div>

          <p className="text-gray-600 mb-6 md:mb-8">{service.description}</p>

          <div className="flex flex-col gap-3">
            {service.categories.map((category) => (
              <motion.button
                key={category.name}
                whileHover={!isMobile ? { scale: 1.02, x: 5 } : undefined}
                whileTap={!isMobile ? { scale: 0.98 } : undefined}
                onClick={() => onCategorySelect(category)}
                className={`px-4 md:px-6 py-3 md:py-4 rounded-lg font-medium text-left transition-all duration-300 ${
                  selectedCategory?.name === category.name
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="lg:w-1/2">
        <AnimatePresence mode="wait">
          {selectedCategory && (
            <motion.div
              key={selectedCategory.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-xl h-full"
            >
              <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                {selectedCategory.name}
              </h4>

              <p className="text-gray-600 mb-6">{selectedCategory.details}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {selectedCategory.tech.map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.03 }}
                    className="p-3 md:p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-sm md:text-base text-gray-800 font-medium">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
