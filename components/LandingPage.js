import { Music, Code, Smartphone, Palette } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="pt-16">
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Welcome to MayaMatrix Technologies
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
          Creating better digital products through Sound and Technology
        </p>
      </section>

      <section id="services" className="py-20 bg-white text-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Music className="h-12 w-12" />}
              title="Sound Design"
            />
            <ServiceCard
              icon={<Code className="h-12 w-12" />}
              title="Web Development"
            />
            <ServiceCard
              icon={<Smartphone className="h-12 w-12" />}
              title="Mobile Apps"
            />
            <ServiceCard
              icon={<Palette className="h-12 w-12" />}
              title="Graphic Design"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-purple-100 text-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-xl text-center">
            MayaMatrix is the leading global technology services company. We
            create better digital products that help to bring your brand to life
            through Sound and Technology.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white text-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="text-center">
            <p className="mb-2">
              <strong>Call us:</strong> +977 9851401349
            </p>
            <p className="mb-2">
              <strong>Email us:</strong> info@mayamatrixtech.com
            </p>
            <p>
              <strong>Visit us:</strong> Tahachal, Kathmandu
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title }) {
  return (
    <div className="bg-purple-100 p-6 rounded-lg text-center transition-transform duration-300 hover:scale-105">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}
