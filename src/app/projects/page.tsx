"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { PROJECTS } from "./projects";

export default function Projects() {
  const [selectedProjectID, setSelectedProjectID] = useState(1)

  function handleProjectSelection(id: number) {
    setSelectedProjectID(id)
  }

  const project = PROJECTS.filter(project => project.id === selectedProjectID)

  return (
    <div className="flex flex-col my-10">
      <nav className="mb-5">
        <ul className="flex text-nowrap overflow-auto font-bold text-md">
          <li className="transition duration-300 ease-in-out hover:scale-110 mr-5 hover:text-yellow-500">
            <Link href="/">ABOUT</Link>
          </li>
          <li className="mr-5 underline underline-offset-8 decoration-sky-500 text-yellow-500">
            <Link href="/projects">PROJECTS</Link>
          </li>
          <li className="mr-5 transition duration-300 hover:scale-110 hover:text-yellow-500">
            <Link href="/chatbot">ASK MY BOT</Link>
          </li>
          <li className="mr-5 transition duration-300 hover:scale-110 hover:text-yellow-500">
            <a href="/resume.pdf" target="_blank">RESUME</a>
          </li>
          {/* ADD Section to download resume */}
        </ul>
      </nav>
      <section className="section lg:h-80 overflow-auto leading-relaxed">
        <div className="md:flex">
            <ul className="md:mr-10 -ml-8 basis-1/4">
                {PROJECTS.map((project) => (
                    <li 
                      key={project.id} 
                      className={selectedProjectID === project.id ? "mb-5 px-10 text-lg font-black bg-cyan-400 hover:cursor-pointer" : "transition duration-300 hover:scale-110 mb-5 px-10 text-lg font-black hover:cursor-pointer hover:text-yellow-500" }
                      onClick={() => handleProjectSelection(project.id)}
                      >
                        {project.title.toUpperCase()}
                    </li>
                ))}
            </ul>
            <section className="">
                <Image
                  src={project[0].image as string}
                  alt={project[0].title}
                  width={100}
                  height={100}
                  className="sm:float-left mb-5 sm:mb-2 sm:mr-4 w-full sm:w-1/4 md:w-1/5 lg:w-1/6"
                /> 
                <h1 className="logo text-lg font-black mb-5">{`${project[0].title.toUpperCase()} - ${project[0].short_description}`}</h1>
                <p className="mb-5">{project[0].long_description}</p>
                <div className="flex text-cyan-400">
                  {/* TODO When hovering over demo link, show a preview image of project */}
                  <span className="mr-4 transition duration-300 hover:scale-110"><a href={project[0].demo} target="_blank">demo</a></span>
                  <span className="transition duration-300 hover:scale-110"><a href={project[0].github} target="_blank">code</a></span>
                </div>
            </section>
        </div>
      </section>
    </div>
  );
}
