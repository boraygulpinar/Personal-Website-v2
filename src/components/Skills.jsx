import React, { useState } from "react";
import { motion } from "framer-motion";
import skillsBackground from "../assets/skillsBackground.jpg";

const skillData = [
  {
    name: "React.js",
    category: "Frontend",
    icon: <span className="text-4xl">⚛️</span>,
  },
  {
    name: "Redux",
    category: "Frontend",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000"
        alt="Redux"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "HTML5 / CSS3",
    category: "Frontend",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
        alt="HTML5 / CSS3"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=FnnFuAIw4e8j&format=png&color=000000"
        alt="Tailwind CSS"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=g9mmSxx3SwAI&format=png&color=000000"
        alt="Bootstrap"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "Axios",
    category: "Frontend",
    icon: (
      <img
        src="https://img.icons8.com/clouds/100/000000/cloud.png" // Cloud icon from icons8
        alt="Axios"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "jQuery",
    category: "Frontend",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=zh7me4lnKerp&format=png&color=000000"
        alt="jQuery"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: ".NET Core (MVC & Web API)",
    category: "Backend",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=1BC75jFEBED6&format=png&color=000000"
        alt=".NET Core (MVC, Web API)"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "Entity Framework Core",
    category: "Backend",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=o0pte3XTuPWi&format=png&color=000000"
        alt="Entity Framework Core"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=ouWtcsgDBiwO&format=png&color=000000"
        alt="Node.js"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "RESTful API Development",
    category: "Backend",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=55497&format=png&color=000000"
        alt="RESTful API Development"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "JWT Authentication",
    category: "Backend",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=55137&format=png&color=000000"
        alt="JWT Authentication"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "C#",
    category: "Languages",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=Fycm8TUhWmFU&format=png&color=000000"
        alt="C#"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "JavaScript",
    category: "Languages",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
        alt="JavaScript (ES6+)"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "Microsoft SQL Server (MsSQL)",
    category: "Database",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000"
        alt="Microsoft SQL Server (MsSQL)"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "Git & Github",
    category: "Tools",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000"
        alt="Git & Github"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "Postman",
    category: "Tools",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=QEQQKirln6Tf&format=png&color=000000"
        alt="Postman"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "Swagger",
    category: "Tools",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=rdKV2dee9wxd&format=png&color=000000"
        alt="Swagger"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "npm",
    category: "Tools",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=24895&format=png&color=000000"
        alt="npm"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "SQL Server Management Studio (SSMS)",
    category: "Tools",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000"
        alt="SQL Server Management Studio (SSMS)"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "Visual Studio & Visual Studio Code",
    category: "Tools",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000"
        alt="Visual Studio & Visual Studio Code"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "VPS Hosting",
    category: "Platforms",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=RTzKObSNY4VG&format=png&color=000000"
        alt="VPS Hosting"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "Cloudflare",
    category: "Platforms",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=13682&format=png&color=000000"
        alt="Cloudflare"
        className="w-10 h-10"
      />
    ),
  },
];

const categories = [
  "Show All",
  "Frontend",
  "Backend",
  "Languages",
  "Database",
  "Tools",
  "Platforms",
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const filteredSkills =
    selectedCategory === "Show All"
      ? skillData
      : skillData.filter((skill) => skill.category === selectedCategory);
  return (
    <motion.div
      initial={{ opacity: 0, x: 80, backgroundColor: "#000" }}
      animate={{ opacity: 1, x: 0, backgroundColor: "#000" }}
      exit={{ opacity: 0, x: -80, backgroundColor: "#000" }}
      transition={{ duration: 0.18, type: "tween", ease: "easeInOut" }}
      className="bg-black min-h-screen font-sans antialiased"
    >
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden flex items-center justify-center">
        <img
          src={skillsBackground}
          alt="Skills"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center">
            <h1 className="mb-6 max-w-4xl text-5xl font-bold md:text-7xl text-white">
              Skills & Expertise
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-300 md:text-2xl">
              A brief summary of my technical skills and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mt-8 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === cat
                ? "bg-white text-black"
                : "bg-black text-white border border-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="bg-black border border-white rounded-xl p-3 flex flex-col items-center justify-center shadow-md min-h-[80px]"
          >
            <div className="flex items-center gap-2 mb-1">
              {skill.icon}
              <span className="text-lg font-bold text-white text-center break-words">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
// ...existing code...

export default Skills;
