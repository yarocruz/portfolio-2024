import Link from "next/link";

const PROJECTS = [  
    {
        id: 1,
        title: "podlr",
        short_description: "Letterboxd for podcasts",
        long_description: "podlr is a web application that allows users to keep track of the podcasts they listen to. Users can rate, review, and keep track of their favorite episodes. podlr also provides a social aspect, allowing users to follow their friends and see what they are listening to.",
        demo: "https://podlr.vercel.app/",
        github: "https//github.com/jaycruz/podlr"
    },
    {
        id: 2,
        title: "anchor",
        short_description: "Link bookmarking application",
        long_description: "anchor is a web application that allows users to keep track of the links they find on the internet. Users can save, categorize, and keep track of their favorite links. anchor also provides a social aspect, allowing users to follow their friends and see what they are saving.",
        demo: "https://anchor.vercel.app/",
        github: "https//github.com/jaycruz/anchor"
    },
    {
        id: 3,
        title: "garden",
        short_description: "Gardening application",
        long_description: "garden is a web application that allows users to keep track of the plants they have in their garden. Users can rate, review, and keep track of their favorite plants. garden also provides a social aspect, allowing users to follow their friends and see what they are growing.",
        demo: "https://garden.vercel.app/",
        github: "https//github.com/jaycruz/garden"
    },
    {
        id: 4,
        title: "taste",
        short_description: "Recipe application",
        long_description: "taste is a web application that allows users to keep track of the recipes they find on the internet. Users can save, categorize, and keep track of their favorite recipes. taste also provides a social aspect, allowing users to follow their friends and see what they are cooking.",
        demo: "https://taste.vercel.app/",
        github: "https//github.com/jaycruz/taste"
    },
    {
        id: 5,
        title: "journal",
        short_description: "Journaling application",
        long_description: "journal is a web application that allows users to keep track of their thoughts. Users can write, categorize, and keep track of their journal entries. journal also provides a social aspect, allowing users to follow their friends and see what they are writing.",
        demo: "https://journal.vercel.app/",
        github: "https//github.com/jaycruz/journal"
    }
];

export default function Projects() {
  return (
    <div className="flex flex-col my-10">
      <nav className="mb-5">
        <ul className="flex font-bold text-xl">
          <li className="mr-5">
            <Link href="/">ABOUT</Link>
          </li>
          <li className="underline underline-offset-8 decoration-sky-500">
            <Link href="/projects">PROJECTS</Link>
          </li>
        </ul>
      </nav>
      <section className="section md:h-80">
        <div className="flex justify-stretch">
            <ul className="mr-10">
                {PROJECTS.map((project) => (
                    <li key={project.id} className="mb-5 font-black hover:bg-cyan-400">
                        <a href="#">{project.title.toUpperCase()}</a>
                    </li>
                ))}
            </ul>
            <section>
                <h1>Title</h1>
                <p>Short Description</p>
                <span>Demo</span><span>Code</span>
            </section>
        </div>
      </section>
    </div>
  );
}
