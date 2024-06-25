"use client";

import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Cags Movie",
    description: "Kullanıcıların Üye girişi yapabildikleri bir film bilgilendirme ve listeleme sitesi. Kullanılan teknolojiler: React.js , tailwind.css",
    image: "/movie.jpg",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Hcaglar32/movie-project",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Hava Durumu",
    description: "Kullanıcıların dünyadaki bütün şehirleri aratarak o şehrin hava durumunu öğrenebileceği bir uygulama. Kullanılan teknoloji:vite.js",
    image: "/weatherapp.jpg",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Hcaglar32/WeatherApp",
    previewUrl: "/",
  },
];

const Project = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const isInview = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filtredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardvariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="project" className="mb-12">
      <h2
        className="text-center text-4xl text-white font-semibold
        mt-4 mb-8 lg:mt-8 lg:mb-12"
      >
        Projelerim
      </h2>

      <div
        className="text-white flex flex-row justify-center items-center
        gap-5 py-6"
      >
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />

    

        <ProjectTag
          name="Frontend"
          onClick={handleTagChange}
          isSelected={tag === "Frontend"}
        />
      </div>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
        {filtredProject.map((project, index) => (
          <motion.li
            key={index}
            variants={cardvariants}
            initial="initial"
            animate={isInview ? "animate" : "inital"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              description={project.description}
              gitUrl={project.gitUrl}
              image={project.image}
              previewUrl={project.previewUrl}
              title={project.title}
              key={project.id}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
