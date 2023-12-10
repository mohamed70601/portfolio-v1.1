"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Tailwind</li>
      </ul>
    ),
  },
  {
    title: "Additions",
    id: "additions",
    content: (
      <ul className="list-disc pl-2">
        <li>Design</li>
        <li>Planning</li>
        <li>Workflow</li>
        <li>Organized</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white md:h-screen snap-y">
      <div className="md:grid md:grid-cols-2 gap-10 items-center xl:gap-20 py-8 px-4 sm:py-16 xl:px-16">
        <Image
          src="/images/office.jpg"
          width={8256}
          height={5504}
          alt="office-image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base xl:text-lg">
            Passionate and innovative software developer, proud graduate of
            Re:Coded's frontend bootcamp. My journey is fueled by a relentless
            pursuit of knowledge, constantly seeking to broaden my skill set. My
            passion lies in crafting inventive solutions and building
            cutting-edge projects. I am eager to contribute to impactful
            endeavors that shape the future, ready to embark on a journey of
            continuous growth and excited about the opportunities that lie ahead
            especially in the dynamic spheres of AI and machine learning.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("additions")}
              active={tab === "additions"}
            >
              Additions
            </TabButton>
          </div>
          <div className="mt-8 ">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
