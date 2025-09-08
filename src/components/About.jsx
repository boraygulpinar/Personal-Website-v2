import React from "react";
import aboutImage from "../assets/about.jpg";

const About = () => {
  return (
    <div className="bg-black min-h-screen font-sans antialiased">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <img
          src={aboutImage}
          alt="About Me"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center">
            <h1 className="mb-6 max-w-4xl text-5xl font-bold md:text-7xl text-white">
              About Me
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-300 md:text-2xl">
              Crafting digital experiences through code and creativity
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-white">My Journey</h2>
            <p className="mb-6 text-xl text-gray-400">
              I'm a passionate full-stack developer with expertise in creating
              beautiful, functional, and user-centered digital experiences.
            </p>
            <p className="mb-6 text-gray-400">
              With over 7 years of experience, I've worked on diverse projects
              ranging from e-commerce platforms to enterprise applications. I
              specialize in modern web technologies and love solving complex
              problems through clean, efficient code.
            </p>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={aboutImage}
              alt="Developer portrait"
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            <div className="w-full space-y-8">
              <h2 className="text-3xl font-bold text-white">Education</h2>
              <div className="relative">
                <div className="absolute bottom-0 left-8 top-0 hidden w-0.5 bg-gradient-to-b from-gray-500/50 via-gray-500/30 to-transparent md:block"></div>
                <div className="space-y-8">
                  {/* Example Education Item */}
                  <div className="group relative">
                    <div className="sticky top-24 z-10 ml-6 hidden h-4 w-4 rounded-full border-4 border-black bg-gray-500 shadow-lg transition-transform duration-300 group-hover:scale-125 md:block"></div>
                    <div className="rounded-lg border border-gray-500 bg-black-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 md:ml-16">
                      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-building2 h-5 w-5 text-white"
                              aria-hidden="true"
                            >
                              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                              <path d="M10 6h4"></path>
                              <path d="M10 10h4"></path>
                              <path d="M10 14h4"></path>
                              <path d="M10 18h4"></path>
                            </svg>
                            <h3 className="text-xl font-bold text-white">
                              Eskisehir Technical University
                            </h3>
                          </div>
                          <p className="text-base font-medium text-gray-400 underline">
                            Computer Engineering
                          </p>
                        </div>
                        <div className="flex flex-col gap-2 text-sm sm:items-end">
                          <div className="flex items-center gap-2 text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-calendar-days h-4 w-4"
                              aria-hidden="true"
                            >
                              <path d="M8 2v4"></path>
                              <path d="M16 2v4"></path>
                              <rect
                                width="18"
                                height="18"
                                x="3"
                                y="4"
                                rx="2"
                              ></rect>
                              <path d="M3 10h18"></path>
                              <path d="M8 14h.01"></path>
                              <path d="M12 14h.01"></path>
                              <path d="M16 14h.01"></path>
                              <path d="M8 18h.01"></path>
                              <path d="M12 18h.01"></path>
                              <path d="M16 18h.01"></path>
                            </svg>
                            <span>2018 - 2022</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-map-pin h-4 w-4"
                              aria-hidden="true"
                            >
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>Istanbul, Turkey</span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4 flex items-center gap-3">
                        <div>
                          <span className="text-white font-semibold text-lg">
                            GPA
                          </span>
                          <span className="ml-2 text-white font-bold text-lg">
                            3.09
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Diğer eğitimler için benzer divler ekleyebilirsin */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-black py-10 mt-10">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="flex gap-4 mb-4">
            <a
              href="https://github.com/boraygulpinar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-black w-12 h-12 transition-colors"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/boraygulpinar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-black w-12 h-12 transition-colors"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="mailto:boray@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-black w-12 h-12 transition-colors"
            >
              <i className="fas fa-envelope text-2xl"></i>
            </a>
            {/* Diğer sosyal ikonlar */}
          </div>
          <p className="text-center text-sm text-gray-500">
            © 2025 boraygulpinar.com. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
