import { CircleArrowRight, CircleArrowUp, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="bg-gray-900 text-white py-12 px-6 md:px-16">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* <!-- Get in Touch --> */}
          <div>
            <h2 class="text-xl font-semibold mb-4">Get in Touch</h2>
            <p class="text-gray-300 mb-2">
              Educate the ultimate destination for
            </p>
            <p class="text-gray-300 mb-2">We are committed to transforming</p>
            <p class="text-gray-300 mb-4">without standards</p>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-green-500 text-xl">📞</span>
              <span class="font-semibold text-lg">+123 (4567) 890</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-green-500 text-xl">✉️</span>
              <span class="text-gray-300">mosaraf.cse8.bu@gmail.com</span>
            </div>
          </div>

          {/* <!-- Online Platform --> */}
          <div>
            <h2 class="text-xl font-semibold mb-4">Online Platform</h2>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-center gap-2"><CircleArrowRight className="text-[#1EC28E]" />  About Us</li>
              <li class="flex items-center gap-2"><CircleArrowRight className="text-[#1EC28E]" />  Our Courses</li>
              <li class="flex items-center gap-2"><CircleArrowRight className="text-[#1EC28E]" />  Instructors</li>
              <li class="flex items-center gap-2"><CircleArrowRight className="text-[#1EC28E]" />  Enroll Now</li>
              <li class="flex items-center gap-2"><CircleArrowRight className="text-[#1EC28E]" />  Career</li>
            </ul>
          </div>

          {/* <!-- Quick Links --> */}
          <div>
            <h2 class="text-xl font-semibold mb-4">Quick Links</h2>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-center gap-2"><CircleArrowRight className="text-[#1EC28E]" /> Latest Blog</li>
              <li class="flex items-center gap-2"><CircleArrowRight className="text-[#1EC28E]" />  Our Galary</li>
              <li class="flex items-center gap-2"><CircleArrowRight className="text-[#1EC28E]" />  Contact Us</li>
              <li class="flex items-center gap-2"><CircleArrowRight className="text-[#1EC28E]" />  Privacy Policy</li>
              <li class="flex items-center gap-2"><CircleArrowRight className="text-[#1EC28E]" /> FAQ’s</li>
            </ul>
          </div>

          {/* <!-- Recent Posts --> */}
          <div>
            <div className="">
              <h3 className="mb-4 text-xl font-bold uppercase tracking-wider text-white">
                Contact Us
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-primary" />
                  <span>mosaraf.cse8.bu@.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-primary" />
                  <span>01873176838</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                  <span>University Of Barishal, Barishal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
