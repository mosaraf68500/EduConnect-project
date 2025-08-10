import { CircleArrowRight, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-900 text-white py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-4">
          {/* Get in Touch */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-2">
              Educate the ultimate destination for
            </p>
            <p className="text-gray-300 mb-2">
              We are committed to transforming
            </p>
            <p className="text-gray-300 mb-4">without standards</p>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-green-500 text-xl">📞</span>
              <span className="font-semibold text-lg">+8801783176838</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✉️</span>
              <span className="text-gray-300">mosaraf.cse8.bu@gmail.com</span>
            </div>
          </div>

          {/* Online Platform */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Online Platform</h2>
            <ul className="space-y-2 text-gray-300">
              {[
                
                { name: "Find Tutor", path: "/find-tutors" },
                { name: "Add Tutorials", path: "/add-tutorials" },
                { name: "My Tutorials", path: "/my-tutorials" },
                
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 hover:text-[#1EC28E] hover:underline transition"
                  >
                    <CircleArrowRight className="text-[#1EC28E]" size={20} />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-300">
              {[
               { name: "About Us", path: "/about" },
                { name: "My Booked Tutors", path: "/my-booked-tutors" },
                { name: "Contact Us", path: "/contact" },
                
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 hover:text-[#1EC28E] hover:underline transition"
                  >
                    <CircleArrowRight className="text-[#1EC28E]" size={20} />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-4 text-xl font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3 cursor-pointer hover:text-[#1EC28E] hover:underline transition">
                <Mail className="mt-0.5 h-4 w-4 text-[#1EC28E]" size={20} />
                <span>mosaraf.cse8.bu@.com</span>
              </li>
              <li className="flex items-start gap-3 cursor-pointer hover:text-[#1EC28E] hover:underline transition">
                <Phone className="mt-0.5 h-4 w-4 text-[#1EC28E]" size={20} />
                <span>01873176838</span>
              </li>
              <li className="flex items-start gap-3 cursor-pointer hover:text-[#1EC28E] hover:underline transition">
                <MapPin className="mt-0.5 h-4 w-4 text-[#1EC28E]" size={20} />
                <span>University Of Barishal, Barishal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar with Social Icons */}
        <div className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center border-t border-y-gray-400 pt-4">
          <p className="text-md">
            © 2025 <span className="text-[#1EC28E]">Educate</span>. Designed By
            Mosaraf Hossen
          </p>
          <div className="flex space-x-1">
            <Link className="p-2 rounded-full hover:bg-[#1EC28E] transition-colors duration-300">
              <FaInstagram size={22} />
            </Link>
            <Link className="p-2 rounded-full hover:bg-[#1EC28E] transition-colors duration-300">
              <FaFacebook size={22} />
            </Link>
            <Link className="p-2 rounded-full hover:bg-[#1EC28E] transition-colors duration-300">
              <FaTwitter size={22} />
            </Link>
            <Link className="p-2 rounded-full hover:bg-[#1EC28E] transition-colors duration-300">
              <FaLinkedinIn size={22} />
            </Link>
            <Link className="p-2 rounded-full hover:bg-[#1EC28E] transition-colors duration-300">
              <FaGithub size={22} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
