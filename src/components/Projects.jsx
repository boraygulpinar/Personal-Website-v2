import projects from "../assets/projects.jpg";
import { motion } from "framer-motion";
import ftLandingPage from "../assets/ftLandingPage.png";
import personalWeb2 from "../assets/personalweb2.png";
import movieZone from "../assets/movieZone.jpeg";
import profilePage from "../assets/profilePage.png";
import storeApp from "../assets/storeApp.png";
import blogApp from "../assets/blogApp.png";
import myPortfolio from "../assets/myPortfolio.png";
import dynamicMVC from "../assets/dynamicMVC.png";
import valorantWiki from "../assets/valorantWiki.png";
import burgerClone from "../assets/burgerClone.png";
import dovizPng from "../assets/doviz.png";
import runninCube from "../assets/runninCube.png";
import banditGame from "../assets/bandit.png";
import flappyClone from "../assets/flappyClone.png";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Fitness Tracker",
      category: "Web Application",
      description:
        "A modern web application for tracking your personal workout journal, exercises, and progress. Easily log workouts, monitor your fitness journey, and visualize improvements over time.",
      image: ftLandingPage,
      link: "http://fitnesstracker.com.tr/",
      github: "https://github.com/boraygulpinar/FitnessTracker",
      tags: [
        "React",
        "Tailwind CSS",
        "Axios",
        "Chart.js",
        ".NET Core",
        "REST API",
        "JWT Authentication",
        "Entity Framework Core",
        ".NET Identity",
        "SQL Server",
        "Docker",
      ],
    },
    {
      id: 2,
      title: "Personal Website v2",
      category: "Profile Page",
      description:
        "A modern personal website to showcase my skills and projects. This is the advanced version of my first personal site project.",
      image: personalWeb2,
      link: "#",
      github: "https://github.com/boraygulpinar/Personal-Website-v2",
      tags: [
        "React",
        "Tailwind CSS",
        "Vite",
        "JavaScript",
        "Responsive Design",
      ],
    },
    {
      id: 3,
      title: "Movie Zone",
      category: "Web Application",
      description:
        "MovieZone is a platform that allows users to discover movie data, as well as add, update, and delete movies. You can also search by genre and view the complete movie list. This project includes an API developed with .NET Core and a frontend built with React.",
      image: movieZone,
      github: "https://github.com/boraygulpinar/MovieZone",
      link: "#",
      tags: [
        "React",
        ".NET Core",
        "REST API",
        "MsSQL",
        "Entity Framework Core",
        "Axios",
        "CRUD",
      ],
    },
    {
      id: 4,
      title: "Personal Website",
      category: "Profile Page",
      description:
        "A personal website designed to showcase my software development projects and information about me. It features a modern, responsive UI for an optimal experience on both desktop and mobile devices.",
      image: profilePage,
      github: "https://github.com/boraygulpinar/Personal-Website",
      link: "#",
      tags: [
        "React",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
        "Netlify",
      ],
    },
    {
      id: 5,
      title: "Valorant-Wiki",
      category: "Web Application",
      description:
        "A web application that provides detailed information about Valorant agents, weapons, maps, and other game content. It offers a user-friendly platform with dynamic data fetched from an external API and features a modern, responsive design.",
      image: valorantWiki,
      github: "https://github.com/boraygulpinar/valorant-wikipedia",
      link: "#",
      tags: [
        "React",
        "HTML5",
        "CSS",
        "JavaScript",
        "Axios",
        "External API",
        "Responsive Design",
      ],
    },
    {
      id: 6,
      title: "BlogApp",
      category: "Web Application",
      description:
        "This project is an ASP.NET Core application based on a membership system, where blog posts are shared in various categories. After registering on the site, users can comment and share blog posts.",
      image: blogApp,
      github: "https://github.com/boraygulpinar/BlogApp",
      link: "#",
      tags: [
        ".NET Core",
        "MVC",
        "REST API",
        "C#",
        "Entity Framework Core",
        "SQL Server",
        "CRUD",
        "Authentication",
        "Authorization",
      ],
    },
    {
      id: 7,
      title: "Store App & API",
      category: "Web Application",
      description:
        "A simple store application built with MVC and API architecture.",
      image: storeApp,
      github: "https://github.com/boraygulpinar/StoreApp",
      link: "#",
      tags: [
        "ASP.NET Core",
        "MVC",
        "REST API",
        "C#",
        "Entity Framework Core",
        "SQL Server",
        "CRUD",
        "Razor Pages",
      ],
    },
    {
      id: 8,
      title: "MyPortfolio",
      category: "Profile Page",
      description:
        "A portfolio website built with ASP.NET MVC, showcasing my projects and skills. It features a modern design, project listings, and user-friendly navigation.",
      image: myPortfolio,
      github: "https://github.com/boraygulpinar/MyPortfolio",
      link: "#",
      tags: [
        ".NET MVC",
        "C#",
        "Entity Framework Core",
        "SQL Server",
        "HTML",
        "CSS",
        "JavaScript",
        "Razor Pages",
      ],
    },
    {
      id: 9,
      title: "Dynamic CV Website",
      category: "Profile Page",
      description:
        "A dynamic CV website built with ASP.NET MVC, allowing users to create and manage their resumes online. The project features user-friendly interfaces and supports editing, updating, and organizing CV information efficiently.",
      image: dynamicMVC,
      github: "https://github.com/boraygulpinar/dynamic-cv-site-mvc",
      link: "#",
      tags: [
        ".NET MVC",
        "C#",
        "Entity Framework Core",
        "SQL Server",
        "HTML",
        "CSS",
        "JavaScript",
        "Linq",
        "Repository Pattern",
      ],
    },
    {
      id: 10,
      title: "BurgerYiyelim Clone",
      category: "Web Application",
      description:
        "A clone of the BurgerYiyelim website built with React. This project replicates the original site's design and functionality, allowing users to browse menus, customize orders, and experience a modern food ordering interface.",
      image: burgerClone,
      github: "https://github.com/boraygulpinar/react-burger",
      link: "#",
      tags: ["React", "JavaScript", "CSS", "Responsive Design"],
    },
    {
      id: 11,
      title: "Currency Exchange App",
      category: "Web Application",
      description:
        "A simple currency exchange tracking application built with React. Users can view real-time exchange rates and convert between different currencies through an intuitive and responsive interface. Data is fetched dynamically from an external API using Axios.",
      image: dovizPng,
      github: "https://github.com/boraygulpinar/react-doviz-kuru",
      link: "#",
      tags: [
        "React",
        "Axios",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "API Integration",
        "Real-Time Data",
      ],
    },
    {
      id: 12,
      title: "Runnin Cube",
      category: "Game",
      description:
        "A simple platformer game developed with Unity, featuring a running cube that navigates through obstacles and levels. The game offers engaging mechanics and smooth controls for an enjoyable experience.",
      image: runninCube,
      github: "https://github.com/boraygulpinar/Runnin-Cube",
      link: "#",
      tags: ["Unity", "C#", "Game Development", "2D Game", "Level Design"],
    },
    {
      id: 13,
      title: "2D Bandit Game",
      category: "Game",
      description:
        "A 2D bandit platformer game developed with Unity, featuring custom level design, attack and movement mechanics, and enemy behaviors.",
      image: banditGame,
      github: "https://github.com/boraygulpinar/2D-Bandit-Action",
      link: "#",
      tags: ["Unity", "C#", "Game Development", "2D Game", "Level Design"],
    },
    {
      id: 14,
      title: "2D Bird",
      category: "Game",
      description:
        "A simple platformer game developed with Unity, featuring a bird character that navigates through obstacles.",
      image: flappyClone,
      github: "https://github.com/boraygulpinar/2DBirdGame",
      link: "#",
      tags: ["Unity", "C#", "Game Development", "2D Game", "Level Design"],
    },
    // Diğer projeler...
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 80, backgroundColor: "#000" }}
      animate={{ opacity: 1, x: 0, backgroundColor: "#000" }}
      exit={{ opacity: 0, x: -80, backgroundColor: "#000" }}
      transition={{ duration: 0.18, type: "tween", ease: "easeInOut" }}
      className="bg-black min-h-screen font-sans antialiased"
    >
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <img
          src={projects}
          alt="Projects"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center">
            <h1 className="mb-6 max-w-4xl text-5xl font-bold md:text-7xl text-white">
              Projects
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-300 md:text-2xl">
              Showcasing my journey of building innovative and impactful digital
              solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, id) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl border border-white/25 bg-black shadow-sm transition-all duration-300 hover:shadow-xl ${
                id === 0 ? "md:col-span-2 md:row-span-1" : ""
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`${
                    id === 0 ? "object-contain bg-black" : "object-contain"
                  } w-full h-full transition-all duration-700 group-hover:scale-105`}
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: 0,
                    color: "transparent",
                  }}
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-80 group-hover:backdrop-blur-md transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-5 transition-all duration-300">
                  {(project.id === 1 || project.id === 2) && (
                    <>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center cursor-pointer text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700 disabled:pointer-events-none disabled:opacity-50 bg-black/80 text-white hover:bg-purple-700 hover:text-white h-10 rounded-md px-8 shadow-lg"
                      >
                        <span>View Site</span>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center cursor-pointer text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700 disabled:pointer-events-none disabled:opacity-50 bg-transparent border border-white text-white hover:bg-purple-700 hover:border-purple-700 hover:text-white h-10 rounded-md px-8 shadow-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2 h-5 w-5"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 13 21.13V25" />
                        </svg>
                        <span>Code</span>
                      </a>
                    </>
                  )}
                  {project.id !== 1 && project.id !== 2 && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center cursor-pointer text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700 disabled:pointer-events-none disabled:opacity-50 bg-transparent border border-white text-white hover:bg-purple-700 hover:border-purple-700 hover:text-white h-10 rounded-md px-8 shadow-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-5 w-5"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 13 21.13V25" />
                      </svg>
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
              <div className="relative space-y-4 p-6">
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-[#23272f] text-white font-normal">
                    {project.category}
                  </div>
                  {project.year && (
                    <span className="flex items-center gap-1 text-sm text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      {project.year}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold leading-tight text-white">
                    {project.title}
                  </h3>
                  <p className="line-clamp-6 text-gray-400">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags &&
                    project.tags.map((tag, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors text-white bg-[#23272f]"
                      >
                        {tag}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
