"use client";

import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import Image from "next/image";

const AboutPage = () => {
  const introduction =
    "I'm Sumit Dalai, a Full Stack Developer with a passion for creating innovative web and mobile solutions. With expertise in modern tech stacks, and cloud platforms, I transform ideas into scalable applications.";

  const skills = [
    "React/Next.js",
    "Node.js",
    "React Native",
    "TypeScript",
    "MongoDB/PostgreSql",
    "AWS",
    "Docker",
    "Tailwind CSS",
    "GraphQL",
    "CI/CD",
    "Jest",
    "Devops",
    "Spring Boot",
  ];

  return (
    <div className="min-h-screen mt-4 bg-white p-8">
      <div className="max-w-4xl mx-auto bg-neutral-900/50 rounded-2xl border border-gray-800 shadow-xl p-8">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="relative w-48 h-48">
            <Image
              src="/images/portfolio-photo-Photoroom.png"
              alt="Profile"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              About Me
            </h1>
            <TextGenerateEffect
              words={introduction}
              className="text-gray-300"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-3 rounded-lg text-gray-300 text-center hover:bg-gray-700/50 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        {/* <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-purple-500 pl-4">
              <h3 className="text-xl font-medium text-gray-200">
                Senior Developer
              </h3>
              <p className="text-gray-400">Company Name • 2021 - Present</p>
              <p className="text-gray-300 mt-2">
                Led development of multiple full-stack applications using modern
                technologies.
              </p>
            </div>
          </div>
        </div> */}

        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">Education</h2>
          <div className="border-l-2 border-cyan-500 pl-4">
            <h3 className="text-xl font-medium text-black">
              Bachelor of Technology
            </h3>
            <p className="text-black">Siksha 'O' Anusandhan • 2021 - 2025</p>
            <p className="text-black mt-2">
              Computer Science and Informational Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
