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
        <Image src="/stoic.jpg" alt="Profile Picture" width={200} height={200} className="float-left rounded mr-5 mb-4" />
        <h1 className="text-2xl font-black mb-3">Hello 👋, I&apos;m Jay Cruz</h1>
        <p className="lg:w-10/12">I’m a Software Engineer based in Orlando, FL. My main domain has been in
        Web Development, but I’m interested in the broader world of Programming. 
        I studied Graphic Design and specialized in Web Design. I also completed
        a “Full-Stack” JavaScript centered Coding Bootcamp. I did a short gig with a Startup
        as a Front-End Developer, worked in Tech Support for ServiceNow, and I’m currently a 
        Teaching Assistant for the 2U/edX Coding Bootcamps.</p>
      </section>
    </div>
  );
}
