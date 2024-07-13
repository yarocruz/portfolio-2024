import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col my-10">
      <nav className="mb-5">
        <ul className="flex font-bold text-md">
          <li className="mr-5 transition duration-300 hover:scale-110 hover:text-yellow-500">
            <Link href="/">ABOUT</Link>
          </li>
          <li className="mr-5 transition duration-300 hover:scale-110 hover:text-yellow-500">
            <Link href="/projects">PROJECTS</Link>
          </li>
          <li className="underline underline-offset-8 decoration-sky-500">
            <Link href="/chatbot">ASK MY BOT</Link>
          </li>
        </ul>
      </nav>
      <section className="section lg:h-80 overflow-auto leading-relaxed">
       THIS IS THE CHATBOT PAGE 
      </section>
    </div>
  );
}
