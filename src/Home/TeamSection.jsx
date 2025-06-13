import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const teamMembers = [
  {
    name: "Pensive-Tesla",
    role: "Instructor",
    image: "https://i.ibb.co/n8MS3s8H/mui.webp",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Anjelina Watson",
    role: "Instructor",
    image: "https://i.ibb.co/wZHN6fhR/999bebca-ae1e-44cd-8864-fdcd350d7034.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Brendan Fraser",
    role: "Instructor",
    image: "https://i.ibb.co/MygfQNB5/muiii.webp",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "David Konnor",
    role: "Instructor",
    image: "https://i.ibb.co/3mBpHrx8/team-thumb1.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];
const TeamSection = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-green-50 to-purple-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Educate Awesome <span className="text-[#1EC28E]">Team</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md text-center flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-[#1EC28E]"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-[#1EC28E] text-sm mb-4">{member.role}</p>
              <button className="mb-4 cursor-pointer px-4 py-2 text-sm border rounded-full hover:bg-[#1EC28E] hover:text-white transition">
                View Portfolio
              </button>
              <div className="flex gap-4 text-gray-500 text-lg">
                <a href={member.socials.facebook}>
                  <FaFacebookF className="text-[#1EC28E]"/>
                </a>
                <a href={member.socials.twitter}>
                  <FaTwitter className="text-[#1EC28E]" />
                </a>
                <a href={member.socials.linkedin}>
                  <FaLinkedinIn className="text-[#1EC28E]"/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
