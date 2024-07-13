import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col my-10">
      <nav className="mb-5">
        <ul className="flex font-bold text-md">
          <li className="mr-5 underline underline-offset-8 decoration-sky-500">
            <Link href="/">ABOUT</Link>
          </li>
          <li className="mr-5 transition duration-300 hover:scale-110 hover:text-yellow-500">
            <Link href="/projects">PROJECTS</Link>
          </li>
          <li className="transition duration-300 hover:scale-110 hover:text-yellow-500">
            <Link href="/chatbot">ASK MY BOT</Link>
          </li>
        </ul>
      </nav>
      <section className="section lg:h-80 overflow-auto leading-relaxed">
        <Image 
          src="/stoic.jpg" 
          alt="Profile Picture"
          width={200}
          height={200}
          className="sm:float-right rounded mb-5 sm:mb-1 md:mb-5 sm:ml-5 w-auto sm:w-1/2 md:w-1/3 lg:w-1/4" 
        />
        <h1 className="text-2xl font-black mb-3">Hi 👋 I&apos;m Jay</h1>
        <p>I’m a Software Engineer and my jam has been Web Development, crafting user interfaces using 
        React/Next.js and developing RESTful APIs with Node/Express with SQL databases. Besides JavaScript and
        Web Development, I dabble with languages like Python, Rust, and Golang to make systems software
        like CLI apps and to use other Backend stacks. Currently, I&apos;m diving into the fascinating world of 
        Machine Learning, driven by a curiosity to create innovative and intelligent software solutions.</p>
        {/* TODO Maybe add a bit more copy */}
      </section>
    </div>
  );
}
