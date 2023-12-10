"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Food on Coupon",
    descriction: "- The Capstone project",
    image: "/images/food_on_coupon.png",
    previewUrl: "https://feedtheneedy.vercel.app/",
    githubUrl: "https://github.com/202306-NEA-DZ-FEW/team-five",
  },
  {
    id: 2,
    title: "Popcorn Palace",
    descriction: "- Movie project implementing external API",
    image: "/images/popcorn_palace.png",
    previewUrl: "https://movie-project-popcornpalace.vercel.app/",
    githubUrl:
      "https://github.com/202306-NEA-DZ-FEW/movie-project-popcornpalace",
  },
  {
    id: 3,
    title: "Mad libs",
    descriction: "- Little word game using vanilla JS",
    image: "/images/madlibs.png",
    previewUrl: "https://202306-nea-dz-few.github.io/madlibs-bug-slayers/#game",
    githubUrl: "https://github.com/202306-NEA-DZ-FEW/madlibs-bug-slayers",
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref} className="md:h-screen" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-5 mb-5 md:mb-20">
        My Latest Projects
      </h2>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
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
              description={project.descriction}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
              githubUrl={project.githubUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
