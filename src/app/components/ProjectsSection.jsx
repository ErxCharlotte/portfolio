"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Animation Fans Forum - Website",
    description: "Based on PHP. Work as a full stack developer.",
    image: "/images/projects/forum-web.png",
    tag: ["All", "Web"],
    gitUrl: "http://usuk.site/",
    previewUrl: "https://drive.google.com/file/d/1Cgf8aw2O8NLpQqzjryYLnVNJijn9nlfi/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Animation Fans Forum - Mobile",
    description: "Based on PHP. Work as a full stack developer.",
    image: "/images/projects/forum-mobile.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://usuk.site/portal.php?mod=index&mobile=2",
    previewUrl: "https://drive.google.com/file/d/1VYi1lS0Y0pf_oDInuOVKH6G0rn97RScb/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Based on React. Work as a font-end developer.",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.kynono.world/",
    previewUrl: "https://drive.google.com/file/d/1OIW8uOZ1DULGBDYMjo-Xoi8pGbMqKGyJ/view?usp=drive_link",
  },
  {
    id: 4,
    title: "FFXIV Strategy Website",
    description: "A raid strategy planning tool for Final Fantasy XIV, built with Next.js and TailwindCSS. Designed and developed the front-end interface, including a drag-and-drop timeline editor and live preview features.",
    image: "/images/projects/xivstrat.png",
    tag: ["All", "Web"],
    gitUrl: "https://xivstrat.com",
    previewUrl: "https://xivstrat.com",
  },
  {
    id: 5,
    title: "Game adapted from Angry Birds",
    description: "Based on Unity. Work as a game developer.",
    image: "/images/projects/angrybird.png",
    tag: ["All", "Game"],
    gitUrl: "http://114.132.42.174:1923/",
    previewUrl: "https://drive.google.com/file/d/12lMoLl4JpkBhLkv0HtbrAH-o9jiwIJJt/view?usp=drive_link",
  },
  {
    id: 6,
    title: "Game adapted from Happy Eliminating",
    description: "Based on Unity. Work as a game developer.",
    image: "/images/projects/yang.png",
    tag: ["All", "Game"],
    gitUrl: "http://114.132.42.174:1919/",
    previewUrl: "https://drive.google.com/file/d/1ydn4kEvD8rA7ePYCT--2QwTFHRcxcUVJ/view?usp=drive_link",
  },
  {
    id: 7,
    title: "Game adapted from Flappy Wings",
    description: "Based on Unity. Work as a game developer.",
    image: "/images/projects/flybird.png",
    tag: ["All", "Game"],
    gitUrl: "http://114.132.42.174:190/",
    previewUrl: "https://drive.google.com/file/d/1-WhxHknes75Vb8XFF8-F44y1SrzpWhWJ/view?usp=drive_link",
  },
  {
    id: 8,
    title: "Application to improve educational inequality",
    description: "School project, Use Figma to develop prototypes. Work as a project manager.",
    image: "/images/projects/app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://drive.google.com/file/d/1JQQ9O3n7xUogxd4AIMEOpSsf5A0tJQc2/view?usp=drive_link",
    previewUrl: "https://drive.google.com/file/d/1PA22eqZswfeSVDy9oLbxvXhIXY0bIqcW/view?usp=drive_link",
  },
  {
    id: 9,
    title: "A website for pet hotel",
    description: "School project, based on HTML, CSS and JavaScript. Work as a project manager and font-end developer.",
    image: "/images/projects/pet.png",
    tag: ["All", "Web"],
    gitUrl: "https://erxcharlotte.github.io/BestMate-Paradise/",
    previewUrl: "https://drive.google.com/file/d/1kcm3vl-mkNOrK1xRSy_JpKca1UiaeuXo/view?usp=drive_link",
  },
  {
    id: 10,
    title: "Personal blog",
    description: "Based on Wordpress. Work as a full stack developer.",
    image: "/images/projects/blog.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.kynono.world/",
    previewUrl: "https://drive.google.com/file/d/12EIT8hKgMwsxWjlmDQQrUWR1AT8UAZd4/view?usp=drive_link",
  },

  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setCurrentPage(1);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game"
          isSelected={tag === "Game"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {currentProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-md ${
              currentPage === index + 1 ? 'bg-gray-800 text-white' : 'bg-white text-black'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
