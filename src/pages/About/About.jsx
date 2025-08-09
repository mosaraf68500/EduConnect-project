import React from "react";
import { BookOpen, Globe, Star, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      {/* Heading */}
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About <span className="text-[#1EC28E]">EduConnected</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          EduConnected is a global online tutor booking platform that connects learners 
          with expert tutors across various languages and subjects. We make learning 
          simple, secure, and accessible for everyone — anywhere, anytime.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
        {[
          {
            title: "🎯 Our Mission",
            text: "To make quality education accessible to everyone by connecting them with skilled tutors worldwide."
          },
          {
            title: "🚀 Our Vision",
            text: "To become the leading global platform for personalized and interactive learning experiences."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-50 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-[#1EC28E]">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Key Features */}
      <div className="mt-16 max-w-6xl mx-auto">
        <motion.h3
          className="text-2xl font-bold text-gray-800 text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Why Choose EduConnected?
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { icon: Globe, title: "Global Tutors", desc: "Access experienced tutors from different countries and cultures." },
            { icon: BookOpen, title: "Diverse Subjects", desc: "Learn languages, academics, skills, and more from experts." },
            { icon: ShieldCheck, title: "Secure Booking", desc: "Enjoy safe payments and verified tutor profiles." },
            { icon: Star, title: "Trusted Reviews", desc: "Read honest feedback from real students before booking." },
            { icon: Users, title: "Community Learning", desc: "Join a global network of learners and educators." }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition transform hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <feature.icon className="w-10 h-10 text-[#1EC28E] mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <button className="bg-[#1EC28E] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#7de1c1] transition duration-300">
          Start Learning Now
        </button>
      </motion.div>
    </section>
  );
};

export default About;
