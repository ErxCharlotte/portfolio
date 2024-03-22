"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Ability",
    id: "ability",
    content: (
      <ul className="list-disc pl-2">
        <li>Technical Proficiency </li>
        <li>Time Management </li>
        <li>Team Work</li>
        <li>Adaptability </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><b>Degree:</b> Bachelor of Science</li>
        <li><b>Major:</b> Software Development</li>
        <li><b>Minor:</b> Data Science</li>
        <li><b>GPA:</b> 78/100 (Distinction)</li>
        <li><b>University:</b> University of Sydney</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Collaborating with Differences</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          As a seasoned Full-Stack Developer with over 3 years of experience, I specialize in crafting comprehensive web and mobile applications. 
          </p>
          <div style={{ height: '20px' }}></div>

          <p className="text-base lg:text-lg">
          I excel in both front-end and back-end development, using JavaScript frameworks like React and Vue.js for dynamic interfaces, and Node.js, Python, and PHP for robust server-side solutions. 
          </p>
          <div style={{ height: '20px' }}></div>

          <p className="text-base lg:text-lg">
          My expertise also extends to database management with MongoDB, MySQL, and PostgreSQL.
          </p>
          <div style={{ height: '20px' }}></div>

          <p className="text-base lg:text-lg">
          I prioritize user experience, integrating responsive design principles for optimal performance across devices. Skilled in project management and problem-solving, I thrive in collaborative, fast-paced environments. As a tech enthusiast, I am committed to continuous learning, staying abreast of the latest trends and technologies.
          </p>
          <div style={{ height: '20px' }}></div>

          <p className="text-base lg:text-lg">
          My goal is to leverage my extensive skill set to create innovative, user-centric solutions that align with business objectives and enhance user experiences, making technology both accessible and intuitive.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("ability")}
              active={tab === "ability"}
            >
              {" "}
              Ability{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
