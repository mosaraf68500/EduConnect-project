import React from "react";
import { useNavigate } from "react-router";
import {
  BookOpen,
  Languages,
  Landmark,
  Library,
  Globe,
  School,
  Building2,
  Mountain,
  ArrowRight,
} from "lucide-react";

const categories = [
  { title: "English tutors", icon: BookOpen },
  { title: "Spanish tutors",  icon: Languages },
  { title: "French tutors",  icon: Landmark },
  { title: "German tutors", icon: Library },
  { title: "Italian tutors", icon: Building2 },
  { title: "Chinese tutors", icon: Globe },
  { title: "Arabic tutors", icon: School },
  { title: "Japanese tutors", icon: Mountain },
  { title: "Portuguese tutors", icon: Landmark },
];

const LanguageCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Category section will be</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map(({ title, icon: Icon }, index) => (
          <div
            key={index}
            onClick={() => navigate("/find-tutors")}
            className="flex items-center justify-between border border-[#1EC28E] p-4 rounded-lg cursor-pointer hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3">
              <Icon className="w-6 h-6  text-[#1EC28E]" />
              <div>
                <h3 className="font-semibold">{title}</h3>
                
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#1EC28E]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguageCategories;
