import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col my-10">
      <nav className="mb-5">
        <ul className="flex font-bold text-xl">
          <li className="mr-5 underline underline-offset-8 decoration-sky-500">
            <Link href="/">ABOUT</Link>
          </li>
          <li className="">
            <Link href="/projects">PROJECTS</Link>
          </li>
        </ul>
      </nav>
      <section className="section lg:h-80">
        <Image 
          src="/stoic.jpg" 
          alt="Profile Picture"
          width={200}
          height={200}
          className="sm:float-right rounded mb-4 sm:ml-5 w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6" 
        />
        <h1 className="text-2xl font-black mb-3">Hello 👋 I&apos;m Jay Cruz</h1>
        <p className="xl:w-11/12">I’m a Software Engineer and my main domain has been in
        Web Development. My specialty has been in crafting user interfaces using React/Next.js and 
        developing robust RESTful APIs with Node/Express with SQL databases. Beyond my core domain, 
        I've been broadening my horizon by diving into languages like Python, Rust, and Golang, 
        aiming to tackle unique software challenges across various aspects of technology.</p>
      </section>
    </div>
  );
}
