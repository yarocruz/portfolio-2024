import Link from "next/link";

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
      <section className="section sm:h-80">
        <h1>TODOS</h1>
      </section>
    </div>
  );
}
