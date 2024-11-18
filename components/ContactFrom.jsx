"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "business",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you shortly.", {
      duration: 4000,
      position: "top-center",
    });
    setFormData({
      name: "",
      email: "",
      purpose: "business",
      message: "",
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=85.296221,27.698798,85.298221,27.700798&layer=mapnik&marker=27.699798,85.297221&zoom=18"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          className="w-full h-full"
        />
      </div>

      <div className="space-y-8">
        <div className="bg-purple-50 p-4 md:p-6 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="tel:+9779851401349"
            className="flex items-center space-x-3 hover:bg-purple-100 p-2 rounded-lg transition-colors cursor-pointer"
          >
            <div className="bg-purple-600 p-2 rounded-full flex-shrink-0">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div className="min-w-0">
              <p className="font-medium">Call us</p>
              <p className="text-purple-800 truncate">+977 9851401349</p>
            </div>
          </a>

          <a
            href="mailto:info@mayamatrixtech.com"
            className="flex items-center space-x-3 hover:bg-purple-100 p-2 rounded-lg transition-colors cursor-pointer"
          >
            <div className="bg-purple-600 p-2 rounded-full flex-shrink-0">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div className="min-w-0">
              <p className="font-medium">Email us</p>
              <p className="text-purple-800 truncate">
                info@mayamatrixtech.com
              </p>
            </div>
          </a>

          <div className="flex items-center space-x-3 p-2">
            <div className="bg-purple-600 p-2 rounded-full flex-shrink-0">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div className="min-w-0">
              <p className="font-medium">Visit us</p>
              <p className="text-purple-800 truncate">Tahachal, Kathmandu</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Purpose</label>
            <select
              value={formData.purpose}
              onChange={(e) =>
                setFormData({ ...formData, purpose: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            >
              <option value="business">Business Proposal</option>
              <option value="career">Join Our Team</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transform hover:scale-[1.02] transition-all duration-300 font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
