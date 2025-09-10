import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/background2.jpg";

const Home = () => {
  const [repoCount, setRepoCount] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/users/boraygulpinar/repos")
      .then((res) => res.json())
      .then((data) => setRepoCount(data.length));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 80, backgroundColor: "#000" }}
      animate={{ opacity: 1, x: 0, backgroundColor: "#000" }}
      exit={{ opacity: 0, x: -80, backgroundColor: "#000" }}
      transition={{ duration: 0.18, type: "tween", ease: "easeInOut" }}
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center pt-10 px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#000",
      }}
    >
      <img
        src={backgroundImage}
        alt="Background"
        className="hidden"
        loading="lazy"
      />
      <h1 className="gotham-font text-white text-5xl md:text-7xl font-bold mb-6 text-center max-w-xl">
        Boray Gülpınar
      </h1>
      <p className="text-gray-300 text-lg md:text-2xl mb-8 text-center max-w-xl">
        Full-stack developer passionate about improving himself in the software
        world.
      </p>
      <div className="w-full max-w-2xl mx-auto flex items-center justify-center mb-8 px-4">
        <span className="flex items-center text-base md:text-lg text-gray-200 font-medium">
          <i className="fa-solid fa-code text-green-400 text-xl md:text-2xl mr-2"></i>
          Working on .NET and React technologies.
        </span>
      </div>
      <div className="flex gap-3 mt-2">
        <a
          href="https://github.com/boraygulpinar"
          target="_blank"
          className="bg-white rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-gray-200 transition"
          title="GitHub"
        >
          <i className="fab fa-github text-black text-2xl md:text-3xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/boray-gulpinar/"
          target="_blank"
          className="bg-white rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-gray-200 transition"
          title="LinkedIn"
        >
          <i className="fab fa-linkedin text-black text-2xl md:text-3xl"></i>
        </a>
        <a
          href="https://x.com/borayxd"
          target="_blank"
          className="bg-white rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-gray-200 transition"
          title="Twitter"
        >
          <i className="fa-brands fa-square-x-twitter text-black text-2xl md:text-3xl"></i>
        </a>
        <a
          href="mailto:boray112@gmail.com"
          target="_blank"
          className="bg-white rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-gray-200 transition"
          title="Mail"
        >
          <i className="fas fa-envelope text-black text-2xl md:text-3xl"></i>
        </a>
        <a
          href="https://www.instagram.com/boraygulpinar/"
          target="_blank"
          className="bg-white rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-gray-200 transition"
          title="Instagram"
        >
          <i className="fa-brands fa-square-instagram text-black text-2xl md:text-3xl"></i>
        </a>
      </div>
    </motion.div>
  );
};

export default Home;
