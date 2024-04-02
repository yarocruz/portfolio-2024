"use client";
import Link from "next/link";
import { useState } from "react";

const PROJECTS = [  
    {
        id: 1,
        title: "podlr",
        short_description: "Letterboxd for podcasts",
        long_description: "Podlr is a web application that allows users to keep track of the podcasts they listen to. Users can rate, review, and keep track of their favorite episodes. podlr also provides a social aspect, allowing users to follow their friends and see what they are listening to.",
        demo: "https://podlr.vercel.app/",
        github: "https//github.com/jaycruz/podlr"
    },
    {
        id: 2,
        title: "anchor",
        short_description: "Link bookmarking application",
        long_description: "Anchor is a web application that allows users to keep track of the links they find on the internet. Users can save, categorize, and keep track of their favorite links. anchor also provides a social aspect, allowing users to follow their friends and see what they are saving.",
        demo: "https://anchor.vercel.app/",
        github: "https//github.com/jaycruz/anchor"
    },
    {
        id: 3,
        title: "garden",
        short_description: "Gardening application",
        long_description: "Garden is a web application that allows users to keep track of the plants they have in their garden. Users can rate, review, and keep track of their favorite plants. garden also provides a social aspect, allowing users to follow their friends and see what they are growing.",
        demo: "https://garden.vercel.app/",
        github: "https//github.com/jaycruz/garden"
    },
    {
        id: 4,
        title: "taste",
        short_description: "Recipe application",
        long_description: "Taste is a web application that allows users to keep track of the recipes they find on the internet. Users can save, categorize, and keep track of their favorite recipes. taste also provides a social aspect, allowing users to follow their friends and see what they are cooking.",
        demo: "https://taste.vercel.app/",
        github: "https//github.com/jaycruz/taste"
    },
    {
        id: 5,
        title: "journal",
        short_description: "Journaling application",
        long_description: "Journal is a web application that allows users to keep track of their thoughts. Users can write, categorize, and keep track of their journal entries. journal also provides a social aspect, allowing users to follow their friends and see what they are writing.",
        demo: "https://journal.vercel.app/",
        github: "https//github.com/jaycruz/journal"
    }
];

export default function Projects() {
  const [selectedProjectID, setSelectedProjectID] = useState(1)

  function handleProjectSelection(id: number) {
    setSelectedProjectID(id)
  }

  const filteredProject = PROJECTS.filter(project => project.id === selectedProjectID)

  return (
    <div className="flex flex-col my-10">
      <nav className="mb-5">
        <ul className="flex font-bold text-xl">
          <li className="transition duration-300 ease-in-out hover:scale-110 mr-5">
            <Link href="/">ABOUT</Link>
          </li>
          <li className=" underline underline-offset-8 decoration-sky-500">
            <Link href="/projects">PROJECTS</Link>
          </li>
        </ul>
      </nav>
      <section className="section lg:h-80">
        <div className="md:flex">
            <ul className="md:mr-10 -ml-8 basis-1/4">
                {PROJECTS.map((project) => (
                    <li 
                      key={project.id} 
                      className={selectedProjectID === project.id ? "mb-5 px-10 text-lg font-black bg-cyan-400 hover:cursor-pointer" : "transition duration-300 hover:scale-110 mb-5 px-10 text-lg font-black hover:cursor-pointer" }
                      onClick={() => handleProjectSelection(project.id)}
                      >
                        {project.title.toUpperCase()}
                    </li>
                ))}
            </ul>
            <section className="flex flex-col">
                <h1 className="logo text-lg font-black mb-5">{`${filteredProject[0].title.toUpperCase()} - ${filteredProject[0].short_description}`}</h1>
                <p className="mb-5 lg:w-10/12">{filteredProject[0].long_description}</p>
                <div className="flex text-cyan-400">
                  <span className="mr-4 transition duration-300 hover:scale-110"><a href="#">demo</a></span>
                  <span className="transition duration-300 hover:scale-110"><a href="#">code</a></span>
                </div>
            </section>
        </div>
      </section>
    </div>
  );
}
